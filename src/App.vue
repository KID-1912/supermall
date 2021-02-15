<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
  import maintabbar from 'components/content/mainTabBar/mainTabBar'
  export default {
    name: 'App',
    mounted(){
      window.addEventListener('resize',function () {
        location.replace('http://xiyitao.top');
      })
    },
    components: {
      maintabbar
    }
  }
</script>

<style>
@import 'assets/css/base.css';
  #app{
    height: 100%;
  }
</style>
