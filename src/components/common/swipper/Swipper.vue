<template>
  <div class="swipper">
    <div class="swipper-container">
      <slot></slot>
    </div>
    <ol class="swipper-indicator-wrap">
      <li v-for="(item,index) in itemCount" class="swipper-indicator" :class="{active: index === activeIndex}" @click="indicate(index)">
        {{index}}
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        elWidth: 0,   //轮播组件宽
        itemCount: 0,   //轮播项个数
        swipperItems: [], //轮播项
        startIndex: 0,    //起始索引
        activeIndex: 0,   //当前轮播索引
        interval: 3000, //自动轮播间隔
        timer: 0  //定时器标记
      }
    },
    props: {

    },
    mounted(){
      setTimeout(() => {
        // 轮播图初始化
        this._handleDom();

        // 开启自动轮播
        this.autoSlider()
      },500)
    },
    methods: {
      _handleDom(){
        let swipperEl = this.$el;   //swipper组件元素
        let elWidth = swipperEl.clientWidth;  //组件宽
        let container = swipperEl.querySelector(".swipper-container");
        let items = swipperEl.querySelectorAll(".swipper-item");    //轮播项
        let itemHeight = items[0].offsetHeight;   //轮播项高度
        let itemCount = items.length;   //轮播项数
        
        this.itemCount = itemCount;
        this.elWidth = elWidth;
        this.swipperItem = items;

        container.style.height = itemHeight + "px";
        
        // 轮播项与indicator初始化
        this.activeIndex = this.startIndex;
        for(let i = 0,len = items.length;i < len;i++){
          let item = items[i];
          if(i == this.startIndex) {
            item.style.left = 0;
            setTimeout(() => {
              item.classList.add("transition");
            },20);
            continue;
          };
          item.classList.add("transition");
        }
      },
      // 转换轮播索引
      _getCorrectIndex(targetIndex){
        if(targetIndex >= this.itemCount) return 0;
        if(targetIndex < 0) return this.itemCount - 1;
        return targetIndex
      },
      // 轮播器功能
      _switchTo(targetIndex,direction){
        let targetItem = this.swipperItem[targetIndex];
        let activeItem = this.swipperItem[this.activeIndex];
        targetItem.classList.remove("transition");
        if(!direction){
          direction = targetIndex < this.activeIndex ? 1 : -1;
        }
        targetItem.style.left = -1 * direction * this.elWidth + "px";
        // 过渡移动
        setTimeout(() => {
          targetItem.style.left = 0 + "px";
          targetItem.classList.add("transition");
          activeItem.style.left = direction * this.elWidth + "px";
        },20);
        this.activeIndex = targetIndex;
      },
      // indicator控制轮播
      indicate(index){
        if(index === this.activeIndex) return;
        clearTimeout(this.timer);
        this._switchTo(index);
        this.autoSlider()
      },
      // 自动轮播器
      autoSlider(){
        this.timer = setInterval(() => {
          this._switchTo(this._getCorrectIndex(this.activeIndex + 1),-1);
        },this.interval);
      },
    }
  }
</script>

<style scoped>
  .swipper{
    position: relative;
    overflow: hidden;
  }
  .swipper-indicator-wrap{
    position: absolute;
    left:50%;
    bottom:2%;
    transform: translateX(-50%);
  }
  .swipper-indicator-wrap{
    font-size: 0;
    line-height: 0;
  }
  .swipper-indicator{
    display: inline-block;
    width: 8px;
    height: 8px;
    margin:0 5px;
    overflow: hidden;
    border-radius: 4px;
    background-color: #fff;
  }
  .swipper-indicator.active{
    background-color: #d43e2e;
  }
</style>