/**
 *
 * action 和 mutation 的区别：
 * action提交的是 mutation 而不是直接变更状态
 * action是可以可以包含异步操作的
 *
 * 在组件中可以使用 this.$store.dispath('xxx')分发action 或者使用 mapAction 辅助函数映射
 *
 * action 返回的是一个 promise对象，dispatch后的也是 promise对象 可以使用 .then 进行后续操作
 *
 */

export default{

    //添加note
    addNote({commit},noteId){
        commit('ADD_NOTE',noteId);
    },

    //设置搜索引擎
    setSearch({commit},engine){
        commit('SET_ENGINE_SEARCH',engine);
    },

    //更新note
    setNote ({ commit },note) {
        var a= new Date();
        note.date=a.getFullYear()+'.'+(a.getMonth()+1)+'.'+a.getDate()+' '+a.getHours()+':'+a.getMinutes();
        note.noteId=a.getTime();
        commit('SET_NOTE', note);
    }

}