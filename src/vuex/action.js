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