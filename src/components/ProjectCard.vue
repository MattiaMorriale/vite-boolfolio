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
        <div class="img-cover">
            <img :src="project.image" alt="">
        </div>
        <span>{{ project.name }}</span>
        <p>Description</p>
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