export default {
  // 添加商品行为
  addGood(state,payLoad){
    payLoad.checked = false;
    state.cartList.push(payLoad);
  },
  // 增加商品数量
  increaseCount(state,payLoad){
    state.cartList[payLoad].count++;
  }
}