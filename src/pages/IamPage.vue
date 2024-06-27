<script>

//importiamo axios
import { store } from '../store.js';
import axios from 'axios';
import AppMain from '../components/AppMain.vue';
import TechnologiesItem from '../components/TechnologiesItem.vue'

export default {
    name: 'IamPage',

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

    <div v-if="!isLoading">
        <div class="container py-5">
            <div class="row">
                <div class="col-12 col-lg-6 d-flex flex-column justify-content-center">
                    <p style="font-size: 25px;">
                        Ciao sono Mattia, sono un Jr. Full Stack Web Developer con una solida esperienza in
                        ambito informatico e aziendale. Grazie al mio background e al
                        continuo aggiornamento nelle tecnologie più utilizzate, sono in
                        grado di apportare un valido contributo al team e all’azienda.
                        Completano il mio profilo ottime doti comunicative e interpersonali,
                        attitudine analitica e al problem solving
                    </p>
                </div>
                <div class="col-md-6 d-none d-lg-flex justify-content-end ">
                    <img class="img-fluid" src="../../public/me.png" alt="#">
                </div>
            </div>
            <div class="row">
                <h1 class="my-3">ISTRUZIONE E FORMAZIONE</h1>

                <ul>
                    <h3 class="my-4">Boolean Careers</h3>
                    <li class="my-li">
                    Bootcamp di sei mesi in cui ho imparato ad utilizzare i principali
                    linguaggi di frontend e di backend/ Corso intensivo di 700 ore che
                    prevede lezioni teoriche al mattino e esercizi pratici durante il
                    pomeriggio
                    </li>
                    <h3 class="my-4">Diploma Perito Informatico - Istituto Tecnico e Professionale</h3>
                    <li class="my-li">
                    Diploma di scuola superiore, dove ho appreso le conoscenze generali
                    informatiche, sviluppando ulteriolmente conoscenze avanzate delle
                    tecnologie HTML e CSS, sviluppando una web page statica ispirata al
                    sito della Apple
                    </li>
                </ul>
            </div>
        </div>
    
        <hr>
    
        <TechnologiesItem class="mb-5"></TechnologiesItem>
    </div>

    <div class="d-flex justify-content-center my-loader" v-else>
        <div class="loader"></div>
    </div>


</template>

<style lang="scss">
.my-li{
    font-size: 25px;
}

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
