<script>

import axios from 'axios';

export default {
    name: 'SingleProject',

    data() {
        return {
            project: null,
            projectSlug: null,

            apiBaseUrl: 'http://127.0.0.1:8000/api',
        }
    },

    mounted() {
        // console.log('parametro id della rotta: ', this.$route.params.slug);
        this.projectSlug = this.$route.params.slug;

        axios.get(this.apiBaseUrl + '/projects/' + this.projectSlug).then(res => {

            console.log(res)

            if (res.data.success) {

                this.project = res.data.project

            } else {
                this.$router.push({ name: 'home' })
            }


        })
    },
}

</script>

<template>

    <div class="py-5 mt-5" v-if="project">
        <h2>
            {{ project.name }}
        </h2>

        <p>
            {{ project.description }}
        </p>
    </div>
    <div class="d-flex justify-content-center my-loader" v-else>
        <div class="loader"></div>

    </div>

</template>


<style lang="scss" scoped>
.my-loader{

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .loader {
      width: 80px;
      aspect-ratio: 1;
      border: 10px solid #0000;
      box-sizing: border-box;
      background: 
        radial-gradient(farthest-side,#fff 98%,#0000) 0    0/20px 20px,
        radial-gradient(farthest-side,#fff 98%,#0000) 100% 0/20px 20px,
        radial-gradient(farthest-side,#fff 98%,#0000) 100% 100%/20px 20px,
        radial-gradient(farthest-side,#fff 98%,#0000) 0 100%/20px 20px,
        linear-gradient(#fff 0 0) 50%/40px 40px, #000;
      background-repeat:no-repeat;
      filter: blur(4px) contrast(10);
      animation: l12 0.8s infinite;
    }
    @keyframes l12 {
      100%  {background-position:100% 0,100% 100%,0 100%,0 0,center}
    }
}
</style>