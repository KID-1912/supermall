<template>
  <div class="swipper-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .swipper-item{
    float: left;
  }
  .swipper-item a{
    display: block;
  }
  .swipper-item img{
    width: 100%;
    vertical-align: bottom;
  }
</style>