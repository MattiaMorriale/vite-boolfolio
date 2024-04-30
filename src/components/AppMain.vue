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
            <ul class="list-unstyled d-flex gap-2 ">
                <ProjectCard v-for="currentProject in store.projects" :project="currentProject"></ProjectCard>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    .container {
        ul {
            li {
                width: calc(100% / 3);
            }
        }
    }
}
</style>