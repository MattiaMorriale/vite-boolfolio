<script>

import ProjectCard from './ProjectCard.vue';
import { store } from '../store';

export default {
    name: 'AppMain',

    data() {
        return {
            store,
        }
    },
    components: {
        ProjectCard,
    },
}
</script>

<template>
    <main>
        <div class="container py-4 mt-5">
            <h1 class="py-5 ps-4 mb-0" >I MIEI PROGETTI</h1>
            <ul class="list-unstyled ">
                <li class="row d-flex justify-content-center flex-wrap gap-4 mx-auto ">
                    <ProjectCard v-for="currentProject in store.projects" :project="currentProject"></ProjectCard>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>