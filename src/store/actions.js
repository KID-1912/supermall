export default {
  addCart(context,payLoad){
    return new Promise((resolve,reject) => {
      if(typeof payLoad !== "object") return resolve("加入购物车失败");
      const cartList = context.state.cartList;
      for(let i in cartList){
        if(cartList[i].goodId === payLoad.goodId){
          context.commit("increaseCount",i);
          return resolve("加入购物车成功")
        }
      }
      context.commit("addGood",payLoad);
      resolve("加入购物车成功");
    })
  }
}