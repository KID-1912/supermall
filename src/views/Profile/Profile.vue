<template>
  <div id="profile">
    <scroll class="scroll">
      <div class="scroll-content">
        <profile-card :profile="profileData"/>
        <profile-order class="pro-order"/>
        <profile-set class="pro-set"/>
        <input type="button" value="退出登录" class="btn-log">
      </div>
    </scroll>
  </div>
</template>

<script>
  // components
  import scroll from 'components/common/scroll/Scroll'

  // childComps
  import profilecard from './childComps/ProfileCard'
  import profileorder from './childComps/ProfileOrder'
  import profileset from './childComps/ProfileSet'

  export default {
    name: "profile",
    data(){
      return {
        profileData: {
          username: '黑羽同学001',
          avaterScr: require('assets/images/profile/201016_71ll247hfihfh6kj8h7fl76e93j85_100x100.jpg')
        }
      }
    },
    components: {
      scroll,
      profileCard: profilecard,
      profileOrder: profileorder,
      profileSet: profileset
    }
  }
</script>

<style scoped>
  #profile{
    height: 100%;
    background-color: #f2f2f2;
  }
  .scroll{
    height: 100%;
    padding-bottom: 49px;
  }
  .scroll-content{
    padding: 10px;
    background-image: url('~assets/images/profile/top_bg.png');
    -webkit-background-size: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .pro-order,.pro-set{
    margin-top: 10px;
  }
  .btn-log{
    width: 100%;
    height: 40px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    color: #fff;
    line-height: 40px;
    background-color: var(--color-tint);
  }
</style>