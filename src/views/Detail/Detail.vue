<template>
  <div class="detail">
    <navBar ref="navbar" @tabClick="tabClick"/>
    <scroll class="scroll-wrapper" ref="scroll" :probeType="3" @scroll="scroll">
      <detail-swipper :topImages="topImages"/>
      <detail-baseinfo :good="good"/>
      <detail-commentinfo ref="comment" :comment="comment"/>
      <detail-shopinfo :shop="shop"/>
      <detail-goodinfo :goodInfo="detailInfo" @imgLoaded="this.goodsItemListener"/>
      <detail-paramsinfo ref="params" :params="params"/>
      <goods-list ref="recommend" :goods="recommendGoods" :isShowBtn="false" @click.native="reload"/>
    </scroll>
    <back-top ref="backtop" v-show="isShowBackTop" @click.native="backTop"></back-top>
    <detail-bottombar @addCart="addCart"/>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  // components
  import scroll from 'components/common/scroll/Scroll'
  import goodslist from 'components/content/goodslist/GoodsList'

  // childComps
  import detailnavbar from './childComps/DetailNavBar'
  import detailswipper from './childComps/DetailSwipper'
  import detailbaseinfo from './childComps/DetailBaseInfo'
  import detailshopinfo from './childComps/DetailShopInfo'
  import detailcommentinfo from './childComps/DetailCommentInfo'
  import detailgoodinfo from './childComps/DetailGoodInfo'
  import detailparamsinfo from './childComps/DetailParamsInfo'
  import detailbottombar from './childComps/DetailBottomBar'

  // function
  import {debounce} from 'common/utils'
  import {getDetail,getRecommend,Good,Shop} from 'network/detail'
  import {goodsItemListenerMixin,backTopMixin} from 'common/mixin'

  export default {
    name: "detail",
    mixins: [goodsItemListenerMixin,backTopMixin],
    data(){
      return {
        id: null,
        topImages: null,
        good: {},
        comment: {},
        shop: {},
        detailInfo: {},
        params: [],
        recommendGoods: [],
        contentPositionY: [0,0,0,0],
        getContentPositionY: null
      }
    },
    created(){
      this.detailCreated();
    },
    beforeRouteLeave (to, from, next) {
      console.log("destoryed");
      this.$bus.$off("imgLoaded",this.goodsItemListener);
      next();
    },
    methods: {
      detailCreated(){
        // 保存商品id
        this.id = this.$route.query.id;

        // 请求商品数据
        getDetail(this.id).then((res) => {
          const data = res.result;
          console.log(res);
          // 轮播数据
          this.topImages = data.itemInfo.topImages;

          // baseInfo数据
          this.good = new Good(data.itemInfo,data.columns,data.shopInfo.services);

          // rate评论数据
          if(data.rate.cRate){//是否有评论数据
            this.comment = data.rate;
          }

          // shop数据
          this.shop = new Shop(data.shopInfo);

          // goods数据
          this.detailInfo = data.detailInfo;

          //商品参数数据
          this.params = data.itemParams.info.set;
        });

        // 请求推荐数据
        getRecommend().then((res) => {
          const data = res.data;
          console.log(data);
          this.recommendGoods = data.list;
        })

        this.getContentPositionY = debounce(() => {
          this.contentPositionY = [0];
          this.contentPositionY[1] = this.$refs.comment.$el.offsetTop || 0;
          this.contentPositionY[2] = this.$refs.params.$el.offsetTop || 0;
          this.contentPositionY[3] = this.$refs.recommend.$el.offsetTop || 0;
          console.log(this.contentPositionY);
        },1000)
      },

      // 事件处理
      ...mapActions({
        $addCart: 'addCart'
      }),
      tabClick(index){
        let y = -1 * this.contentPositionY[index];
        this.$refs.scroll.scrollTo(0,y,200);
      },
      scroll(position){
        // 是否显示回到顶部
        this.isShowBackTop = Math.abs(position.y) > 1000;

        // tabnav的样式响应
        const y = -1 * position.y + 100;
        let navbar = this.$refs.navbar;
        for(let i in this.contentPositionY){
          i *= 1;
          if(this.contentPositionY[i] <= y && this.contentPositionY[i + 1] > y){
          return navbar.currentIndex = i;
          }
        }
        navbar.currentIndex = this.contentPositionY.length - 1;
      },
      addCart(){
        // 传递购物车需要的数据
        // 店铺名,店铺logo,店铺地址,商品ID,商品图片,商品名称,商品价格,购买数量
        const goodData = {};
        goodData.goodId = this.id;
        goodData.shopName = this.shop.name;
        goodData.shopLogo = this.shop.logo;
        goodData.shopUrl = this.shop.url;
        goodData.goodImg = this.topImages[0];
        goodData.goodTitle = this.good.title;
        goodData.goodLowPrice = parseFloat(this.good.lowNowPrice);
        goodData.count = 1;

        this.$addCart(goodData).then(res => this.$toast.show(res));
      },
      reload(){
        this.detailCreated();
      }
    },
    components: {
      scroll,
      navBar: detailnavbar,
      detailSwipper: detailswipper,
      detailBaseinfo: detailbaseinfo,
      detailCommentinfo: detailcommentinfo,
      detailShopinfo: detailshopinfo,
      detailGoodinfo: detailgoodinfo,
      detailParamsinfo: detailparamsinfo,
      goodsList: goodslist,
      detailBottombar: detailbottombar
    }
  }
</script>

<style scoped>
  .detail{
    position: relative;
    height: 100vh;
    background-color: var(--color-background);
    z-index: 1;
  }
  .scroll-wrapper{
    position: absolute;
    width: 100%;
    top:44px;
    bottom:50px;
  }
</style>