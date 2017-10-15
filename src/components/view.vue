
<template>
    <section class="view">
            <div class="view_show">
                <input class="view_title" type="text" placeholder="这里填写标题" :value="title" disabled="disabled" />
                <textarea class="view_context" :value="text" disabled="disabled"></textarea>
            </div>
    </section>
</template>

<script>
   // import {$route} from 'vue-router';
    export default {
        data () {
            return {
                title:'',
                text:'',
            }
        },
        methods: {
            getNode (id){
                const note =JSON.parse(localStorage.getItem('vNotes'));
                note.filter(n=>{
                    if(n.noteId==id){
                        this.title=n.title;
                        this.text=n.text;
                    }
                })
            }
        },
        mounted () {
            this.getNode(this.$route.params.noteId);
        }
    }

</script>

<style>
    .view_show {
        width: 100%;
        padding: 0 .5em;
        box-sizing: border-box;
    }
    .view_show input,textarea{
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
    .view_show input{
        height: 2.5em;
    }
    .view_show textarea{
        height: 20em;
        max-height: 25em;
    }

</style>