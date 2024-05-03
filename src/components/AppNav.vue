<script>

import axios from 'axios';

export default {
    name: 'AppNav',

    data() {
        return {
            formData: {
                name: '',
                address: '',
                message: '',
            }
        }
    },

    mounted() {

    },

    methods: {
        sendContactRequest() {
            axios.post('http://127.0.0.1:8000/api/new-contact', this.formData).then(res => {
                console.log(res);
            });
        }
    },
}
</script>

<template>
    <nav class="mb-0">
        <div class="container p-3 d-flex align-items-center justify-content-between">
            <div class="logo-container d-flex flex-column align-items-center ">
                <img src="../../public/rocket.png" alt="">
                <p class="m-0">RocketDev</p>
            </div>

            <!-- Default dropstart button -->
            <div class="btn-group dropstart d-md-none d-flex">
                <button type="button" class="btn border-0" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="navbar-toggler-icon fs-3"></span>
                </button>
                <div id="dropdown" class="dropdown-menu px-5 py-3">
                    <ul class=" list-unstyled text-uppercase text-center d-flex flex-column gap-3 m-0 fs-5">
                        <li>
                            <router-link :to="{ name: 'home' }"
                                class="text-decoration-none text-light ">Progetti</router-link>
                        </li>
                        <li>
                            Chi sono
                        </li>
                        <li>
                            <span type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Contattami</span>
                        </li>
                    </ul>
                </div>
            </div>

            <ul class="d-none d-md-flex list-unstyled gap-5 mb-0 text-uppercase">
                <li>
                    <router-link :to="{ name: 'home' }" class="text-decoration-none text-light ">Progetti</router-link>
                </li>
                <li>
                    Chi sono
                </li>
                <li>
                    <span type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Contattami</span>
                </li>
            </ul>

        </div>
        <hr class="m-0">
    </nav>
    
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title text-uppercase fw-bold" id="offcanvasRightLabel">Contattami</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body">

                    <form @submit.prevent="sendContactRequest()">
                        <div class="mb-4">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" name="name" v-model="formData.name">
                        </div>

                        <div class="mb-4">
                            <label for="address" class="form-label">Indirizzo Email</label>
                            <input type="email" class="form-control" id="address" name="address" aria-describedby="emailHelp" v-model="formData.address">
                            <div id="emailHelp" class="form-text">Non condivideremo la tua email con terzi.</div>
                        </div>

                        <div class="form-floating mb-4">
                            <textarea class="form-control" placeholder="Lascia un commento qui.." id="message" name="message" style="height: 100px;" v-model="formData.message"></textarea>
                            <label for="message">Messaggio</label>
                        </div>

                <button type="submit" class="btn btn-outline-light ">Invia</button>
            </form>

        </div>
    </div>
</template>

<style lang="scss" scoped>

nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: linear-gradient(0deg, hsla(274, 6%, 24%, 0.56) 0%,hsl(0, 0%, 0%) 60%);
    backdrop-filter: blur(15px);
}

#dropdown {
    background: linear-gradient(0deg, hsla(274, 6%, 24%, 0.56) 0%,hsl(0, 0%, 0%) 60%);
    backdrop-filter: blur(15px);

    ul {
        li {
            transition: 0.4s;
            cursor: pointer;
            position: relative;

            &:hover {
                transform: scale(1.1);
            }

            &::after {
                content: '';
                position: absolute;
                left: 0%;
                transform: translateX(-50%);
                bottom: -3px;
                width: 100%;
                height: 1px;
                background-color: rgb(255, 255, 255);
                transform-origin: center;
                transform: scaleX(0);
                transition: transform 0.4s ease;
            }

            &:hover::after {
                transform: scaleX(1);
            }
        }
    }
}

ul {
    li {
        transition: 0.5s;
        cursor: pointer;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            left: 0%;
            transform: translateX(-50%);
            bottom: -3px;
            width: 100%;
            height: 2px;
            background-color: #cc34e1;
            transform-origin: center;
            transform: scaleX(0);
            transition: transform 0.4s ease;
        }

        &:hover::after {
            transform: scaleX(1);
        }
    }
}

.offcanvas {
    background: linear-gradient(0deg, hsla(274, 6%, 24%, 0.56) 0%,hsl(0, 0%, 0%) 60%);
    backdrop-filter: blur(15px);

    @media (max-width: 552px) {
        width: 100%;
    }
}

</style>