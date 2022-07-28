<template>
  <research-intro :info="d">
    <!--在这里写html会显示在标题下方, 例子见visualComputation.vue-->
  </research-intro>
</template>

<script>
import { visualNeuralMechanism } from "/src/datas/researches.json"
import researchIntro from "/src/components/researchIntro.vue";

export default {
  setup(){
    return {
      d:visualNeuralMechanism
    }
  },
  components:{researchIntro}
}
</script>