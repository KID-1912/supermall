<template>
  <div class="goods-list-item">
    <a href="" class="link">
      <img class="good-img" :src="good.show.img" @load="imgLoad"/>
      <div class="info">
        <p class="title">{{good.title}}</p>
        <div>
          <span class="price">￥{{good.price}}</span>
          <span class="cfav">{{good.cfav}}<img src="~assets/images/common/collect.svg"></span>
        </div>
        <div class="btn">立即购买</div>
      </div>
    </a>
  </div>
</template>
<script>
  export default {
    props: ["good"],
    methods: {
      imgLoad(){
        this.$bus.$emit("imgLoaded")
      }
    }
  }
</script>

<style scoped>
  .goods-list-item{
    width: 48%;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 20px;
  }
  .link{
    color:#000;
    display: block;
  }
  .good-img{
    display: block;
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
  .info{
    padding: 4px 6px;
    background-color: #fff;
  }
  .title{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price{
    font-size: 15px;
    font-weight: bold;
  }
  .cfav{
    float: right;
    color:var(--color-text);
  }
  .cfav img{
    height: 14px;
    margin-right: 4px;
    vertical-align: text-top;
  }
  .btn{
    height: 28px;
    margin: 4px 0;
    border-radius: 5px;
    color:#fff;
    line-height: 28px;
    text-align: center;
    background-color: var(--color-tint);
  }
</style>