<template>
  <div class="pro-box">
    <div class="box-hd clear-fix" v-show="showHeader">
      <div class="box-title left"><slot name="title"></slot></div>
      <div class="box-more right"><slot name="more"></slot></div>
    </div>
    <div class="box-bd">
      <slot name="profileBoxItem"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      showHeader: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>

  .pro-box{
    padding: 0 10px;
    border-radius: 5px;
    background-color: #fff;
  }
  .box-hd{
    height: 40px;
    border-bottom: 1px solid var(--color-gray);
    line-height: 40px;
  }
  .box-title{
    font-size: 15px;
    color: #000;
  }
  .box-more,.box-more .icon{
    font-size: 12px;
  }
  .box-bd{
    display: flex;
    padding: 15px 0;
  }
</style>