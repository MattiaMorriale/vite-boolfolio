<script>

import axios from 'axios';

export default {
    name: 'SingleProject',

    data() {
        return {
            project: null,
            projectSlug: null,

            apiBaseUrl: 'http://127.0.0.1:8000/api',

            techImages: {
                html: 'html.png',
                css: 'css.png',
                js: 'js.png',
                bootstrap: 'bootstrap.png',
                laravel: 'laravel.png',
                mysql: 'mysql.png',
                php: 'php.png',
                sass: 'sass.png',
                vue: 'vue.png',
                vite: 'vite.svg' // formato SVG
            }
        }
    },

    mounted() {
        // console.log('parametro id della rotta: ', this.$route.params.slug);
        this.projectSlug = this.$route.params.slug;

        axios.get(this.apiBaseUrl + '/projects/' + this.projectSlug).then(res => {

            if (res.data.success) {

                this.project = res.data.project

            } else {
                this.$router.push({ name: 'home' })
            }


        })
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

    <div id="project" class="d-block d-lg-flex pt-5 mt-5" v-if="project">
        
        <!-- <img :src="project.image" class="img-fluid" alt="..."> -->

        <!-- carosello di immagini -->
        <div class="img-box">
            <img :src="project.image" class="d-block w-100" alt="...">
        </div>

        <!-- testo descrittivo -->
        <div id="description" class="text-center mx-auto mx-xl-0 mt-5">
            <h2 class="my-3 fs-1">
                {{ project.name }}
            </h2>
    
            <p class="mb-5">
                {{ project.description }}
            </p>

            <!-- tecnologie -->
            <div v-if="project.technologies">
                <h3>Tecnologie utilizzate</h3>

                <ul class="d-flex flex-wrap justify-content-center list-unstyled gap-5 mb-4 text-uppercase">
                    <li class="my-3" v-for="currentTech in project.technologies" :key="currentTech.type">
                        <img :src="getImage(currentTech.type)" :alt="currentTech.type" class="mr-1 " style="max-height: 40px;">
                    </li>
                </ul>
            </div>

            <!-- tipi -->
            <div v-if="project.type">
                <h3>Tipo di Progetto</h3>

                <span class="d-block mt-3"> {{ project.type.name }}</span>
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-center my-loader" v-else>
        <div class="loader"></div>
    </div>

</template>


<style lang="scss" scoped>
#project {

    display: flex;
    flex-direction: row;
    gap: 30px;
    
    
    .img-box {
        max-width: 700px;
        z-index: 0;
        
        img {
            object-fit: contain;
        }
    }

    #description {

        max-width: 450px;

        p {
            line-height: 1.8em;
        }

        h2, h3 {
            text-transform: uppercase;
        }

        span {
            text-transform: uppercase;
            font-style: italic;
        }

        img {
            background-color: transparent;
        }
    }

}

.my-loader{

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .loader {
      width: 80px;
      aspect-ratio: 1;
      border: 10px solid #0000;
      box-sizing: border-box;
      background: 
        radial-gradient(farthest-side,#fff 98%,#0000) 0    0/20px 20px,
        radial-gradient(farthest-side,#fff 98%,#0000) 100% 0/20px 20px,
        radial-gradient(farthest-side,#fff 98%,#0000) 100% 100%/20px 20px,
        radial-gradient(farthest-side,#fff 98%,#0000) 0 100%/20px 20px,
        linear-gradient(#fff 0 0) 50%/40px 40px, #000;
      background-repeat:no-repeat;
      filter: blur(4px) contrast(10);
      animation: l12 0.8s infinite;
    }
    @keyframes l12 {
      100%  {background-position:100% 0,100% 100%,0 100%,0 0,center}
    }
}
</style>