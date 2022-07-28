<template>
  <div class="album-grid">
    <div v-for="(a,i) in albumInfo.reverse()">
      <h2 class="album-h" :class="color[i%3]">{{a.year}}</h2>
      <router-link :to="/Album/+a.year">
        <el-image
                :src="a.src"
                :lazy="true"
                fit="cover"
                class="album-cover">
        </el-image>
      </router-link>
    </div>
  </div>
</template>

<script>
import album from "vitePluginDirInfo/album"

export default {
  name:"Album",
  setup(){
    let albumInfo = [
      /*
      {year:String,name:String, src:String}
      ...
      */
    ]
    album.forEach(a=>{
      let tyb = a.split("/")
      let fileName = tyb.pop()
      let year = tyb.pop()
      if(typeof(albumInfo.find(v=>v.year==year))=="undefined")
        albumInfo.push({year:year,name:fileName, src:a})
    })
    return {
      albumInfo,
      color:["c-0","c-1","c-2"]
    }
  }
}
</script>

<style scoped>
  @media screen and (min-width: 992px){
    .album-grid{
      grid-template-columns: repeat(auto-fill, 200px);
      padding: 20px;
      grid-column-gap: 10px;
    }
  }
  @media screen and (max-width: 992px) {
    .album-grid{
      grid-template-columns: repeat(auto-fill, 170px);
      padding: 5px;
    }
  }
  .album-grid{
    display: grid;
    justify-content: space-around;
  }
  .album-cover{
    width: 100%;
    height: 160px;
    -moz-box-shadow: 8px 8px 4px #ababab;
    box-shadow: 8px 8px 4px #ababab;
  }
  .album-h{
    border:5px solid;
    margin-bottom:2px;
  }
  .c-0{color: #2D4488}
  .c-1{color: #FF9900}
  .c-2{color: #441739}
</style>