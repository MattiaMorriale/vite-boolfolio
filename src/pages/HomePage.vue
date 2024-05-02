<script>

//importiamo axios
import { store } from '../store.js';
import axios from 'axios';
import AppMain from '../components/AppMain.vue';
import TechnologiesItem from '../components/TechnologiesItem.vue'

export default {
    name: 'HomePage',

    data() {
        return {
            baseApiUrl: 'http://127.0.0.1:8000/api',

            apiLinks: [],
            apiPageNumber: 1,

            isLoading: true,

            store,
        }
    },

    components: {
        AppMain,
        TechnologiesItem,
    },

    mounted() {
        this.apiCall();
    },

    methods: {

        apiCall() {
            this.isLoading = true

            axios.get(this.baseApiUrl + '/projects', {
                params: {
                    page: this.apiPageNumber
                }
            }).then(res => {
                if (res.data.success) {
                    this.isLoading = false
                }

                this.store.projects = res.data.results.data;

                this.apiLinks = res.data.results.links;
            })
        },

        changeApiPage(pageNumber) {
            this.apiPageNumber = pageNumber;

            this.apiCall();
        },
    }

}
</script>

<template>
    <AppMain></AppMain>

    <div class="container py-3">

        <router-view></router-view>

    </div>

    <div class="container d-flex justify-content-center flex-wrap">
        <img src="../../public/Saturno.png" alt="">

        <ul class="d-flex gap-2">

            <li v-for="link in apiLinks" v-html="link.label" @click="changeApiPage(link.label)"
                :class="link.label == apiPageNumber ? 'active' : ''"></li>

        </ul>
    </div>
    <hr>

    <TechnologiesItem class="mb-5"></TechnologiesItem>


</template>

<style scoped>
img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    width: 95%;
}

ul {

    list-style-type: none;

    li {

        padding: 8px;

        text-decoration: none;
        color: white;

        transition: all .3s ease;

        cursor: pointer;

        &:hover,
        &.active {
            background-color: rgba(255, 255, 255, 0.4);
            color: black;
        }

    }

}
</style>
