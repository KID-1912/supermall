<template>
  <profile-box :showHeader="false">
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon iconhomepage"></i>
        <div class="item-text">我的主页</div></a>
    </profile-box-item>
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon iconaccess"></i>
        <div class="item-text">消息</div></a>
    </profile-box-item>
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon iconstar"></i>
        <div class="item-text">收藏</div></a>
    </profile-box-item>
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon iconguanzhu"></i>
        <div class="item-text">关注</div></a>
    </profile-box-item>
    <profile-box-item slot="profileBoxItem">
      <a href="" class="item-link">
        <i class="icon iconcart"></i>
        <div class="item-text">购物车</div></a>
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
  .icon{
    background: unset;
  }
  .iconhomepage{
    color: var(--color-tint);
  }
  .iconaccess{
    color: #8FC8FC;
  }
  .iconstar{
    color: #F9B45E;
  }
  .iconguanzhu{
    color: #FD8A94;
  }
  .iconcart{
    color: #FD8F81;
  }
</style>