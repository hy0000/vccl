<!--
 * @FileDescription: 文献检索页面
 * 主要逻辑有点复杂, 梳理如下
    |检索依靠 Type 和 Authors 决定
    |   results = (paper∈Type) && (paper的作者在Authors中)
    |对应的变量是 Type: stateTypes, Authors: selectedNames
    |
    |检索的过程分以下几步
    | (1) 以下变量发生变化则改变触发（3）
    |     @stateTypes: type的选择状态
    |     @includeCA: 是否包含通讯作者
    |     @numPB: 最少的文章数量
    |
    | (2) 每当重新筛选paper后,计算属性updateAuthor更新页面中的作者列表
    |     即<tab-select name="author">...</tab-selected>
    |     这个子组件的tab-state参数是一个布尔值数组，用于标记是否选中
    |     当子组件中的元素被选中会调用selHandelName方法改变selectedName数组触发（3）
    |
    |（3） 根据文章类型和作者等参数筛选paper, 见计算属性：paperFilter, 触发（2）
 -->
<template>
  <div class="publication-container">
    <tab-select :tabs="types"
                :tabs-state="stateTypes"
                name="type"
                class="sel-bar"
                @selHandle="selHandleType"
    ></tab-select>
    <tab-select :tabs="updateAuthors"
                :tabs-state="stateAuthors"
                name="author"
                class="sel-bar"
                @selHandle="selHandleName">
      <el-checkbox v-model="includeCA" class="ica">include corresponding author *</el-checkbox>
      <span class="num-pb">min published</span>
      <el-input-number size="mini"
                       v-model="numPB"
                       :min="1"
                       label="min published"
      ></el-input-number>
    </tab-select>
    <ol>
      <li v-for="(p,i) in paperFilter"
          :class="[i%2 ? '':'li-odds', 'p-li']">
        <div class="p-header">
          <span v-for="(a,j) in p.authors"
                :class="{'name-highlight': highlightName(a, false)}">
            {{a}}
            <template v-if="j!=p.authors.length-1">, </template>
          </span>
          <span v-for="(a,j) in p.corresponding_author"
                :class="{'name-highlight': highlightName(a, true)}">
            {{a}}*
            <template v-if="j!=p.corresponding_author.length-1">, </template>
          </span>.
          <span v-for="a in p.appendix">
            <el-link :href="a.src" type="primary" target="_blank" class="p-appendix">
              [{{a.name}}]
            </el-link>
          </span>
        </div>
        <div class="p-title">{{p.title}}</div>
      </li>
    </ol>
  </div>
  <div class="publication-container"></div>
</template>

<script>
import Nav from "../components/Nav.vue";
import tabSelect from "../components/tabSelect.vue";
import {publications} from "../datas/publications.js"

export default {
  name: "Publications",
  data(){
    return {
      d:publications,
      allPaper:[],  //其实是经过type筛选后的paper
      types:["All","Journal","Conference","Book"],
      authors:[],
      includeCA:false, //include corresponding author
      stateTypes:[true, false, false, false],
      stateAuthors: [],
      numPB:3,          //number of min published paper
      selectedNames:[]  //author's names that be selected
    }
  },
  methods:{
    authorInit(){
      let that = this
      function accumulateAuthor(name){
        if(name in authors){
          authors[name] += 1
        }else{
          authors[name] = 1
        }
      }

      let authors = []
      this.allPaper = []
      if(this.stateTypes[0]||this.stateTypes[1])
        this.allPaper.push(...this.d.journal_articles)
      if(this.stateTypes[0]||this.stateTypes[2])
        this.allPaper.push(...this.d.conference_proceedings)
      if(this.stateTypes[0]||this.stateTypes[3])
        this.allPaper.push(...this.d.book_chapters)
      if(this.stateTypes[0]){
        this.allPaper = this.allPaper.sort((a,b)=>{
          return b.id - a.id
        })
      }
      this.allPaper.forEach((p)=>{
        p.authors.forEach(accumulateAuthor)
        if(that.includeCA)
          p.corresponding_author.forEach(accumulateAuthor)
      })
      let sorted_key = Object.keys(authors).sort((a,b)=>{
        return authors[b]-authors[a]
      })
      return  sorted_key.reduce((arr, k)=>{
        if(authors[k]>=that.numPB)
          arr.push(k+"("+String(authors[k])+")")
        return arr
      }, [])
    },
    selHandleType(tabName, tabId){
      this.stateTypes = new Array(4).fill(false)
      this.stateTypes[tabId] = true
    },
    selHandleName(tabName, tabId){
      let name = tabName.replace(/\(\d+\)/,"")
      if(this.stateAuthors[tabId]){
        let i = this.selectedNames.indexOf(name)
        this.selectedNames.splice(i,1)
      }
      else
        this.selectedNames.push(name)
      this.stateAuthors[tabId] = !this.stateAuthors[tabId]
    },
    highlightName(name, corresponding){
      if(corresponding && (!this.includeCA))
        return false
      return this.selectedNames.includes(name)
    }
  },
  computed:{
    updateAuthors(){
      this.authors = this.authorInit()
      this.stateAuthors = new Array(this.authors.length).fill(false)
      this.selectedNames = []
      return this.authors
    },
    paperFilter(){
      if(this.selectedNames.length){
        return this.allPaper.filter((p)=>{
          for(let i=0;i<this.selectedNames.length;i+=1){
            let name = this.selectedNames[i]
            if(p.authors.includes(name)){
              return p
            }else if(this.includeCA){
              if(p.corresponding_author.includes(name)){
                return p
              }
            }
          }
        })
      }else{
        return this.allPaper
      }
    }
  },
  components: {Nav, tabSelect}
}
</script>

<style scoped>

@media screen and (min-width: 992px){
  .publication-container{
    padding:0 40px 0 40px;
  }
}
@media screen and (max-width: 992px) {
  .publication-container{
    padding:0 10px 0 10px;
  }
}
.sel-bar{
  margin: 5px 0 5px 0;
}
.ica{
  margin-right: 60px;
}
.num-pb{
  margin-right:10px;
  font-size: 14px;
}
.p-li{
  text-align: left;
  padding: 8px 0 8px 0;
}
.p-header{
  font-weight: bold;
}
.p-title{
  font-style: italic;
  color:#606266;
  margin-top:5px;
}
.li-odds{
  background-color: #f5f7fe;
}
.name-highlight{
  background-color: #3d2475;
  color: #fff;
  border-radius: 3px;
}
.p-appendix{
  font-size: 16px;
  margin-right: 8px;
}
</style>