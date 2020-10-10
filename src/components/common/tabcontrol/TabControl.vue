<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(title,index) in titles" :class="{active:activeIndex === index}" @click="tabcontrol(index)">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabcontrol",
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        activeIndex: 0
      }
    },
    methods: {
      tabcontrol(index){
        this.activeIndex = index;
        this.$emit('tabclick',index);
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .tab-control-item{
    flex:1;
  }
</style>