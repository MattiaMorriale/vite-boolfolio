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

                this.project = res.data.results.data

            } else {
                this.$router.push({ name: 'home' })
            }


        })
    },
}

</script>

<template>

    <div v-if="project">
        <h2>
            {{ project.name }}
        </h2>

        <p>
            {{ project.description }}
        </p>
    </div>
    <div v-else>
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>

</template>


<style lang="scss" scoped></style>