/**
 *
 * mutation 改变store 中的状态的唯一办法
 * 因为回掉函数是不可以被追踪的，所以mutation 是不可以异步的
 *
 * mutations(state,payload)
 *
 * 在组件中使用 this.$store.commit('xxx') 提交 mutation，或者 使用mapMutations映射
 *
 *
 */

export default {

    //添加note到 localStorage

    ADD_NOTE(store,noteId){
        let note =JSON.parse(localStorage.getItem('vNotes'));
        //如果是第一次创建，献给note创建一个数组
        if (!note){
            note=[];
        }
        // note.forEach((n, index) => {
        //     if(noteId == n.date) note.splice(index, 1);
        // });
        note.unshift(store.note);//向列表第一个位置添加note
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