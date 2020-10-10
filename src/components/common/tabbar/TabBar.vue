<template>
    <div id="tabbar">
      <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'tabbar'
}
</script>
<style scoped>
  #tabbar {
    position: fixed;
    display: flex;
    bottom: 0;
    right: 0;
    left: 0;
    box-shadow: 0 -1px 18px rgba(0,0,0,.2);
    background-color: #F6F6F6;
  }

</style>