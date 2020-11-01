<template>
  <div class="cart-list">
    <div class="cart-list-item" v-for="item in cartList">
      <div class="shop-head">
        <a :href="item.shopUrl">
          <img class="shop-logo" :src="item.shopLogo">
          <span class="shop-name">{{item.shopName}}</span>
          <i　class="icon iconright right"></i>
        </a>
      </div>
      <div class="good">
        <div class="good-check" @click.stop="check(item)">
          <check-button class="good-check-button" :checked="item.checked"/>
        </div>
        <div class="good-img" @click="goodClick(item)"><img :src="item.goodImg"></div>
        <div class="good-info">
          <p class="good-title" @click="goodClick(item)">{{item.goodTitle}}</p>
          <div class="buy-info clear-fix">
            <div class="good-price left">￥<span>{{item.goodLowPrice}}</span></div>
            <div class="good-count right tc">
              <div class="good-count-decrease" :class="{disable: item.count === 1}" @click="decrease(item)">-</div>
              <span class="good-count-num">{{item.count}}</span>
              <div class="good-count-increase" @click="item.count++">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import checkbutton from 'components/content/checkbutton/CheckButton'

  export default {
    computed: {
      cartList(){
        return this.$store.state.cartList
      }
    },
    methods: {
      check(item){
        item.checked = !item.checked;
      },
      goodClick(item){
        this.$router.push({
          path: '/detail',
          query: {
            id: item.goodId
          }
        })
      },
      decrease(item){
        if(item.count === 1) return;
        item.count--;
      }
    },
    components: {
      checkButton: checkbutton
    }
  }
</script>

<style scoped>
  .cart-list{
    padding: 10px 0 50px;
  }
  .cart-list-item{
    margin-bottom: 10px;
    padding: 15px;
    background-color: var(--color-background);
    border-radius: 6px;
  }
  .shop-head{
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
  }
  .shop-logo{
    height: 24px;
    border-radius: 12px;
    vertical-align: middle;
  }
  .shop-name{
    margin-left: 10px;
  }
  .shop-head .iconright{
    color: var(--color-high-text);
    font-size: 12px;
  }
  .good{
    display: flex;
    margin-top: 10px;
  }
  .good-check{
    flex: 1;
  }
  .good-check-button{
    position: relative;
    top: 22px;
  }
  .good-img{
    flex: 2;
    height: 84px;
    border-radius: 4px;
    font-size: 0;
    overflow: hidden;
  }
  .good-img > img{
    width: 100%;
    margin-top: -15%;
  }
  .good-info{
    flex: 6;
    padding: 6px 0 10px 10px;
  }
  .good-title{
    height: 32px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    overflow: hidden;
  }
  .good-price{
    color: var(--color-high-text);
    font-size: 10px;
  }
  .good-price > span{
    font-size: 16px;
    font-weight: 700;
  }
  .buy-info{
    margin-top: 10px;
    line-height: 22px;
  }
  .good-count{
    font-size: 0;
  }
  .good-count-increase,.good-count-num,.good-count-decrease{
    display: inline-block;
    height: 22px;
    background-color: #f7f7f7;
  }
  .good-count-num{
    font-size: 13px;
    width: 40px;
  }
  .good-count-decrease,.good-count-increase{
    width: 22px;
    font-size: 14px;
    color: #ababab;
  }
  .good-count-decrease{
    border-radius: 11px 0 0 11px;
  }
  .disable.good-count-decrease{
    color: #eaeaea;
  }
  .good-count-increase{
    border-radius: 0 11px 11px 0;
  }</style>