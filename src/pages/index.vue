<template>
  <!--首页背景图-->
  <el-image
      class="home-img"
      fit="cover"
      :style={width:homeCenterWidth,height:homeCenterHeight,left:homeImgOffsetLeft}
      :src="homeImg"
  ></el-image>

  <!--简介部分-->
  <a id="home" style="position:absolute;top:0"></a>
  <el-row class="home">
    <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="4"/>
    <el-col :xs="23" :sm="22" :md="14" :lg="13" :xl="10" id="home-container">
      <el-row class="home-title-cn">
        视觉认知与类脑计算实验室
      </el-row>
      <el-row class="home-title-en">
        Center for Visual Cognition and Brain-Inspired Computation
      </el-row>
      <el-row>
        <p class="home-description" style="text-indent:32px">
          {{d.description}}
        </p>
        <p class="home-description">
          <el-row>We belong to :</el-row>
          <el-row v-for="b in d.belong_to">
            <el-link
                type="primary"
                :href="b.link"
                target="_blank"
                style="font-size:1em">
              {{ b.institution }}
            </el-link>
          </el-row>
        </p>
        <p class="home-description">
          Address: {{d.address}}
        </p>
      </el-row>
    </el-col>
  </el-row>

  <!--剩余项目-->
  <el-row class="home-infos">

    <!--这两行是响应式宽度调整-->
    <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="4"/>
    <el-col :xs="22" :sm="22" :md="22" :lg="22" :xl="16">

      <!--Research Topics-->
      <el-row class="home-sub-item">
        <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
          <el-image
              class="home-sub-img adjust-mid"
              fit="contain"
              :src="homeImg1"
          ></el-image>
        </el-col>

        <el-col  :xs="24" :sm="24" :md="14" :lg="14" :xl="14"
                 style="text-align:left">
          <h1>Research Topics</h1>
          <p v-for="rt in d.research_topics">
            {{rt}}
          </p>
        </el-col>
      </el-row>
      <a id="research"></a>
      <el-divider></el-divider>

      <!--Research Groups-->
      <el-row>
        <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
          <h1 class="xs-left">Research Groups</h1>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around" style="padding-bottom: 20px">
        <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7"
          v-for="(rg, i) in d.research_groups">
          <el-image
              class="home-img-r"
              fit="contain"
              :src="homeImgRG[i]"
          ></el-image>
          <div>
            <router-link class="home-rg-group" type="primary"
                     :to="rg.link">
              {{rg.group}}
            </router-link>
          </div>
          <div class="home-rg-projects">
            <p v-for="proj in rg.projects">{{proj}}</p>
          </div>
        </el-col>
      </el-row>

      <el-divider></el-divider>

      <!--Latest News-->
      <el-row class="home-sub-item">
        <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10"
          class="pad-t0">
          <el-image
              class="home-sub-img"
              fit="contain"
              :src="homeImg2"
          ></el-image>
        </el-col>
        <el-col  :xs="24" :sm="24" :md="14" :lg="14" :xl="14"
                 style="text-align:left">
          <h1>Latest News</h1>
          <p v-for="ln in d.last_news">
            {{ln.date}} {{ln.content}}
          </p>
        </el-col>
      </el-row>


    </el-col>
  </el-row>
  <foo/>
</template>

<script>
import Nav from "../components/Nav.vue"
import foo from "../components/foo.vue";
import homeImg from "../assets/img/home.png"
import homeImg1 from  "../assets/img/home-1.jpg"
import homeImg2 from  "../assets/img/home-2.jpg"
import homeRG0 from  "../assets/img/home-rg-0.jpg"
import homeRG1 from  "../assets/img/home-rg-1.jpg"
import homeRG2 from  "../assets/img/home-rg-2.jpg"

import d from "../datas/home.json"

export default {
  name:"Home",
  data(){
    return {
      homeCenterWidth:null,
      homeCenterHeight:null,
      homeImgOffsetLeft:null,
      homeImg,
      homeImg1,
      homeImg2,
      homeImgRG:[homeRG0,homeRG1,homeRG2],
      d:d,
      base:import.meta.env.BASE_URL
    }
  },
  components: {
    Nav,
    foo
  },
  methods:{
    resizeImg(){
      let offsetLeft = document.getElementById("home-container").offsetLeft
      if(offsetLeft<20)
        offsetLeft=0
      this.homeCenterWidth = String(window.innerWidth - offsetLeft * 2) + 'px'
      this.homeImgOffsetLeft = String(offsetLeft) + 'px'
      this.homeCenterHeight = String(window.innerHeight) +'px'
    }
  },
  mounted() {
    this.resizeImg()
    /* 手机上有影响, 所以不用了
    window.onresize = () => {
      that.resizeImg()
    }*/
  }
}
</script>

<style>
/*mobile*/
@media screen and (max-width: 992px) {
  .home-sub-item{
    padding:20px 0 10px 0;
  }
  .home-img-r{
    width: 270px;
    height:240px;
    margin-bottom: 20px;
  }
}
/*PC*/
@media screen and (min-width: 992px) {
  .home-sub-item{
    padding:20px 0 20px 0;
  }
  .home-img-r{
    width: 180px;
    height:160px;
    margin-bottom: 20px;
  }
  .adjust-mid{
    top:50%;
    transform: translateY(-50%);
  }
  .pad-t0{
    padding-top: 30px;
  }
}
.home-img{
  position: fixed!important;
  top:0;
  z-index: -1;
  opacity: 0.8;
}
.home{
  text-align:left;
}
#home-container{
  padding: 40px 10px 60px 0;
  background-color: rgba(255,255,255,0.8);
}
.home-sub-img{
  width: 256px;
}
.home-title-cn{
  font-size: 36px;
  color: #3d2475;
}
.home-title-en{
  margin: 20px 0 20px 0;
  font-size: 24px;
}
.home-description{
  text-align:left;
}
.home-infos{
  background-color: #fff;
}
.home-img-r{
  cursor: pointer;
}
.home-rg-group{
  font-size: 1.2em!important;
}
.home-rg-projects{
  text-align: left;
  font-size: 16px;
}
.xs-left{
  text-align: left;
}
</style>