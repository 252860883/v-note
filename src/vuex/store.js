import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action.js';
import state from './state.js';
import getters from './getter.js'
Vue.use(Vuex);

//创建一个 vuex 的 store
export default new Vuex.Store({
    state,//状态管理
    getters,//可以理解为是 store的一个计算属性，把公用的计算属性写在 getter里面
    mutations,//
    actions
})
