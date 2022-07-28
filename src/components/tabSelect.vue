<template>
  <div class="sel-container">
    <div class="tab-name">{{name}}: </div>
    <div>
      <div class="some-slot"><slot style="width: 100%"></slot></div>
      <div v-for="(t, i) in tabs"
           :class="[tabsState[i] ? 'selected' : '', 'tab']"
           @click="$emit('selHandle', t, i);"
      >{{t}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "tabSelect",
  props:{
    tabs:Array,
    tabsState:Array,
    name:String,
  }
}
</script>

<style scoped>
.sel-container{
  display: grid;
  grid-template-columns: 80px 1fr;
  justify-items: left;
}
.some-slot{
  text-align: left;
}
.tab-name{
  padding-top: 3px;
  display: inline-block;
  text-align: left;
}
.tab{
  min-width: 90px;
  display: inline-block;
  height: 24px;
  margin: 2px;
  padding: 0 2px 0 2px;
  font-size: 16px;
  line-height: 1.5em;
  text-align: center;
  border-radius: 5px;
  border:1px solid #99b8cc;
  float: left;
  cursor: pointer;
}
.selected{
  color:#fff;
  background-color: #99b8cc;
}
</style>