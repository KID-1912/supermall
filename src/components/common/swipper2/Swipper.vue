<template>
  <div class="swipper">
    <div class="swipper-container" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @transitionend="transitionEnd">
      <slot></slot>
    </div>
    <ol class="swipper-indicator-wrap">
      <li v-for="(item,index) in itemCount" class="swipper-indicator" :class="{active: index+1 === activeIndex}" @click="indicate(index+1)" :key="index">
        {{item}}
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
        activeIndex: 0,   //当前轮播索引
        swipperStyle: null, //轮播style对象
        transitioning: false
      }
    },
    props: {
      interval: {//轮播间隔
        value: Number, 
        default: 3000
      },
      startIndex: {//起始索引
        value: Number,    
        default: 0
      },
      animDuration: {//轮播过渡
        value: Number,
        default: 400
      },
      moveRatio: {//滑动比例
        value: Number,
        default: 0.3,
      }
    },
    mounted(){
      // 监听轮播图片加载完成设置轮播图高度
      this.$bus.$on("swipperImgLoad",() => {
        setTimeout(() => {
          let itemHeight = this.$el.querySelector(".swipper-container").offsetHeight;
          this.$el.style.height = itemHeight + "px";
        },1000)
      });

      setTimeout(() => {
        document.addEventListener("visibilitychange",() =>{
          if(document.visibilityState=="visible"){
              this.autoSlider();
          }else{
              clearInterval(this.timer);
          }
        })
        // 轮播图初始化
        this._handleDom();
        // 开启自动轮播
        this.autoSlider()
      },1000)
    },
    methods: {
      _handleDom(){
        let swipperEl = this.$el;
        let elWidth = swipperEl.clientWidth;  
        let container = swipperEl.querySelector(".swipper-container");
        let items = swipperEl.getElementsByClassName("swipper-item");
        let firstItem = items[0];
        let lastItem = items[items.length-1];

        this.elWidth = elWidth; //组件宽
        this.itemCount = items.length;//轮播项数
        this.swipperStyle = container.style;//；轮播样式

        // 前后插入节点
        container.insertBefore(lastItem.cloneNode(true),firstItem);
        container.appendChild(firstItem.cloneNode(true),lastItem);

        // 轮播图初始化
        let elCount = items.length;
        this.swipperStyle.width = elCount + "00%";
        let itemWidth = (100 / elCount)+ "%";
        for(let item of items){
          item.style.width = itemWidth;
        }
        // let itemHeight = container.offsetHeight;
        // swipperEl.style.height = itemHeight + "px";
        this.activeIndex = this.startIndex + 1;
        this.swipperStyle.left = -1 * this.activeIndex * elWidth + "px";
        setTimeout(() => {
          this.swipperStyle.transition = "left " + this.animDuration + "ms";
        },50);
      },
      // 自动轮播
      autoSlider(){
        this.timer = setInterval(() => {
          this._switchTo(this.activeIndex + 1);
        },this.interval);
      },
      // 轮播切换功能
      _switchTo(targetIndex){
        this.transitioning = true;
        this.activeIndex = targetIndex;
        this.swipperStyle.left = -1 * targetIndex * this.elWidth + "px";
      },
      // 轮播动画完成回调
      transitionEnd(){
        // 检测是否为错误位置，切换至正确位置
        let elWidth = this.elWidth;
        let itemCount = this.itemCount;
        let activeIndex = this.activeIndex
        if(activeIndex === itemCount + 1){
          this.swipperStyle.transition = "0ms";
          this._switchTo(1);
          setTimeout(() => {
            this.swipperStyle.transition = "left " + this.animDuration + "ms";
          },20);
        };
        if(activeIndex === 0){
          this.swipperStyle.transition = "0ms";
          this._switchTo(itemCount);
          setTimeout(() => {
            this.swipperStyle.transition = "left " + this.animDuration + "ms";
          },20);
        };
        this.transitioning = false;
      },
      //手动轮播事件
      touchStart(e){
        clearTimeout(this.timer);
        let toucher = e.touches[0];
        this.startX = toucher.clientX;
      },
      touchMove(e){
        if(this.transitioning) return;
        let toucher = e.touches[0];
        let currentX = this.activeIndex * this.elWidth;
        this.distanceX = this.startX - toucher.clientX;
        this.swipperStyle.transition = "0ms"
        this.swipperStyle.left = -1 * (currentX + this.distanceX) + "px";
      },
      touchEnd(e){
        let toucher = e.touches[0];
        let distance = Math.abs(this.distanceX);
        let targetIndex;
        if(distance <= this.elWidth *　this.moveRatio){
          targetIndex = this.activeIndex;
        }else{
          targetIndex = this.distanceX > 0 ? this.activeIndex +　1 : this.activeIndex -　1;
        }
        this.swipperStyle.transition = "left " + this.animDuration + "ms";
        this._switchTo(targetIndex);
        this.autoSlider();
      },
      // indicator控制轮播
      indicate(index){
        if(index === this.activeIndex) return;
        clearTimeout(this.timer);
        this._switchTo(index);
        this.autoSlider()
      },
    }
  }
</script>

<style scoped>
  .swipper{
    position: relative;
    overflow: hidden;
  }
  .swipper-container{
    position: absolute;
    width: 800%;
    left: 0;
    top: 0;
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