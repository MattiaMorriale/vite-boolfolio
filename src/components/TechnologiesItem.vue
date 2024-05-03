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
        <div class="container py-3 mb-3 d-flex flex-column  align-items-start justify-content-between">
            <div class="col-12 pt-5 ps-4 text-center">
                <span class="fs-4">Tecnologie Utilizzate</span>
            </div>
            <div class="col-12 pt-3">
                <ul
                    class="d-flex flex-wrap justify-content-center align-items-center list-unstyled gap-5 mb-0 text-uppercase py-4 rounded-2">
                    <li v-for="currentLogo in store.logos">
                        <img :src="'../..' + currentLogo" alt="@" class="logo">
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
li {


    padding: 10px;

    .logo {
        width: 60px;
        height: auto;
    }
}
</style>
