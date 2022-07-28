<!--suppress ALL -->
<template>
  <div class="member-container">
    <h2 class="member-type-h">Faculty Members</h2>
    <el-row type="flex">
      <el-col :xs="23" :sm="23" :md="23" :lg="23" :xl="11"
              v-for="ss in d.senses">
        <el-image
            :src="ss.profile"
            :lazy="true"
            class="profile-sense"
            fit="cover">
          <template #placeholder>
            <i class="el-icon-loading"></i>
          </template>
        </el-image>
        <div class="info-sense">
          <h3>{{ss.name}}</h3>
          <p v-if="ss.rank">{{ss.rank}}</p>
          <p><strong v-if="ss.rank">Research Interests:</strong>{{ss.research_interests}}</p>
        </div>
      </el-col>
    </el-row>

    <h2 class="member-type-h">Ph.D Students</h2>
    <div class="student-container">
      <div v-for="phd in d.PhDs" class="student-item">
        <el-image
            :src="phd.profile"
            class="profile-student"
            fit="cover">
          <template #placeholder>
            <i class="el-icon-loading"></i>
          </template>
        </el-image>
        <div>{{phd.name}}</div>
      </div>
    </div>

    <h2 class="member-type-h">Graduate Students</h2>
    <div class="student-container">
      <div v-for="gs in d.graduate_students">
        <el-image
            :src="gs.profile"
            class="profile-student"
            fit="cover">
          <template #placeholder>
            <i class="el-icon-loading"></i>
          </template>
        </el-image>
        <div>{{gs.name}}</div>
      </div>
    </div>

    <h2 class="member-type-h">Former Students</h2>
    <div class="former-container" v-for="(fs, i) in d.former_students">
      <div class="former-year" :class="color[i%3]">{{ fs.year }}</div>
      <div class="former-sudents-container">
        <div v-for="name in fs.names" class="former-name" :class="bgColor[i%3]">
          {{name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue"
import d from "../datas/members.js"

export default {
  name:"Members",
  data(){
    return {
      d,
      bgColor:["bg-0","bg-1","bg-2"],
      color:["c-0","c-1","c-2"]
    }
  },
  components: {
    Nav
  }
}
</script>

<style scoped>
@media screen and (min-width: 992px){
  .member-container{
    padding:0 40px 0 40px;
  }
  .former-container{
    grid-template-columns:10em minmax(11em ,1fr);
    justify-items: center;
    justify-content:center;
  }
  .student-container{
    grid-column-gap: 60px;
  }
}
@media screen and (max-width: 992px) {
  .member-container{
    padding:0 10px 0 10px;
  }
  .former-container{
    grid-template-columns:repeat(auto-fill, 100%);
    justify-items: left;
    justify-content:left;
  }
}

.member-type-h{
  text-align: left;
  margin-top: 60px;
  padding-bottom: 20px;
  border-bottom: 2px solid #99b8cc;
}
.profile-sense{
  width: 28%;
  padding:1.4em 0 0 0 ;
  max-width: 200px;
  max-height: 220px;
}
.info-sense{
  text-align: left;
  display: inline-block;
  width: 62%;
  margin-left: 8%;
  vertical-align: top;
}
.student-container{
  display: grid;
  margin: 20px 0 20px 0;
  grid-template-columns: repeat(auto-fill, 180px);
  grid-row-gap: 20px;
  justify-items: center;
  justify-content:center;
}
.student-item{
  width: 170px;
}
.profile-student{
  width: 160px;
  height: 200px;
}
.former-container{
  display: grid;
  margin: 10px 0 10px 0;
}
.former-year{
  font-size: 2em;
}
.former-sudents-container{
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(11em ,1fr));
  justify-items: left;
  grid-gap: 2px;
}
.former-name{
  display: inline-grid;
  width: 100%;
  text-align: left;
  color: #000;
}
.bg-0{background-color: #DAE1F9}
.bg-1{background-color: #FFFFBF}
.bg-2{background-color: #F9DAF1}
.c-0{color: #2D4488}
.c-1{color: #FF9900}
.c-2{color: #441739}
</style>