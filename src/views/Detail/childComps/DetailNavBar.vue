<template>
  <nav-bar>
    <div slot="left" class="navbar-left" @click="backTo">
      <i class="icon iconleft"></i>
    </div>
    <div slot="center" class="navbar-center">
      <a class="navbar-item" :class="{active:index === currentIndex}" v-for="(item,index) in titles" @click="itemClick(index)">{{item}}</a>
    </div>
  </nav-bar>
</template>

<script>
  import navbar from 'components/common/navbar/NavBar'

  export default {
    data(){
      return {
        titles: ["商品","评论","参数","推荐"],
        currentIndex: 0
      }
    },
    computed: {
    },
    methods: {
      backTo(){
        this.$router.back();
      },
      itemClick(index){
        this.currentIndex = index;
        this.$emit("tabClick",index)
      }
    },
    components: {
      navBar: navbar
    }
  }
</script>

<style scoped>
  .navbar-left > .icon{
    color: #8a8a8a;
  }
  .navbar-center{
    display: flex;
  }
  .navbar-item{
    flex: 1;
  }
  .navbar-item.active{
    color: var(--color-high-text);
  }
</style>