<template>
  <div class="box-item tc">
    <slot class="item-link"></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .box-item{
    flex:1;
  }
  .item-link{
    display: block;
    font-size: 12px;
  }
  .icon{
    font-size: 25px;
    border-radius: 50%;
    background-color: #eee;
  }
  .item-text{
    margin-top: 4px;
  }
</style>