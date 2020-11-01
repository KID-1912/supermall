<template>
  <profile-box>
    <span slot="title">我的订单</span>
    <span slot="more">全部<i class="icon iconright"></i></span>
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon iconfukuan"></i>
        <div class="item-text">待付款</div></a>
    </profile-box-item>
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon iconfahuo"></i>
        <div class="item-text">待发货</div></a>
    </profile-box-item>
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon iconshouhuo"></i>
        <div class="item-text">待收货</div></a>
    </profile-box-item>
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon iconaccess"></i>
        <div class="item-text">评价</div></a>
    </profile-box-item>
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon icontuikuan"></i>
        <div class="item-text">退货售后</div></a>
    </profile-box-item>
  </profile-box>
</template>

<script>
  import profilebox from './ProfileBox'
  import profileboxitem from './ProfileBoxItem'

  export default {
    components: {
      profileBox: profilebox,
      profileBoxItem: profileboxitem
    }
  }
</script>

<style scoped>
</style>