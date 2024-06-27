<script>
export default {
    name: 'ProjectCard',

    data() {
        return {
            techImages: {
                HTML5: 'html.png',
                CSS3: 'css.png',
                JS: 'js.png',
                BOOTSTRAP: 'bootstrap.png',
                LARAVEL: 'laravel.png',
                MYSQL: 'mysql.png',
                PHP: 'php.png',
                SASS: 'sass.png',
                VUE: 'vue.png',
                VITE: 'vite.svg' // formato SVG
            }
        }
    },

    props: {
        project: Object,
    },

    methods: {
        //trasformo le tecnologie in immagini
        getImage(techType) {

            let imagePath;

            // Controlla se il tipo di tecnologia ha un'immagine associata
            if (this.techImages.hasOwnProperty(techType)) {
                imagePath = (`/public/${this.techImages[techType]}`);
            }
            return imagePath;
        }
    },
}
</script>

<template>
    <li class="card p-0 rounded-2" style="width: 25rem;">
        <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">
            <div class="img-container">
                <img :src="'http://localhost:8000/storage/' + project.image"  class="card-img-top rounded-2" alt="@">
                <h5>{{ project.name }}</h5>
            </div>
        </router-link>
    </li>


</template>

<style lang="scss" scoped>
.card {
    @media (max-width: 768px) {
        width: 22rem;
    }
    background: linear-gradient(0deg, #41485500 0%, rgb(95, 86, 103) 100%);
    backdrop-filter: blur(2px);
    box-shadow: 0 7px 20px 5px #00000048;
    position: relative;

    .img-container {

        overflow: hidden;
        position: relative;

        img {
            transition: transform 0.3s ease;
        }

        h5{
            position: absolute;
            z-index: 99;
            bottom:  5px;
            left: 5px;

            margin: 0;

            color: white;
        }


    }

    &:hover .img-container img {
        transform: scale(1.2);
    }

}
</style>