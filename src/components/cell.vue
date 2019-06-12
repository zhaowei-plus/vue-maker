<template>
    <div class="cell-wrapper">
        <span class="text">免费专区</span>
        <div class="content">
            <span class="info">0元制作</span>
            <div class="cell-icon">
                <span class="icon iconfont icon-next-m"></span>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "cell"
  }
</script>

<style lang="scss" scoped>
    @import "@/common/scss/common.scss";
    .cell-wrapper {
        /*width: 100%;*/
        height: pxTorem(52px);
        margin: pxTorem(14px) pxTorem(32px);
        display: flex;

        .text {
            flex: 1;
            display: inline-block;
            height: pxTorem(52px);
            line-height: pxTorem(52px);
            font-size: pxTorem(32px);
            color: #171717;
            text-align: left;
        }

        .content {
            width: auto;
            height: pxTorem(52px);
            color: #979797;
            font-size: pxTorem(24px);

            .info {
                display: inline-block;
                height: pxTorem(52px);
                line-height: pxTorem(52px);
                text-align: right;
            }

            .cell-icon {
                line-height: pxTorem(52px);
                display: inline-block;

            }

        }
    }

</style>