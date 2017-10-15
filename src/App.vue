<template>
  <div id="app">
    <header-main></header-main>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import headerMain from './components/top.vue'

export default {
  name: 'app',
  data () {
    return {

    }
  },
   components:{
      headerMain
    }
}
</script>

<style>
  .fade-enter{
    transform: translateY(20em);
    opacity: 0;
  }
  .fade-enter-active{
    transition: all .5s;
  }


</style>
