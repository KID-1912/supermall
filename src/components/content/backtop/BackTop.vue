<template>
  <div class="back-top" @click="() => $emit('backtop')">
    <img src="~assets/images/common/top.png" alt="回到顶部">
  </div>
</template>

<script>
  export default {
    name: "backtop"
  }
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 10px;bottom:54px;
  }
  .back-top img{
    height: 40px;
    width: 40px;
  }
</style>