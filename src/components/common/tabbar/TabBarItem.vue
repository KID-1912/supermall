<template>
  <div class="tabbarItem" @click="toRoute" :class="{active:isActive}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  props: {
    name: String
  },
  computed: {
    isActive(){
      return this.$route.name.includes(this.name)
    }
  },
  methods: {
    toRoute(){
      this.$router.replace({name: this.name});
    }
  }
}
</script>

<style scoped>
  .tabbarItem {
    height: 49px;
    /*line-height: 39;*/
    padding-top: 6px;
    flex: 1;
    text-align: center;
  }
  .tabbarItem.active{
    color: rgb(255, 63, 120);
  }
  /deep/.icon{
    display: block;
    font-size: 20px;
    font-weight: bold;
  }
  /deep/.text{
    display: block;
    font-size: 12px;
  }
</style>