<template>
  <swipper class="swipper">
    <swipper-item v-for="item in topImages">
      <img :src="item">
    </swipper-item>
  </swipper>
</template>

<script>
  import {swipper,swipperItem} from 'components/common/swipper2'
  export default {
    props: {
      topImages: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      // imgLoaded(){
      //   this.$emit("swipperImgLoad");
      // }
    },
    components: {
      swipper,
      swipperItem
    }
  }
</script>

<style scoped>
  .swipper{
    height: 390px;
  }
</style>