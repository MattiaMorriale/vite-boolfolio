<script>
export default {
    name: 'ProjectCard',

    props: {
        project: Object,
    }
}
</script>

<template>
    <!-- <li class="border border-light border-1 p-3 rounded-2 ">
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

    </li> -->

    <li class="card" style="width: 18rem;">
        <img :src="project.image"  class="card-img-top" alt="@">
        <div class="card-body d-flex flex-column justify-content-between ">
            <div>
                <h5 class="card-title">{{ project.name }}</h5>
                <ul class="d-flex gap-2 list-unstyled">
                    <li class="px-3 bg-white rounded-3 text-black mb-3" v-for="currentTech in project.technologies">{{
                    currentTech.type }}</li>
                </ul>
                <p class="card-text">{{ project.description }}</p>
                <span v-if="project.type" class="d-block text-primary mb-3"> {{ project.type.name}}</span>
            </div>
            <div>
                <a :href="project.link_GitHub" class="btn btn-primary">Git-Hub</a>
            </div>
        </div>
    </li>
</template>

<style lang="scss" scoped>

</style>