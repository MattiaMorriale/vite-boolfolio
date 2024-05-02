<script>
export default {
    name: 'ProjectCard',

    props: {
        project: Object,
    }
}
</script>

<template>
    <li class="card p-2 " style="width: 18rem;">
        <div class="img-container">
            <img :src="project.image" class="card-img-top" alt="@">
        </div>
        <div class="card-body p-4 d-flex flex-column justify-content-between ">
            <div class="my-4">
                <h5 class="card-title">{{ project.name }}</h5>
                <ul class="d-flex gap-2 list-unstyled">
                    <li class="badge text-bg-light mb-3" v-for="currentTech in project.technologies">{{
                        currentTech.type }}</li>
                </ul>
                <span v-if="project.type" class="d-block text-primary mb-3"> {{ project.type.name }}</span>
            </div>
            <div>
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
                    class="btn btn-outline-light btn-outline">Vai al progetto</router-link>
            </div>
        </div>
    </li>


</template>

<style lang="scss" scoped>
.card {
    width: 18rem;
    @media (max-width: 768px) {
        width: 22rem;
    }

    background: linear-gradient(0deg, #41485500 0%, rgba(113, 93, 128, 0.469) 100%);
    backdrop-filter: blur(2px);
    box-shadow: 0 7px 20px 5px #00000048;
    position: relative;

    .img-container {

        overflow: hidden;

        img {
            transition: transform 0.3s ease;
        }


    }

    &:hover img {
        transform: scale(1.2);
    }

    // &:hover {
    //     transition: transform 0.3s ease;
    //     background: linear-gradient(0deg, #4f5560 0%, rgba(17, 0, 32, 0.5) 100%);

    // }
}
</style>