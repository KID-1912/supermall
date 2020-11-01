<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control v-show="isTop" class="tab-control1" ref="tabControl1" :titles="['综合','销量','新品']" @tabclick="tabclick"/>
    <scroll class="scroll-wrapper" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="scroll" @pullingUp="getMore">
      <home-swipper ref="swipper" class="home-swipper" :banners="banners" @swipperImgLoad="getTabControlTop"></home-swipper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view></feature-view>
      <tab-control class="tab-control" ref="tabControl2" 
      :titles="['综合','销量','新品']"
      @tabclick="tabclick"></tab-control>
      <goods-list :goods="showgoods"></goods-list>
    </scroll>
    <back-top ref="backtop" v-show="isShowBackTop" @click.native="backTop"/>
  </div>
</template>

<script>
  // common components
  import navbar from 'components/common/navbar/NavBar'
  import tabcontrol from 'components/common/tabcontrol/TabControl'
  import goodslist from 'components/content/goodslist/GoodsList'
  import scroll from 'components/common/scroll/Scroll'

  // childComps
  import homeswipper from './childComps/HomeSwipper'
  import homerecommend from './childComps/HomeRecommend'
  import featureview from './childComps/FeatureView'
  
  // function
  import {getHomeMultidata} from 'network/home.js'
  import {getHomeGoods} from 'network/home.js'
  import {goodsItemListenerMixin,backTopMixin} from 'common/mixin'

  export default {
    name: "home",
    mixins: [goodsItemListenerMixin,backTopMixin],
    data(){
      return {
        banners: [],
        keywords: [],
        recommends: [],
        goods: {
          pop: {page: 0,list: []},
          sell: {page: 0,list: []},
          new: {page: 0,list: []}
        },
        currentType: "pop",
        refreshed: true,
        tabControlTop: 0,
        isTop: false,
        scrollTop: 0,
      }
    },
    computed: {
      showgoods(){
        return this.goods[this.currentType].list
      }
    },
    created(){
      // 请求轮播，推荐数据
      this.getHomeMultidata();

      // 请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

    },
    mounted(){
      // 
    },
    activated(){//缓存激活时处理
      this.$refs.scroll.scrollTo(0,this.scrollTop,0);
      this.$refs.scroll.refresh();
      this.$refs.swipper.startSwipper();

      this.$bus.$off("imgLoaded",this.goodsItemListener);
      this.$bus.$on("imgLoaded",this.goodsItemListener);
    },
    deactivated(){//视图离开时处理
      this.scrollTop = this.$refs.scroll.scroll.y;
      this.$refs.swipper.stopSwipper();

      this.$bus.$off("imgLoaded",this.goodsItemListener);
    },
    methods:{
      // 请求数据处理
      getHomeMultidata(){
        getHomeMultidata().then(result => {
          this.banners = result.data.banner.list;
          this.recommends = result.data.recommend.list;
          this.keywords = result.data.keywords.list;
        })
      },
      getHomeGoods(type){
        if(!this.refreshed) return;
        let page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(result => {
          console.log(`请求了${type}的第${page}页面`);
          let goodsList = result.data.list;
          this.goods[type].page++;
          this.goods[type].list = this.goods[type].list.concat(goodsList);
          this.refreshed = false;
        });
      },

      // 事件处理
      tabclick(index){
        if(index === 0) this.currentType = "pop";
        if(index === 1) this.currentType = "sell";
        if(index === 2) this.currentType = "new";
        this.$refs.tabControl1.activeIndex = index;
        this.$refs.tabControl2.activeIndex = index;
      },
      scroll(position){
        // 是否显示回到顶部
        this.isShowBackTop = Math.abs(position.y) > 1000;

        // 是否替换显示吸附的tabControl1
        this.isTop = Math.abs(position.y) >= this.tabControlTop
      },
      getMore(){
        this.getHomeGoods(this.currentType);
        this.$refs.scroll.finishPullUp();
      },
      getTabControlTop(){
        setTimeout(() => {
          this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
          console.log(this.tabControlTop);
        },1000)
      }
    },
    components: {
      navBar: navbar,
      homeSwipper: homeswipper,
      homeRecommend: homerecommend,
      featureView: featureview,
      tabControl: tabcontrol,
      goodsList: goodslist,
      scroll,
    }
  }
</script>

<style scoped>
  #home{
    position: relative;
    height: 100%;
  }
  .scroll-wrapper{
    position: absolute;
    width: 100%;
    top:44px;bottom:49px;
  }
  .home-navbar{
    color:#fff;
    font-size: var(--font-size);
    font-weight: bold;
    background-color: #FF8198;
  }
  .tab-control{
    position: relative;
    top: -1px;
    font-size: 14px;
    background-color: #fff;
    z-index: 1;
  }
  .tab-control /deep/.tab-control-item.active span{
    color: #ff5777;
    border-bottom: 2px solid #ff8198;
  }
</style>