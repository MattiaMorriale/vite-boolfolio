<script>

//importiamo axios
import axios from 'axios';
import AppNav from './components/AppNav.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
      baseApiUrl: 'http://127.0.0.1:8000/api',
    }
  },

  components: {
    AppNav,
    AppMain,
  },

  mounted() {
    axios.get(this.baseApiUrl + '/projects').then(res => {
      console.log(res);
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
