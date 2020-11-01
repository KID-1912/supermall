<template>
  <div class="navigations">
    <ul class="nav-box tc microBorder">
      <li v-for="(item,index) in navs" class="nav-item">
        <a :href="item.link" class="nav-link">
          <div class="nav-img">
            <img :src="item.image" @load="imgLoaded(index)">
          </div>
          <p>{{item.title}}</p>  
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      navs: {
        type: Array,
      }
    },
    methods: {
      imgLoaded(index){
        if(index !== this.navs.length-1) return;
        this.$emit("navImgLoaded");
      }
    }
  }
</script>

<style scoped>
  .navigations{
    padding: 0 10px;
  }
  .nav-box{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
  }
  .nav-item{
    width: 33.3%;
    font-size: 12px;
  }
  .nav-link{
    display: block;
  }
  .nav-img{
    padding: 20px 10px 5px;
  }
  .nav-img > img{
    width: 100%;
  }
</style>