<template>
  <div class="base-info" v-if="Object.keys(good).length !== 0">
    <div class="info-price">
      <div class="info-price-top">
        <span class="n-price">{{good.newPrice}}</span>
        <span class="discount" v-if="good.discount">{{good.discount}}</span>
      </div>
      价格:<span class="o-price">{{good.oldPrice}}</span>
    </div>
    <div class="info-title microBorder">{{good.title}}</div>
    <div class="info-other">
      <span class="tl">{{good.columns[0]}}</span>
      <span class="tc">{{good.columns[1]}}</span>
      <span class="tr">{{good.services[0].name}}</span>
    </div>
    <div class="info-services tc">
      <span class="text-ellipsis" v-for="index in good.services.length - 1">
        <img :src="good.services[index].icon"/>
        {{good.services[index].name}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      good: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info{
    padding-top: 8px;
    font-size: 12px;
  }
  .info-price{
    padding: 0 10px;
  }
  .n-price{
    color:var(--color-high-text);
    font-size: 24px;
    line-height: 30px;
  }
  .discount{
    margin-left: 10px;
    margin-bottom: 2px;
    padding: 1px 2px;
    color: #fff;
    background-color: var(--color-tint);
  }
  .o-price{
    margin-left: 6px;
    text-decoration: line-through;
  }
  .info-title{
    padding: 4px 10px;
    color: #000;
    font-size: 15px;
    line-height: 20px;
  }
  .info-other{
    padding: 0 10px;
    display: flex;
    line-height: 30px;
  }
  .info-other > span{
    flex: 1;
  }
  .info-services{
    display: flex;
    line-height: 38px;
    border-top:10px solid var(--color-gray);
  }
  .info-services > span{
    flex:1;
  }
  .info-services  img{
    vertical-align: sub;
    height: 16px;
  }
</style>