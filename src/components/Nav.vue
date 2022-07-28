<template>
  <el-affix :offset="0">
    <div v-if="isNarrow" class="menu-m border-b">
      <div class="menu-item-0" @click="homePage">ViCBiC</div>
      <i class="el-icon-menu icon-menu" @click="show=true"></i>
      <div class="menu-m-bg" :class="{show:show}" @click="show=false">
        <el-menu
            class="menu-m-ul"
            mode="vertical"
            text-color="#2c3e50"
            :router="true"
            @select="show=false"
        >
          <div class="menu-item-m">
            <i class="el-icon-close icon-menu"
                style="margin-right: 10px"
                @click="show=false"
            ></i>
          </div>
          <el-menu-item class="menu-item-m"
                        v-for="m in menu"
                        :index="m.index"
          >{{m.name}}</el-menu-item>
        </el-menu>
      </div>
    </div>

    <el-menu v-else
        class="menu"
        mode="horizontal"
        text-color="#2c3e50"
        :router="true"
    >
      <div class="menu-item-0" @click="homePage">ViCBiC</div>
      <el-menu-item class="menu-item"
                  v-for="m in menu.reverse()"
                  :index="m.index"
      >{{m.name}}</el-menu-item>
    </el-menu>
  </el-affix>
</template>

<script>
export default {
  data(){
    return {
      isNarrow: window.innerWidth<992?true:false,
      show:false
    }
  },
  setup() {
    function homePage() {
      window.location.href = import.meta.env.BASE_URL;
    }
    let menu = [
      {"name":"Home", "index":"/#home"},
      {"name":"Researches", "index":"/#research"},
      {"name":"Publications", "index":"/Publications"},
      {"name":"Members", "index":"/Members"},
      {"name":"Album", "index":"/Album"}
    ]
    return {homePage, menu}
  },
  mounted() {
    const that = this
    window.onresize = ()=>{
      that.isNarrow = window.innerWidth<992?true:false
    }
  }
}
</script>

<style scoped>
.menu{
  padding-right: 40px;
  padding-left: 40px;
  background-color: rgba(255,255,255,0.9);
}
.menu-item{
  float: right !important;
  font-size: 1.2em;
}
.menu-item-0{
  height: 60px;
  line-height: 60px;
  font-size: 2em;
  float: left;
  cursor: pointer;
  outline: none;
}
.menu-item.is-active{
  border-bottom: 2px solid #99b8cc !important;
}
.mi-v{
  width:100%;
}

.menu-m{
  display: flex;
  padding-right: 15px;
  padding-left: 15px;
  background-color: rgba(255,255,255,0.9);
  align-items: center;
  justify-content: space-between;
}
.icon-menu{
  font-size: 38px!important;
}
.menu-m-bg{
  height: 2021px;
  width: 100%;
  display: none;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 2021;
  background-color: rgba(0,0,0,0.5);
}
.show{
  display: block;
}
.menu-m-ul{
  display: block;
  position: absolute;
  padding:10px 0 0 0;
  width: 210px;
  height: 100%;
  right: 0;
}
.menu-item-m{
  font-size: 20px;
  text-align: right;
  width: 100%;
}
.border-b{
  border-bottom: solid 1px #e6e6e6;
}
</style>