<template>
  <div class="recommends">
    <a v-for="item in recommends" class="recommend-item" :src="item.link">
      <img :src="item.image">
      <div class="recommend-text">{{item.title}}</div>
    </a>
  </div>
</template>

<script>
  export default {
    props: ["recommends"],
    methods: {
    }
  }
</script>

<style scoped>
  .recommends{
    display: flex;
    margin-top: 8px;
    padding-bottom: 8px;
    border-bottom: 10px solid #eee;
  }
  .recommend-item{
    flex:1;
    padding: 10px 15px;
    font-size:14px;
    text-align: center;
  }
  .recommends img{
    width: 100%;
  }
</style>