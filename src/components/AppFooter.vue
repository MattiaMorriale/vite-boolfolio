<script>

export default {
    name: 'AppFooter',

    data() {
        return {

        }
    },

}
</script>

<template>

    <footer class="text-center p-3">
        <hr>

        <div class="container px-5 py-3 d-flex ">
            <div class="col-6 d-flex justify-content-start ">
                <span>©2024 Mattia Morriale, Pietro Antonio Nini, Vincenzo Sergi</span>
            </div>
            <div class="col-6 d-flex justify-content-end gap-3">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
        </div>

    </footer>

</template>

<style lang="scss" scoped>

i{
    font-size: 20px;

    cursor: pointer;
}

</style>
