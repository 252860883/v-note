export default {

    //添加note到 localStorage

    ADD_NOTE(store,noteId){
        let note =JSON.parse(localStorage.getItem('vNotes'));
        note.forEach((n, index) => {
            if(noteId == n.date) note.splice(index, 1);
        });
        note.unshift(store.note);//向列表第一个添加note
        localStorage.setItem('vNotes',JSON.stringify(note));//将添加后的note再添加到localS里
        console.log(note);
    },

    //设置搜索引擎,写入store.search中

    SET_ENGINE_SEARCH (store,engine){
    store.search=engine;
    },

    //设置 note

    SET_NOTE (store,note){
        store.note=note;
    }
}