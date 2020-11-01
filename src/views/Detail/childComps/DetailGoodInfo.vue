<template>
  <div class="good-info" v-if="Object.keys(goodInfo).length !== 0">
    <div class="info-dsc">{{goodInfo.detailImage[0].key}}</div>
    <div class="info-img">
      <img v-for="item in goodInfo.detailImage[0].list" :src="item" @load="imgLoaded">
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      goodInfo: {
        type: Object
      }
    },
    data(){
      return {
        counter: 0
      }
    },
    watch: {
    },
    methods: {
      imgLoaded(){
        // if(++this.counter !== this.goodInfo.detailImage[0].list.length)
        // return;
        this.$emit("imgLoaded")
      }
    }
  }
</script>

<style scoped>
  .good-info{
    border-top: 8px solid var(--color-gray);
  }
  .info-img{
    font-size: 0;
    line-height: 0;
  }
  .info-img img{
    width: 100%;
    margin-bottom: 10px;
  }
  .info-dsc{
    color: #000;
    line-height: 40px;
    padding-left: 10px;
  }
</style>