<script>

//importiamo axios
import { store } from './store';
import axios from 'axios';
import AppNav from './components/AppNav.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
      baseApiUrl: 'http://127.0.0.1:8000/api',
      projects: [],
      store,
    }
  },

  components: {
    AppNav,
    AppMain,
  },

  mounted() {
    axios.get(this.baseApiUrl + '/projects').then(res => {
      this.store.projects = res.data.results.data;
      // console.log(store.projects)
    })
  },

  methods: {

  },
}
</script>

<template>
  <AppNav></AppNav>
  <AppMain></AppMain>
</template>

<style scoped></style>
