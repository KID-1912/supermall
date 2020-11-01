<template>
  <div class="pro-card">
    <div class="pro-avatar"><img :src="this.profile.avaterScr"></div>
    <div class="pro-username tc">{{this.profile.username}}</div>
    <profile-tool/>
  </div>
</template>

<script>
  import profiletool from './ProfileTool'
  export default {
    props: {
      profile: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    components: {
      profileTool: profiletool
    }
  }
</script>

<style scoped>
  
  .pro-card{
    position: relative;
    margin-top: 40px;
    padding-top: 40px;
    background-color: #fff;
    border-radius: 5px;
  }
  .pro-avatar{
    position:absolute;
    height: 66px;
    width: 66px;
    top: -33px;
    left: 50%;
    margin-left: -33px;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
  }
  .pro-avatar > img{
    width: 100%;
  }
  .pro-username{
    font-size: 17px;
    font-weight: 600;
  }
</style>