<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <div class="nav-left" slot="left" @click="backTo">
        <i class="icon iconleft"></i>
      </div>
      <div slot="center">购物车{{cartLength?'('+cartLength+')':''}}</div>
    </nav-bar>
    <scroll class="scroll-wrapper" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottombar/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  // common components
  import navbar from 'components/common/navbar/NavBar'
  import scroll from 'components/common/scroll/Scroll'

  // childComps
  import cartlist from './childComps/CartList'
  import cartbottombar from './childComps/CartBottomBar'

  export default {
    name: "cart",
    computed: {
      ...mapGetters(['cartLength'])
    },
    activated(){
      this.$refs.scroll.refresh();
    },
    methods: {
      backTo(){
        this.$router.back();
      }
    },
    components: {
      scroll,
      navBar: navbar,
      cartList: cartlist,
      cartBottombar: cartbottombar
    }
  }
</script>

<style scoped>
  .cart{
    position: relative;
    height: 100%;
    background-color: #EFEFEF;
  }
  .cart-nav{
    font-size: 18px;
    border-bottom: 1px solid #c9c7c8;
    background-color: #FAFAFA;
  }

  .scroll-wrapper{
    position: absolute;
    width: 100%;
    padding: 0 10px;
    top: 44px;
    bottom: 49px;
    color: #000;
  }

</style>