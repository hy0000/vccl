<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="album-bread">
    <el-breadcrumb-item to="/Album">Album</el-breadcrumb-item>
    <el-breadcrumb-item>{{year}}</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="album-grid">
    <div v-for="p in pics">
      <a :href="p.src" target="_blank">
        <el-image
              :src="p.src"
              :lazy="true"
              fit="cover"
              class="album-cover">
        </el-image>
      </a>
      <div class="pic-name">{{p.name}}</div>
    </div>
  </div>
</template>

<script>
import album from "vitePluginDirInfo/album"

export default {
  name: "[year].vue",
  props:{year:String},
  setup(props){
    let pics = [
      /*
      {name:String, src:String}
      ...
      */
    ]
    album.forEach(v=>{
      let tyb = v.split("/")
      let fileName = tyb.pop()
      let year = tyb.pop()
      if(year==props.year)
        pics.push({
          name:fileName.split('.').slice(0,-1).join('.'),
          src:v
        })
    })
    const imgList = pics.map(v=>v.src)
    return {
      pics,
      imgList
    }
  },
  data() {
    return {
      inImgView: false,
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 992px){
  .album-grid{
    grid-template-columns: repeat(auto-fill, 160px);
    padding: 20px;
    grid-column-gap: 10px;
  }
}
@media screen and (max-width: 992px) {
  .album-grid{
    grid-template-columns: repeat(auto-fill, 120px);
    padding: 5px;
  }
}
.album-bread{
  font-size: 1.2em;
  margin:20px 0 20px 40px;
}
.album-grid{
  display: grid;
  justify-content: space-around;
  grid-row-gap: 20px;
}
.album-cover{
  width: 100%;
  height: 160px;
  cursor: pointer;
}
.pic-name{
  font-size: .8em;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>