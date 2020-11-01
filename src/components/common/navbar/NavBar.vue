<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .navbar{
    width: 100%;
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }
  .right,.left{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>