<template>
  <div class="bar tc">
    <div class="shop">
      <i class="icon"></i>
      <span>店铺</span>
    </div>
    <div class="server">
      <i class="icon"></i>
      <span>客服</span>
    </div>
    <div class="collect">
      <i class="icon"></i>
      <span>收藏</span>
    </div>
    <div class="addCart" @click="addCart">加入购物车</div>
    <div class="buyNow"><a href="">立即购买</a></div>
  </div>
</template>

<script>
  export default {
    methods: {
      addCart(){
        this.$emit("addCart");
      }
    }
  }
</script>

<style scoped>
  .bar{
    display: flex;
    position: fixed;
    height: 50px;
    bottom: 0;
    left: 0;right: 0;
    background-color: var(--color-background);
  }
  .shop,.server,.collect{
    flex: 3;
    left: 0;
    padding: 8px 0 0;
    border-width: 0;
    border-top-width: 1px;
    border-style: solid;
    border-color: var(--color-gray);
    font-size: 12px;
    line-height: 18px;
  }
  .shop{
    border-right-width: 1px;
  }
  .server{
    border-right-width: 1px;
  }
  .shop > .icon,.server > .icon,.collect > .icon{
    display: block;
    height: 20px;
    background-image: url("~assets/images/detail/detail_bottom.png");
    background-size: 20px;
    background-repeat: no-repeat;
  }
  .shop > .icon{
    background-position: center -89px;
  }
  .server > .icon{
    background-position: center -48px;
  }
  .collect > .icon{
    background-position: center 1px;
  }
  .addCart,.buyNow{
    flex: 5;
    font-size: 14px;
    line-height: 50px;
  }
  .addCart{
    color: var(--color-tint);
    background-color: #ffe6e8;
  }
  .buyNow{
    color: var(--color-background);
    background-color: var(--color-tint);
  }
</style>