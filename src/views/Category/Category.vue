<template>
  <div id="category">
    <navbar class="category-navbar">
      <div slot="center">商品分类</div>
    </navbar>
    <category-tabs class="category-tabs" :tabs="tabsData" @tab="tab"/>
    <tab-control v-show="isTop" ref="tabControl1" class="tab-control tab-control1 microBorder" :titles="['综合','销量','新品']" @tabclick="tabcontrol"/>
    <scroll ref="scroll" class="scroll-swipper" :probeType="3" @scroll="scroll">
      <category-navigation :navs="this.qNavdata" @navImgLoaded="navLoaded"/>
      <tab-control class="tab-control microBorder" ref="tabControl2" :titles="['综合','销量','新品']" @tabclick="tabcontrol"/>
      <goods-list :goods="this.qGoods" :isShowBtn="false"/>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTop"/>
  </div>
</template>

<script>
  //functions
  import {getCategory,getSubcategory,getCategoryDetail} from 'network/category'
  import {goodsItemListenerMixin,backTopMixin} from 'common/mixin'

  // components
  import navbar from 'components/common/navbar/NavBar'
  import scroll from 'components/common/scroll/Scroll'
  import tabcontrol from 'components/common/tabcontrol/TabControl'
  import goodslist from 'components/content/goodslist/GoodsList'

  // childComps
  import categorytabs from './childComps/CategoryTabs'
  import categorynavigation from './childComps/CategoryNavigation'

  export default {
    name: "category",
    mixins: [goodsItemListenerMixin,backTopMixin],
    data(){
      return {
        curType: 'pop',
        curMaitkey: 0,
        curMiniWallkey: 0,
        tabsData: [],
        navigation: {},
        goods: {},
        isTop: false,
        tabControlTop: 0,
      }
    },
    computed: {
      // 计算用于访问分类数据对象的key键
      qMaitkey(){
        return 'mk' + this.curMaitkey
      },
      qMiniWallkey(){
        return 'mk' + this.curMiniWallkey
      },
      qNavdata(){
        return this.navigation[this.qMaitkey];
      },
      qGoods(){
        return this.goods[this.qMiniWallkey] ? this.goods[this.qMiniWallkey][this.curType] : [];
      }
    },
    created(){
      // 首次请求分类数据
      getCategory().then((res) => {
        this.tabsData = res.data.category.list;
        this.curMaitkey = this.tabsData[0].maitKey;
        this.curMiniWallkey = this.tabsData[0].miniWallkey;
        this.getContentData(this.curMaitkey,this.curMiniWallkey);
      });
    },
    activated(){//缓存激活时处理
      this.$refs.scroll.refresh();
      this.$bus.$off("imgLoaded",this.goodsItemListener);
      this.$bus.$on("imgLoaded",this.goodsItemListener);
    },
    deactivated(){//视图离开时处理
      this.$bus.$off("imgLoaded",this.goodsItemListener);
    },
    methods: {
      // 获取指定tab内容数据
      getContentData(maitKey,miniWallkey){
        getSubcategory(maitKey).then(res => this.$set(this.navigation,this.qMaitkey,res.data.list));
        this.$set(this.goods,this.qMiniWallkey,{});
        const goodsList = this.goods[this.qMiniWallkey];
        getCategoryDetail(miniWallkey,'pop').then(res => this.$set(goodsList,'pop',res));
        getCategoryDetail(miniWallkey,'sell').then(res => this.$set(goodsList,'sell',res));
        getCategoryDetail(miniWallkey,'new').then(res => this.$set(goodsList,'new',res));
      },

      // 事件处理
      navLoaded(){
        this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
      },
      // tab内容切换
      tab(maitKey,miniWallkey){
        this.curMaitkey = maitKey;
        this.curMiniWallkey = miniWallkey;
        if(!this.navigation['mk'+maitKey] || !this.goods['mk'+miniWallkey]) this.getContentData(maitKey,miniWallkey);
        this.$refs.scroll.scrollTo(0,0,0)
      },
      //商品排序切换
      tabcontrol(index){
        if(index === 0) this.curType = "pop";
        if(index === 1) this.curType = "sell";
        if(index === 2) this.curType = "new";
        this.$refs.tabControl1.activeIndex = index;
        this.$refs.tabControl2.activeIndex = index;
      },
      scroll(position){
        // 是否显示回到顶部
        this.isShowBackTop = Math.abs(position.y) > 1000;

        // 顶部固定tabcontrol
        this.isTop =  Math.abs(position.y) >= this.tabControlTop;
      }
    },
    components: {
      navbar,
      scroll,
      categoryTabs: categorytabs,
      categoryNavigation: categorynavigation,
      tabControl: tabcontrol,
      goodsList: goodslist
    }
  }
</script>

<style scoped>
  #category{
    height: 100%;
  }
  .category-navbar{
    color: #fff;
    font-size: var(--font-size);
    font-weight: bold;
    background-color: #FF8198;
  }
  .category-tabs{
    z-index:2;
  }
  .scroll-swipper{
    position: absolute;
    width: 100%;
    padding-left: 90px;
    top: 44px;
    right: 0;
    bottom: 49px;
  }
  .tab-control1{
    position: relative;
    width: 100%;
    padding-left: 90px;
    background-color: #fff;
    z-index:1;
  }
  .tab-control /deep/.tab-control-item:not(last-of-type){
    margin: 10px 0;
    line-height: 20px;
    border-right:1px solid var(--color-gray);
  }
  .tab-control /deep/.tab-control-item.active span{
    color: #ff5777;
  }
</style>