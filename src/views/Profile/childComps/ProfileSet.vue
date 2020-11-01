<template>
  <profile-box>
    <span slot="title">我的设置</span>
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon iconqiandao"></i>
        <div class="item-text">签到</div></a>
    </profile-box-item>
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon iconprofile"></i>
        <div class="item-text">大姨妈</div></a>
    </profile-box-item>
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon iconkefu"></i>
        <div class="item-text">客服</div></a>
    </profile-box-item>
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon icondaren"></i>
        <div class="item-text">达人中心</div></a>
    </profile-box-item>
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon iconxingqiu"></i>
        <div class="item-text">运势</div></a>
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