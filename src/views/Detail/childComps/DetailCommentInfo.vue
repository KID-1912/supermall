<template>
  <div class="info-comment"v-if="Object.keys(comment).length !== 0">
    <div class="info-title clear-fix">
      <div class="info-comment-total left">
        商品评价 ({{comment.cRate}})
      </div>
      <div class="info-comment-more right">
        <a href="">＞</a>
      </div>
    </div>
    <div class="info-user">
      <img :src="comment.list[0].user.avatar">
      <span class="info-name">{{comment.list[0].user.uname}}</span>
    </div>
    <p class="info-content">{{comment.list[0].content}}</p>
    <div class="info-date">
      <span class="info-date-d">{{comment.list[0].created | formtDate}}</span>
      <span>{{comment.list[0].style}}</span>
    </div>
  </div>
</template>

<script>
  import {formtDate} from 'common/utils'

  export default {
    props: {
      comment: {
        value: Object
      }
    },
    filters: {
      formtDate(value){
        return formtDate(value,'yyyy-MM-dd');
      }
    }
  }
</script>

<style scoped>
  .info-comment{
    padding: 0 10px 5px;
    border-top:10px solid var(--color-gray);
  }
  .info-title{
    line-height: 40px;
  }
  .info-user{
    line-height: 25px;
    font-size: 12px;
  }
  .info-user > img{
    height: 24px;
    margin-right: 8px;
    vertical-align: top;
    border-radius: 15px;
  }
  .info-content{
    font-size: 13px;
    margin: 10px 0;
    line-height: 18px;
  }
  .info-date{
    font-size: 10px;
    line-height: 18px;
  }
  .info-date-d{
    margin-right: 5px;
  }
</style>