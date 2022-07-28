<!--
  *researches三个页面的模板
  *结构如下
  *-title
  *-research interests
  *-<slot>
  *-publications
  *--[img][text]
  *--***
  其中论文的标题通过paperId在论文数据文件p中找到对应论文, 生成标题
-->
<template>
  <h2>{{info.title}}</h2>
  <el-row class="interests">
    <h3>
      {{info.researchInterests.join(' | ')}}
    </h3>
  </el-row>
  <slot></slot>
  <el-divider></el-divider>
  <el-row v-for="p in selPaper" class="p">
    <el-image :src="pImg(p.id)"
              class="p-img"
              fit="contain"
              lazy
    ></el-image>
    <div class="p-text">
      <span class="p-title">{{p.title}}</span>
      <span v-for="a in p.appendix">
        <el-link :href="a.src" type="primary" target="_blank" class="p-appendix">
          [{{a.name}}]
        </el-link>
      </span>
      <p>{{pDesc(p.id)}}</p>
    </div>
    <el-divider></el-divider>
  </el-row>
</template>

<script>
import {publications} from  "../datas/publications.js"

export default {
  name: "researchIntro",
  props:{
    info:Object
  },
  setup(props){
    const p = publications
    function getPaperById(paperIdList){
      let allPaper = [...p.book_chapters, ...p.conference_proceedings, ...p.journal_articles]
      let selPaper = allPaper.filter(v=>{
        return paperIdList.includes(v.id)
      })
      return selPaper.map(v=>{
        let paperStr = [...v.authors,...v.corresponding_author].join(',')
        return {
          "id": v.id,
          "title": paperStr+'. '+v.title,
          "appendix": v.appendix
        }
      })
    }
    let idList = props.info.publications.map(v=>v.paperId)
    const selPaper = getPaperById(idList)
    return {selPaper}
  },
  methods:{
    pImg(paperId){
      return this.info.publications.find(v=>v.paperId==paperId).img
    },
    pDesc(paperId){
      return this.info.publications.find(v=>v.paperId==paperId).description
    }
  }
}
</script>

<style scoped>
.interests{
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  justify-content:center;
}
.interests h3{
  padding-left:10px;
  padding-right: 10px;
  font-weight: bold;
}
.border-r{
  border-right: 2px solid #2c3e50;
}
.p{
  justify-content:center;
}
.p-img{
  width: 256px;
  max-height: 256px;
}
.p-text{
  width: 70%;
  text-align: left;
  padding: 0 10px 0 10px;
}
@media screen and (max-width: 992px){
  .p-text{
    width: 100%;
  }
}
.p-title{
  font-weight: bold;
}
.p-appendix{
  font-size: 16px;
  margin-right: 8px;
}
</style>