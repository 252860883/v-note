import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './vuex/store';
import routes from './route-config.js'//导入路由配置

Vue.use(VueRouter);//添加路由

//创建路由
const router =new VueRouter({
    routes
});

//将store，router加入并生成实例
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    render:h=>h(App)
});
