<template>
  <div class="goodcheck tc" :class="{checked: checked}">
    <img src="~assets/images/cart/tick.svg" v-show="checked">
  </div>
</template>

<script>
  export default {
    props: {
      checked: {
        type: Boolean,
        defalut: false
      }
    }
  }
</script>

<style scoped>
  .goodcheck{
    width: 20px;
    height: 20px;
    border: 1px solid #d7d7d7;
    border-radius: 10px;
    line-height: 20px;
  }
  .goodcheck > img{
    width: 12px;
    vertical-align: middle;
  }
  .checked{
    border: none;
    background-color: var(--color-tint);
  }
</style>