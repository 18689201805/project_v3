import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import MyHeader from "./components/header.vue"
import MyFooter from "./components/footer.vue"
Vue.component("my-header",MyHeader)
Vue.component("my-footer",MyFooter)

Vue.config.productionTip = false

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

//mint-ui组件库 引入并配置
import MintUI from "mint-ui"
//单独引入mint-ui样式文件
import "mint-ui/lib/style.css"
//将mint-ui对象注册Vue实例
Vue.use(MintUI);


//ElementUI组件库 引入并设置
import ElementUI from 'element-ui';
//单独引入ElementUI样式文件
import 'element-ui/lib/theme-chalk/index.css';
//将element-ui对象注册Vue并设置
Vue.use(ElementUI);

//引入axios模块
//引入axios库
import axios from "axios"
//配置服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:4000/"
//配置保存session数据
axios.defaults.withCredentials=true
//注册axios模块
Vue.prototype.axios=axios;

//功能四引入全局对象vuex存储数
//1引入vuex
import Vuex from "vuex"
//2注册vuex
Vue.use(Vuex);
//3创建存储对象
var store=new Vuex.Store({
  state:{//全局共享数据
    //fa:12, //亮哥头发数量
    //carCount:0,//购物车商品的数量
  },
  mutations:{
    //所有修改全局共享数据函数
    //subFa(state){state.fa--;},
    //subCart(state){state.carCount--},//减一个
    //addmCart(state,n){state.carCount=n},//加多个
    //clearCart(state){state.cartCount=0},//清空购物车的数量
  },
  getters:{
    //所有获取全局共享函数
    //getFa(state){return state.fa},
   // getCartCount(state){return state.carCount}
  }
})
//将存储对象添加vue实例中


new Vue({
  router,         //路由对象
  render: h => h(App),
  store           //4.!存储对象添加vue实例中 功能四
}).$mount('#app')