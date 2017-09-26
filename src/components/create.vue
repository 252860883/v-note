<template>
    <div class="create">
        <div class="create_field">
            <input class="create_title" type="text" placeholder="这里填写标题" v-model="note.title" @keyup="setNote(note) "/>
            <textarea class="create_context" placeholder="这里输入内容" v-model="note.text" @keyup="setNote(note)"></textarea>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        data (){
            return {
                note:{
                    title:"未命名",
                    text:""
                }
            }
        },
        methods:{
            ...mapActions([
                'setNote',
            ]),
            //注意！！ 这个get没有用到
            getNote(id) {
                const note = JSON.parse(localStorage.getItem('vNotes'));
                note.notes.filter(n => {
                    if(n.date == id) {
                        this.note.title = n.title;
                        this.note.text = n.text;
                    }
                });
            }
        }
    }
</script>

<style>
    .create_field {
        width: 100%;
        padding: 0 .5em;
        box-sizing: border-box;
    }
    .create_field input,textarea{
        display: block;
        width: 100%;
        margin: 1em 0;
        border-radius: .3em;
        -webkit-border-radius: .3em;
        border: 0;
        background: #eee;
        font-size: 18px;
        padding-left: .5em;
        box-sizing: border-box;
    }
    .create_field input{
        height: 2.5em;
    }
    .create_field textarea{
        height: 20em;
        max-height: 25em;
    }

</style>