import {debounce} from 'common/utils'

// goodItem加载refresh
export const goodsItemListenerMixin = {
  data(){
    return {
      goodsItemListener: null,
      interval: 500
    }
  },
  created(){
    const refresh = debounce(this.refresh,this.interval);
    this.goodsItemListener = () => {
      refresh();
    };
    //订阅goodslistitem图片加载完成事件
    this.$bus.$on("imgLoaded",this.goodsItemListener);
  },
  methods: { 
    refresh(){
      this.$refs.scroll.refresh();
      console.log(this.$options.name+"refreshed");
      this.refreshed = true;
      if(this.getContentPositionY) this.getContentPositionY();
    }
  }
}

// 回到顶部
import backtop from 'components/content/backtop/BackTop'
export const backTopMixin = {
  data(){
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backTop(){
      this.$refs.scroll.scrollTo(0,0);
    },
  },
  components: {
    backTop: backtop
  }
}
