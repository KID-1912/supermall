<template>
  <div class="tab-box">
    <scroll ref="scroll" class="scroll-wrapper">
      <ul class="tab-area tc">
        <li v-for="(item,index) in tabs" class="tab-item" :class="{active: index === activeIndex}" @click="tab(index)">
          <p>{{item.title}}</p>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
  import scroll from 'components/common/scroll/Scroll'
  export default {
    props: {
      tabs: {
        type: Array,
        default: []
      }
    },
    watch: {
      tabs(){
        setTimeout(() => {
          this.$refs.scroll.refresh();
        },200)
      }
    },
    data(){
      return {
        activeIndex: 0
      }
    },

    methods: {
      tab(index){
        if(this.activeIndex === index) return;
        this.activeIndex = index;
        this.$emit("tab",this.tabs[index].maitKey,this.tabs[index].miniWallkey);
      }
    },
    components: {
      scroll,
    }
  }
</script>

<style scoped>
  .tab-box{
    position: absolute;
    width: 90px;
    top: 44px;
    bottom: 49px;
    color: #666;
    font-size: 14px;
    background-color: #f6f6f6;
    z-index: 1;
  }
  .scroll-wrapper{
    height: 100%;
  }
  .tab-item{
    height: 45px;
    padding: 15px 0;
  }
  .tab-item > p{
    border-left: 4px solid #f6f6f6;
  }
  .tab-item.active{
    background-color: #fff;
  }
  .tab-item.active > p{
    border-left-color: var(--color-tint);
    color: var(--color-high-text);
    font-weight: 700;
  }
</style>