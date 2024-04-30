<script>
export default {
    name: 'ProjectCard',

    props: {
        project: Object,
    }
}
</script>

<template>
    <li>
        <div class="img-cover rounded-3">
            <img class="rounded-3" :src="project.image" alt="">
        </div>
        <h2 class="fs-4 mt-4 mb-2">{{ project.name }}</h2>
        <ul class="d-flex gap-2 list-unstyled">
            <li class="px-3 bg-white rounded-3 text-black mb-3" v-for="currentTech in project.technologies">{{
                currentTech.type }}</li>
        </ul>
        <p class="mb-4">{{ project.description }}</p>

        <span v-if="project.type" class="border border-1 border-white p-2 rounded-3"> {{ project.type.name
            }}
        </span>

    </li>
</template>

<style lang="scss" scoped>
li {
    .img-cover {
        img {
            width: 100%;
        }
    }
}
</style>