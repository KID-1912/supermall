<template>
  <swipper ref="swipper" class="home-swipper">
    <swipperItem v-for="(item,index) in banners">
      <a :href="item.link"><img :src="item.image" @load="imgLoad(index)"></a>
    </swipperItem>
  </swipper>
</template>

<script>
  import {swipper, swipperItem} from 'components/common/swipper2'
  export default {
    name: "homeswipper",
    props: ["banners"],
    methods: {
      imgLoad(index){
        if(index !== this.banners.length-1) return;
        // 设置轮播图高度
        this.$bus.$emit("swipperImgLoad");
        // 计算tabControl高度
        this.$emit("swipperImgLoad");
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