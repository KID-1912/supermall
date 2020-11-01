<template>
  <div class="shopInfo">
    <div class="info-top">
      <div class="info-left">
        <img :src="shop.logo">
      </div>
      <div class="info-right">
        <div class="info-name">{{shop.name}}</div>
        <div class="info-detail">
          <img v-for="item in shop.level" src="~assets/images/common/collect.svg">
          <span class="info-divider mgl10">|</span>
          <span class="info-goods mgl10">在架商品 {{shop.goods}}</span>
          <span class="info-divider mgl10">|</span>
          <span class="mgl10">{{shop.sells}}人关注</span>
        </div>
      </div>
    </div>
    <ul class="info-score tc">
      <li v-for="item in shop.score">
        <span>{{item.name}}</span>
        <span class="score" :class="{'better-score':item.isBetter}">{{item.score}}</span>
        <i class="better icon" :class='[item.isBetter?"icontop more-better":"iconbottom"]'></i>
      </li>
    </ul>
    <div class="shop-label">
      <a class="allGoods" :href="shop.goodsUrl">全部商品</a>
      <a class="shopEnter" :href="shop.url">进入店铺</a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      shop: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
      }
    }
  }
</script>

<style scoped>
  /*辅助类*/
  .mgl10{
    margin-left: 10px;
  }
  .score.better-score{
    color:#e13e4c;
  }
  .better.more-better{
    background-color: #e13e4c;
  }

  .shopInfo{
    padding: 20px 10px 15px;
    border-top: 8px solid var(--color-gray);
  }
  .info-top{
    display: flex;
    line-height: 25px;
  }
  .info-left{
    flex: 1;
    font-size: 0;
    line-height: 0;
  }
  .info-left img{
    width: 100%;
  }
  .info-right{
    flex: 4.8;
    padding-left: 15px;
    padding-top: 5px;
  }
  .info-name{
    color: #000;
  }
  .info-detail{
    font-size: 12px;
  }
  .info-detail img{
    height: 12px;
    vertical-align: text-bottom;
  }
  .info-score{
    display: flex;
    margin-top: 10px;
    list-style: none;
    font-size: 12px;
  }
  .info-score li{
    flex: 1;
  }
  .score{
    color: #00b78b;
  }
  .better{
    color: #fff;
    padding: 1px 2px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: 700;
    background-color: #00b78b;
  }
  .shop-label{
    display: flex;
    padding-top: 15px;
    font-size: 13px;
    line-height: 22px;
    justify-content: center;
  }
  .shop-label > a{
    display: block;
    flex:1;
    max-width: 100px;
    color: var(--color-high-text);
    text-align: center;
    border: 1px solid var(--color-tint);
    border-radius: 11px;
  }
  .allGoods{
    margin-right: 10px;
  }
  .shopEnter{
    margin-left: 10px;
  }
</style>