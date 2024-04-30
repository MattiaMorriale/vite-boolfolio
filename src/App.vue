<script>

import AppNav from './components/AppNav.vue'
import AppMain from './components/AppMain.vue'

export default {
  data() {
    return {

    }
  },

  components: {
    AppNav,
    AppMain
  },

  mounted() {


  },

  methods: {

  },
}

</script>

<template>
  <AppNav></AppNav>

  <div class="container py-5">

    <router-view></router-view>

  </div>

</template>

<style lang="scss" scoped>



</style>