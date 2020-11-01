<template>
  <div class="params-info">
    <table class="info-tab">
      <tr v-for="item in params">
        <td class="info-tab-key">{{item.key}}</td>
        <td class="info-tab-val">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      params: {
        type: Array
      }
    }
  }
</script>

<style scoped>
  .info-tab{
    width: 100%;
    padding: 0 12px;
    font-size: 14px;
    line-height: 30px;
  }
  .info-tab  td{
    border-bottom: 1px solid #eee;
  }
  .info-tab-key{
    width: 30%;
  }
  .info-tab-val{
    width: 70%;
    color: var(--color-high-text);
  }
</style>