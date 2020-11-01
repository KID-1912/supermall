<template>
  <div class="goods-list-item">
    <a class="link" @click="itemCLick">
      <img class="good-img" v-lazy="imgSrc" @load="imgLoad"/>
      <div class="info">
        <p class="title text-ellipsis">{{good.title}}</p>
        <div>
          <span class="price">￥{{good.price}}</span>
          <span class="cfav">{{good.cfav}}<img src="~assets/images/common/collect.svg"></span>
        </div>
        <div class="btn" v-show="isShowBtn">立即购买</div>
      </div>
    </a>
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
      },
      isShowBtn: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      imgSrc(){
        return this.good.img || this.good.image || this.good.show.img
      }
    },
    methods: {
      imgLoad(){
        this.$bus.$emit("imgLoaded")
      },
      itemCLick(){
        const op = {
          path: "/detail",
          query: {
            id: this.good.iid || this.good.item_id
          }
        };
        this.$router.push(op);
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