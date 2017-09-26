<template>
    <div class="header">
        <div class="logo">V-NOTE</div>
        <div class="search">
            <input class="search_input" type="text" placeholder="搜索" v-model="searchValue" @keyup="setSearch(searchValue)" v-show="$route.name=='main'"/>
        </div>
        <div class="btn_group">
            <router-link to="/create/"><input type="button" class="btn" value="新建" v-if="$route.path=='/'"/></router-link>
            <router-link to="/"><input v-if="$route.path=='/create/'" type="button" class="btn" value="保存" @click="addNote($route.params.noteId)"/></router-link>
            <router-link to="/"><input type="button" class="btn" value="返回" v-if="$route.name=='view'||$route.name=='create'"/></router-link>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        data() {
            return {
                searchValue: ''
            }
        },
        methods: {
            ...mapActions([ // 从store上绑定的action中载入需要的到此组件中
                'setSearch',
                'addNote'
            ])
        }
    }

</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #ccc;
        padding: 1em;
    }
.logo{
    flex: 0 1 auto;
    font-size: 3rem;
    font-weight: bold;
    margin-left: 1em;
    color: #6495ED;
}
.search{
    flex: 0 1 50%;
    /*margin: 0 5em;*/
}
.search_input{
    width: 60%;
    height: 2.5em;
    font-size: 18px;
    border-radius: .2em;
    border: 0;
    background: #eee;
    padding-left: .5em;
}
.btn_group{
    flex: 0 1 auto;
}
.btn{
    height: 2.5em;
    width: 5em;
    border: 0;
    background: #eee;
    border-radius:.2em;
    margin: .3em;
    color: #666;
    font-size: 1.1em;
}
.btn:hover{
   background: linear-gradient(#87CEFA,#6495ED);
   color: #fff;
}


</style>

