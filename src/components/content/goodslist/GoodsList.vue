<template>
  <div class="goods-list">
    <good-list-item v-for="item in goods" :good="item" :isShowBtn="isShowBtn"></good-list-item>
  </div>
</template>

<script>
  import goodslistitem from './GoodListItem'
  export default {
    props: {
      goods: {
        type: Array,
        default(){
          return []
        }
      },
      isShowBtn: {
        type: Boolean,
        default: true
      }
    },
    components: {
      goodListItem: goodslistitem
    }
  }
</script>

<style scoped>
  .goods-list{
    display: flex;
    padding: 10px 4px;
    flex-wrap: wrap;
    justify-content: space-around;
    /*background-color: #EFEFEF;*/
  }
</style>