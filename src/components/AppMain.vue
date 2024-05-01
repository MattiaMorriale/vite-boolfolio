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
        <div class="container py-5">
            <ul class="list-unstyled ">
                <li class="row d-flex justify-content-between flex-wrap row-gap-5 mx-auto ">
                    <ProjectCard v-for="currentProject in store.projects" :project="currentProject"></ProjectCard>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>