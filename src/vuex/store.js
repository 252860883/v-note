import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action.js';

Vue.use(Vuex);

const state={
    search: 'aaa',
    note:{
        noteId:'',
        title: '',
        text: '',
        date: ' '
    }
};

const getters={
    search:store=>store.search
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
