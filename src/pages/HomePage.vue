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

            currentPage: 1,

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

        changePage(direction) {
            if (direction === 'next' && this.currentPage < this.totalPages) {

                this.currentPage++;

            } else if (direction === 'prev' && this.currentPage > 1) {

                this.currentPage--;

            }

            this.apiPageNumber = this.currentPage;

            
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
        <img class="saturno" src="../../public/Saturno.png" alt="">

        <ul class="pagination d-flex justify-content-center p-0 m-0 gap-2">

            <!-- <li v-for="link in apiLinks" v-html="link.label" @click="changeApiPage(link.label)"
                :class="link.label == apiPageNumber ? 'active' : ''"></li> -->
            <vue-awesome-paginate
                :total-items="12"
                v-model="currentPage"
                :items-per-page="8"
                :max-pages-shown="2"
                :on-click="changePage"
            />
        </ul>
    </div>
    <hr>

    <TechnologiesItem class="mb-5"></TechnologiesItem>


</template>

<style lang="scss">

.saturno {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    width: 95%;
}

.pagination {

    list-style-type: none;

    .pagination-container {
        display: flex;
        column-gap: 10px;
    }
    .paginate-buttons {
        height: 40px;
        width: 40px;
        border-radius: 20px;
        cursor: pointer;
        background: linear-gradient(0deg, #41485500 0%, rgba(74, 71, 76, 0.725) 100%);
        backdrop-filter: blur(2px);
        box-shadow: 0 7px 20px 5px #00000048;
        position: relative;
        border: 1px solid rgb(217, 217, 217);
        color: rgb(255, 255, 255);
    }
    .paginate-buttons:hover {
        background-color: #d8d8d8;
    }
    .active-page {
        background-color: #7c7c7c;
        border: 1px solid #ffffff;
        color: white;
    }
    .active-page:hover {
        background-color: #b1b1b1;
    }
}

</style>
