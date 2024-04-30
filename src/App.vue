<script>

//importiamo axios
import axios from 'axios';

export default {
  data() {
    return {
      baseApiUrl: 'http://127.0.0.1:8000/api',
    }
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
  <div class="container btn-outline-primary ">
    ciao amico mio
  </div>
</template>

<style scoped>

</style>
