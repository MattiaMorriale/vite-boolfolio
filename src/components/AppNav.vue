<script>
export default {
    name: 'AppNav',

    data() {
        return {
        }
    }
}
</script>

<template>
    <nav class="mb-0 p-3">
        <div class="container py-3 d-flex align-items-center justify-content-between">
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
                            Contatti
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
                    Contatti
                </li>
            </ul>
        </div>
        <hr class="m-0">
    </nav>
</template>

<style lang="scss" scoped>
#dropdown {
    background-color: white;
    background-image: url(../img/starry-night-sky-background-illustration-2023-11-27-05-06-34-utc.jpg);
    background-size: contain;
    filter: brightness(100);

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
                background-color: white;
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
            height: 1px;
            background-color: white;
            transform-origin: center;
            transform: scaleX(0);
            transition: transform 0.4s ease;
        }

        &:hover::after {
            transform: scaleX(1);
        }
    }
}
</style>