<script>
export default {
    name: 'AppMain',

    data() {
        return {
        }
    }
}
</script>

<template>
    <main>
        <div class="container py-5">
            <ul class="list-unstyled d-flex">
                <li>
                    <div class="img-cover">
                        <img src="https://picsum.photos/400/500" alt="">
                    </div>
                    <span>Name</span>
                    <p>Description</p>
                </li>

                <li>
                    <div class="img-cover">
                        <img src="https://picsum.photos/400/500" alt="">
                    </div>
                    <span>Name</span>
                    <p>Description</p>
                </li>

                <li>
                    <div class="img-cover">
                        <img src="https://picsum.photos/400/500" alt="">
                    </div>
                    <span>Name</span>
                    <p>Description</p>
                </li>
            </ul>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    .container {
        ul {
            li {
                width: calc(100% / 3);
            }
        }
    }
}
</style>