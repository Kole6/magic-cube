import '@/assets/style/reset.scss'
import '@/assets/style/element.scss'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/font/iconfont.css'


import '@/config/global_set.js'
import '@/util/date_format.js'

import Vue from 'vue'
import ElementUI from 'element-ui'
import echarts from 'echarts'

import App from './App.vue'
import router from '@/router'
import store from '@/store'
import http from '@/config/http/axios_set.js'
import global from  '@/util/global_set.js'
import axios from 'axios'
Vue.use(ElementUI)





//自动化注册components/global下组件为全局组件,多层目录使用 - 连接
const requireComponent = require.context('./components/global', true, /\.vue$/);
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName.replace(/^\.\//,'').replace(/\.vue$/,'');
    const component = Vue.component(
        componentName.replace(/\//,'-'),
        componentConfig.default || componentConfig
    );
});

// 路由守卫，进行路由跳转监听
// router.beforeEach((to,form,next)=>{
//   next()
// })




Vue.prototype.$axios = axios; 
Vue.prototype.$echarts = echarts; 
Vue.prototype.$HTTP = http; 
Vue.prototype.$Global = global
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
