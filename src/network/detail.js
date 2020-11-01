import {request} from './request'

// 请求详情页功能
export function getDetail(id){
  return request({
    url: '/detail',
    params: {
      iid: id
    }
  })
}

export function getRecommend(){
  return request({
    url: '/recommend'
  })
}

// 商品基本信息类
export class Good{
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;
    this.lowNowPrice = itemInfo.lowNowPrice;
  }
};

// 店铺信息类
export class Shop{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.fans = shopInfo.cFans;
    this.goods = shopInfo.cGoods;
    this.sells = shopInfo.cSells;
    this.level = shopInfo.level;
    this.url = shopInfo.shopUrl;
    this.goodsUrl = shopInfo.allGoodsUrl;
  }
}
