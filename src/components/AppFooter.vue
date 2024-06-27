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
                <span><strong>POWERED BY:</strong> Mattia Morriale</span>
            </div>
            <div class="col-6 d-flex justify-content-end gap-3">
                <a class="text-decoration-none text-light" href="https://github.com/MattiaMorriale" target="_blank"><i class="fa-brands fa-github"></i></a>
                <a class="text-decoration-none text-light" href="https://linkedin.com/in/mattia-morriale" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>

    </footer>

</template>

<style lang="scss" scoped>

i{
    font-size: 30px;

    cursor: pointer;

    &:hover{
        color: #FFBD59;
    }
}

</style>
