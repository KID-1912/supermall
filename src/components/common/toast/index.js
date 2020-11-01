import Toast from './Toast'

// 创建插件对象
const plugin = {};

// 添加插件对象的安装回调
plugin.install = function(Vue){
  // 1. 创建Toast组件的构造器
  const toaster = Vue.extend(Toast);

  // 2. 构造Toast组件对象实例
  const toast = new toaster();

  // 3. 挂载toast对象
  toast.$mount(document.createElement('div'));

  // 4. 将完整toast组件添加至页面
  document.body.appendChild(toast.$el);

  // 5. 通过原型使所有Vue实例可以引用$toast
  Vue.prototype.$toast = toast;
}

export default plugin;