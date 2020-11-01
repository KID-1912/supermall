<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'

  import {debounce} from 'common/utils'

  BScroll.use(Pullup)
  export default {
    name: "scroll",
    data(){
      return {
        scroll: null,
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.scroll,{
          click: true,
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad
        });

        const scroller = debounce((position) => {
          this.$emit("scroll",position);
        },100);
        const puller = debounce((position) => {
          this.$emit("pullingUp");
        },100);

        if(this.probeType !== 0)
        this.scroll.on('scroll',scroller);

        if(this.pullUpLoad) 
        this.scroll.on('pullingUp',puller);
    },
    methods: {
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time);
      },
      refresh(){
        this.scroll.refresh();
      },
      finishPullUp(){
        this.scroll.finishPullUp();
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    overflow: hidden;
  }
</style>