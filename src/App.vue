<script>
import { store } from './store.js';

import AppNav from './components/AppNav.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppNav,
    AppMain,
    AppFooter,
  },

  mounted() {


  },

  methods: {
    
  }
}

</script>

<template>
  <AppNav></AppNav>

  <div class="container py-5 pb-0 ">

    <router-view></router-view>

  </div>
  <AppFooter></AppFooter>
</template>

<style lang="scss" scoped>

</style>