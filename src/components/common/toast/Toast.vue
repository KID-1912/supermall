<template>
  <div class="toast" v-show="isShow" :class="{fadeIn: isShow}">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: "toast",
    data(){
      return {
        message: "",
        isShow: false
      }
    },
    methods: {
      show(txt,duration=800){
        this.message = txt;
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
        },duration);
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    padding: 15px;
    top: 50%;
    left: 50%;
    color: #fff;
    border-radius: 6px;
    background-color: rgba(0,0,0,.7);
    opacity: 0;
    z-index: 999;
    transition: opacity .4s .1s;
    transform: translate(-50%,-50%);
  }
</style>