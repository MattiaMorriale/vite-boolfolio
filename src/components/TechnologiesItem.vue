<script>

import { store } from '../store';

export default {
    name: 'TechnologiesItem',

    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <section class="mb-0">
        <div class="container py-3 mb-3 d-flex align-items-start justify-content-between">
            <div class="col-4 pt-5 ">
                <span class="fs-1">Tecnologie Utilizzate</span>
            </div>
            <div class="col-8 pt-5 ">
                <ul class="d-flex flex-wrap justify-content-center list-unstyled gap-5 mb-0 text-uppercase">
                    <li v-for="currentLogo in store.logos">
                        <img :src="'../..' + currentLogo" alt="@" class="logo">
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
li{
    
    
    padding: 10px;

    .logo{
        width: 75px;
        height: 75px;
    }
}

</style>
