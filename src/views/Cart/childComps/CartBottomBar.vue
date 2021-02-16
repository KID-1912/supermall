<template>
  <div class="bottombar clear-fix">
    <div class="left">
      <check-button class="check-button" :checked="isSelectAll" @click.native="selectAll"/><div class="check-all">全选（<span>{{checkedNum}}</span>）</div>
    </div>
    <div class="bottombar-right right"> 
      <div class="totalprice">￥<span>{{totalPrice}}</span></div><button type="button" class="settle-button" @click="settle">结算</button>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import checkbutton from 'components/content/checkbutton/CheckButton'

  export default {
    computed: {
      ...mapGetters(['checkedNum','totalPrice']),
      isSelectAll(){
        const cartlist = this.$store.state.cartList;
        if(cartlist.length === 0) return false;
        return cartlist.every((item) => {
          return item.checked
        })
      }
    },
    methods: {
      selectAll(){
        const state = !this.isSelectAll;
        this.$store.state.cartList.forEach((item) => item.checked = state);
      },
      settle(){
        if(this.$store.state.cartList.length === 0)
        return this.$toast.show("请先加入商品哦");
        if(this.checkedNum === 0)
        return this.$toast.show("请先选择商品哦");
      }
    },
    components: {
      checkButton: checkbutton
    }
  }
</script>

<style scoped>
  .bottombar{
    position: absolute;
    width: 100%;
    height: 40px;
    padding: 7px 15px;
    bottom: 50px;
    font-size: 14px;
    border-top: 1px solid #d8d8d8;
    background-color: var(--color-background);
    z-index: 1;
  }
  .check-button{
    display: inline-block;
    position: relative;
    margin-right: 10px;
    width: 20px;height: 20px;
    top: 4px;
  }
  .check-button ::v-deep img{
    position: absolute;
    width: 12px;
    height: 12px;
    left: 4px;
    top: 4px;
  }
  .check-all{
    display: inline-block;
    position: absolute;
    top: 12px;
  }
  .totalprice{
    display: inline-block;
    color: var(--color-high-text);
    font-size: 10px;
  }
  .totalprice > span{
    font-size: 16px;
    font-weight: 700;
  }
  .settle-button{
    width: 65px;
    height: 26px;
    margin-left: 10px;
    border: none;
    border-radius: 12px;
    color: var(--color-background);
    background-color: var(--color-tint);
  }
</style>