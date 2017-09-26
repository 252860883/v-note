<template>
    <section class="list_notes">
        <transition-group name="fade2">
            <div class="list_note"  v-for="note in notes" :key="note.noteId" >
                <!--动态绑定 to的地址-->
                <div class="btn_delete" @click="removeNote(note.noteId)">X</div>
                <router-link :to="{name: 'view',params: { noteId: note.noteId}}" class="router">
                    <h1 class="note_title">{{note.title}}</h1>
                    <hr>
                    <p>{{note.date}}</p>
                    <p class="note_text">{{note.text}}</p>
                </router-link>
            </div>
        </transition-group>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        data () {
            return {
                notes:[]
            }
        },
        mounted () {
            this.listNodes();
            this.search;
            console.log(this.search)
        },
        methods:{
            listNodes () {
                let note =localStorage.getItem('vNotes');
                this.notes=JSON.parse(note);
            },
            removeNote(index){
                let note=localStorage.getItem('vNotes');
                note=JSON.parse(note);
                for (var i=0;i<note.length;i++){
                    if (note[i].noteId==index){
                        note.splice(i,1);
                        i++;
                    }
                }
                this.notes=[];
                localStorage.setItem('vNotes',JSON.stringify(note));
                this.listNodes();
            }
        },
        computed:{
            ...mapGetters([
                'search'
            ])
        }
    }
</script>

<style>
     span{
        display: block;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }
    .list_note{
        width: 15em;
        height: 15em;
        flex: 0 1 15em;
        background: linear-gradient(#87CEFA,#6495ED);
        margin: 1.5em;
        box-sizing: border-box;
        color: #fff;
        transition: all .2s;
        padding: 1em;
        position: relative;
        overflow: hidden;
    }
    .list_note:hover{
        transform: scale(1.02);
        box-shadow: 0 0 .5em .5em  #ddd;
    }
    .list_note hr{
        border:.06em solid #fff;
    }
    .list_note h1{
        height: 1.2em;
        margin-bottom: .2em;
    }
    .list_note p{
        margin: .5em 0;
    }
    .note_title{
        overflow: hidden;
        max-lines: 1;
    }
    .note_text{
        max-height: 7.8em;
        overflow: hidden;
    }
    a{
        text-decoration: none;
        color: #fff;

    }
    .btn_delete{
        position: absolute;
        top: 10em;
        right: 3em;
        width: 3em;
        height: 3em;
        border-radius: 50%;
        background: lightskyblue;
        /*box-shadow: 0 0 .5em .5em  darkslateblue;*/
        text-align: center;
        line-height: 3em;
        transition: transform .5s;
        font-size: 1.05em;
        visibility: hidden;
    }
     .list_note:hover .btn_delete{
         visibility: visible;
     }

    .btn_delete:hover{
        transform:rotate(360deg) ;
    }

    .fade2-enter{
        transform: scale(.5) ;
        opacity: 0;
    }
    .fade2-enter-active , .fade2-leave-active{
        transition: all .2s;
        position: absolute;
    }
    .fade2-leave-to{
        transform: translateY(3em);
        opacity: 0;
    }

</style>