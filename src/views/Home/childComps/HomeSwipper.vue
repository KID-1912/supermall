<template>
  <swipper ref="swipper" class="home-swipper">
    <swipperItem v-for="item in banners">
      <a :href="item.link"><img :src="item.image" @load="imgLoad"></a>
    </swipperItem>
  </swipper>
</template>

<script>
  import {swipper, swipperItem} from 'components/common/swipper2'
  export default {
    name: "homeswipper",
    props: ["banners"],
    data(){
      return {
        load: false
      }
    },
    methods: {
      imgLoad(){
        if(this.load) return;
        // 设置轮播图高度
        this.$bus.$emit("swipperImgLoad");
        // 计算tabControl高度
        this.$emit("swipperImgLoad");
        this.load = true;
      },
      startSwipper(){
        if(!this.$refs.swipper.timer) return;
        this.$refs.swipper.autoSlider();
      },
      stopSwipper(){
        clearInterval(this.$refs.swipper.timer);
      }
    },
    components: {
      swipper,
      swipperItem
    }
  }
</script>

<style scoped>
  
</style>