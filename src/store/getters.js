export default {
  cartLength(state){
    return state.cartList.length;
  },
  checkedNum(state){
    return state.cartList.filter((item) => {
      return item.checked === true;
    }).length
  },
  totalPrice(state){
    return state.cartList.filter((item) => {
      return item.checked === true;
    }).reduce((prev,next) => {
      return prev + next.goodLowPrice * next.count;
    },0 )
  }
}