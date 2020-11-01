import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};

const Home = () => import('views/Home/Home');
const Category = () => import('views/Category/Category');
const Cart = () => import('views/Cart/Cart');
const Profile = () => import('views/Profile/Profile');
const Detail = () => import('views/Detail/Detail');

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      name:'home',
      path: '/home',
      component: Home,
    },{
      name:'category',
      path: '/category',
      component: Category,
    },{
      name:'cart',
      path: '/cart',
      component: Cart,
    },{
      name:'profile',
      path: '/profile',
      component: Profile,
    },{
      name:'detail',
      path:'/detail',
      component: Detail,
    }
  ],
  mode: 'history'
});

export default router; 