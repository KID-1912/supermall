<template>
  <tabbar>
    <tabbarItem name="home">
      <i class="icon iconhomepage"></i>
      <span class="text">首页</span>
    </tabbarItem>
    <tabbarItem name="category">
      <i class="icon iconleibie"></i>
      <span class="text">分类</span>
    </tabbarItem>
    <tabbarItem name="cart">
      <i class="icon iconcart"></i>
      <span class="text">购物车</span>
    </tabbarItem>
    <tabbarItem name="profile">
      <i class="icon iconprofile"></i>
      <span class="text">我的</span>
    </tabbarItem>
  </tabbar>
</template>

<script> 
import tabbar from 'components/common/tabbar/TabBar'
import tabbarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: "maintabbar",
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style scoped>
  
</style>