<template>
  <div class="swipper-item ">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .swipper-item{
    position: absolute;
    width: 100%;
    top:0;
    left:100%;
  }
  .swipper-item a{
    display: block;
  }
  .swipper-item img{
    width: 100%;
    vertical-align: bottom;
  }
</style>