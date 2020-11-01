// vue全家桶
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.prototype.$bus = new Vue();

// 辅助插件
import Fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Fastclick.attach(document.body);
Vue.use(VueLazyload,{
  loading: require('assets/images/common/placeholder.jpg')
});


// 自定义插件
import toast from 'components/common/toast';
Vue.use(toast);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');



