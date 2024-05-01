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
    <nav class="mb-0">
        <div class="container py-3 d-flex align-items-center justify-content-between">
            <div class="logo-container">
                <span class="fs-1">Portfolio</span>
            </div>
            <ul class="d-flex list-unstyled gap-5 mb-0 text-uppercase">
                <li>
                    <router-link :to="{name: 'home'}" class="text-decoration-none text-light ">Progetti</router-link>
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

<style lang="scss" scoped></style>