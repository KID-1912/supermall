(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-012804fa"],{"0530":function(t,a,s){"use strict";var i=s("c7c2"),n=s.n(i);n.a},"397a":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"category"}},[s("navbar",{staticClass:"category-navbar"},[s("div",{attrs:{slot:"center"},slot:"center"},[t._v("商品分类")])]),s("category-tabs",{staticClass:"category-tabs",attrs:{tabs:t.tabsData},on:{tab:t.tab}}),s("tab-control",{directives:[{name:"show",rawName:"v-show",value:t.isTop,expression:"isTop"}],ref:"tabControl1",staticClass:"tab-control tab-control1 microBorder",attrs:{titles:["综合","销量","新品"]},on:{tabclick:t.tabcontrol}}),s("scroll",{ref:"scroll",staticClass:"scroll-swipper",attrs:{probeType:3},on:{scroll:t.scroll}},[s("category-navigation",{attrs:{navs:this.qNavdata},on:{navImgLoaded:t.navLoaded}}),s("tab-control",{ref:"tabControl2",staticClass:"tab-control microBorder",attrs:{titles:["综合","销量","新品"]},on:{tabclick:t.tabcontrol}}),s("goods-list",{attrs:{goods:this.qGoods,isShowBtn:!1}})],1),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(a){return t.backTop(a)}}})],1)},n=[],e=s("1bab");function o(){return Object(e["a"])({url:"/category"})}function r(t){return Object(e["a"])({url:"/subcategory",params:{maitKey:t}})}function c(t,a){return Object(e["a"])({url:"/subcategory/detail",params:{miniWallkey:t,type:a}})}var l=s("eecb"),u=s("a7ac"),h=s("5d17"),d=s("7ca7"),f=s("b33d"),b=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"tab-box"},[s("scroll",{ref:"scroll",staticClass:"scroll-wrapper"},[s("ul",{staticClass:"tab-area tc"},t._l(t.tabs,(function(a,i){return s("li",{staticClass:"tab-item",class:{active:i===t.activeIndex},on:{click:function(a){return t.tab(i)}}},[s("p",[t._v(t._s(a.title))])])})),0)])],1)},v=[],p={props:{tabs:{type:Array,default:[]}},watch:{tabs:function(){var t=this;setTimeout((function(){t.$refs.scroll.refresh()}),200)}},data:function(){return{activeIndex:0}},methods:{tab:function(t){this.activeIndex!==t&&(this.activeIndex=t,this.$emit("tab",this.tabs[t].maitKey,this.tabs[t].miniWallkey))}},components:{scroll:h["a"]}},y=p,m=(s("0530"),s("2877")),g=Object(m["a"])(y,b,v,!1,null,"6ffc7d52",null),k=g.exports,C=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"navigations"},[s("ul",{staticClass:"nav-box tc microBorder"},t._l(t.navs,(function(a,i){return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:a.link}},[s("div",{staticClass:"nav-img"},[s("img",{attrs:{src:a.image},on:{load:function(a){return t.imgLoaded(i)}}})]),s("p",[t._v(t._s(a.title))])])])})),0)])},$=[],w={props:{navs:{type:Array}},methods:{imgLoaded:function(t){t===this.navs.length-1&&this.$emit("navImgLoaded")}}},T=w,M=(s("fd89"),Object(m["a"])(T,C,$,!1,null,"50246da6",null)),x=M.exports,L={name:"category",mixins:[l["b"],l["a"]],data:function(){return{curType:"pop",curMaitkey:0,curMiniWallkey:0,tabsData:[],navigation:{},goods:{},isTop:!1,tabControlTop:0}},computed:{qMaitkey:function(){return"mk"+this.curMaitkey},qMiniWallkey:function(){return"mk"+this.curMiniWallkey},qNavdata:function(){return this.navigation[this.qMaitkey]},qGoods:function(){return this.goods[this.qMiniWallkey]?this.goods[this.qMiniWallkey][this.curType]:[]}},created:function(){var t=this;o().then((function(a){t.tabsData=a.data.category.list,t.curMaitkey=t.tabsData[0].maitKey,t.curMiniWallkey=t.tabsData[0].miniWallkey,t.getContentData(t.curMaitkey,t.curMiniWallkey)}))},activated:function(){this.$refs.scroll.refresh(),this.$bus.$off("imgLoaded",this.goodsItemListener),this.$bus.$on("imgLoaded",this.goodsItemListener)},deactivated:function(){this.$bus.$off("imgLoaded",this.goodsItemListener)},methods:{getContentData:function(t,a){var s=this;r(t).then((function(t){return s.$set(s.navigation,s.qMaitkey,t.data.list)})),this.$set(this.goods,this.qMiniWallkey,{});var i=this.goods[this.qMiniWallkey];c(a,"pop").then((function(t){return s.$set(i,"pop",t)})),c(a,"sell").then((function(t){return s.$set(i,"sell",t)})),c(a,"new").then((function(t){return s.$set(i,"new",t)}))},navLoaded:function(){this.tabControlTop=this.$refs.tabControl2.$el.offsetTop},tab:function(t,a){this.curMaitkey=t,this.curMiniWallkey=a,this.navigation["mk"+t]&&this.goods["mk"+a]||this.getContentData(t,a),this.$refs.scroll.scrollTo(0,0,0)},tabcontrol:function(t){0===t&&(this.curType="pop"),1===t&&(this.curType="sell"),2===t&&(this.curType="new"),this.$refs.tabControl1.activeIndex=t,this.$refs.tabControl2.activeIndex=t},scroll:function(t){this.isShowBackTop=Math.abs(t.y)>1e3,this.isTop=Math.abs(t.y)>=this.tabControlTop}},components:{navbar:u["a"],scroll:h["a"],categoryTabs:k,categoryNavigation:x,tabControl:d["a"],goodsList:f["a"]}},W=L,_=(s("90fe"),Object(m["a"])(W,i,n,!1,null,"15f969b7",null));a["default"]=_.exports},"90fe":function(t,a,s){"use strict";var i=s("e0ac"),n=s.n(i);n.a},c7c2:function(t,a,s){},e0ac:function(t,a,s){},f706:function(t,a,s){},fd89:function(t,a,s){"use strict";var i=s("f706"),n=s.n(i);n.a}}]);
//# sourceMappingURL=chunk-012804fa.a92ff087.js.map