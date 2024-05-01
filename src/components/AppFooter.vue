<script>

import { store } from '../store';

export default {
    name: 'AppFooter',

    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <footer class="mb-0">
        <div class="container py-3 mb-3 d-flex align-items-start justify-content-between">
            <div class="col-4 pt-5 ">
                <span class="fs-1">Tecnologie Utilizzate</span>
            </div>
            <div class="col-8 pt-5 ">
                <ul class="d-flex flex-wrap justify-content-center list-unstyled gap-5 mb-0 text-uppercase">
                    <li v-for="currentLogo in store.logo">
                        <img :src="currentLogo" alt="@" class="logo">
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
li{
    background: linear-gradient(0deg, #41485500 0%, rgba(113, 93, 128, 0.469) 100%);
    backdrop-filter: blur(2px);
    box-shadow: 0 7px 20px 5px #00000048;

    border-radius: 10px;
    
    padding: 10px;

    .logo{
        width: 75px;
        height: 75px;
    }
}

</style>
