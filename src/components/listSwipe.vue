<template>
    <div class="list-swipe">
        <mt-swipe :auto="3000">
            <mt-swipe-item>
                <img class="banner" src="./img/banner1.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img class="banner" src="./img/banner2.png">
            </mt-swipe-item>
            <mt-swipe-item>
                <img class="banner" src="./img/banner3.jpg">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
  export default {
    name: "listSwipe"
  }
</script>

<style lang="scss" scoped>
    @import "@/common/scss/common.scss";
    .list-swipe {
        margin: 0;
        width: 100%;
        height: pxTorem(314px);

        .banner {
            width: 100%;
            height: pxTorem(314px);
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>