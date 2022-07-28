<template>
  <research-intro :info="d">
    <!--在这里写html会显示在标题下方, 例子见visualComputation.vue-->
  </research-intro>
</template>

<script>
import { visualCognition } from "/src/datas/researches.json"
import researchIntro from "/src/components/researchIntro.vue";

export default {
  setup(){
    return {
      d:visualCognition
    }
  },
  components:{researchIntro}
}
</script>