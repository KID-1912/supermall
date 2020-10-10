<template>
  <tabbar>
    <tabbarItem path="/home">
      <i class="icon iconhomepage"></i>
      <span class="text">首页</span>
    </tabbarItem>
    <tabbarItem path="/category">
      <i class="icon iconleibie"></i>
      <span class="text">分类</span>
    </tabbarItem path="/cart">
    <tabbarItem path="/cart">
      <i class="icon iconcart"></i>
      <span class="text">购物车</span>
    </tabbarItem>
    <tabbarItem path="/profile">
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