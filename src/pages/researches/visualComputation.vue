<template>
  <research-intro :info="d">
    <el-row class="tyb">
    <div>
    Our research is aimed at developing a series of computational models for understanding of the visual mechanisms and the application in computer vision. The research interests include:
    </div><div>
    <strong>Image Restoration and Enhancement: </strong>To develop a series of computational models based on the mechanisms of retina, LGN and V1 neurons and the applications in image denoising, dehazing, enhancement, color constancy, etc.
    </div><div>
    <strong>Image Segmentation:</strong> Computational models of image segmentation, contour detection, salient object detection, etc., inspired by corresponding mechanisms in primary visual cortex
    </div><div>
    <strong>Computational Neurosicence:</strong> Computational neural mechanism of visual system, perceptual decision making and working memory. Focus on multiple-choice decision making, the neural circuit for value-based decision making, and the information encoding in primary visual cortex.
    </div>
    </el-row>
  </research-intro>
</template>

<script>
import { visualComputation } from "/src/datas/researches.json"
import researchIntro from "/src/components/researchIntro.vue";

export default {
  setup(){
    return {
      d:visualComputation
    }
  },
  components:{researchIntro}
}
</script>

<style scoped>
.tyb{
  text-align: left;
  padding: 20px;
}
.tyb div{
  margin-top: 10px;
}
</style>