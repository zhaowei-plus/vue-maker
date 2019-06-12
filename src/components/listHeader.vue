<template>
    <div class="header">
        <div class="hd-left">
            <b class="icon icon-notify"></b>
        </div>

        <div class="hd-content">
            <span class="title">列表页</span>
        </div>

        <div class="hd-right">
            <b class="icon icon-classification"></b>
        </div>
    </div>
</template>

<script>
  export default {
    name: "editHeader"
  }
</script>

<style lang="scss" scoped>
    @import '@/common/scss/common.scss';
    .header {
        background: transparent;
        width: 100%;
        height: toRem(100px);
        box-sizing: border-box;
        display: table;
        color: #d4d4d4;

        .hd-left, .hd-right {
            display: table-cell;
            width: toRem(146px);
            box-sizing: border-box;
            padding: toRem(28px) toRem(32px);
            .icon {
                width: toRem(52px);
                height: toRem(42px);
                vertical-align: top;

                &.icon-notify {
                    @include icon-bg('icon-notify', 42px, 42px);
                }
                &.icon-classification {
                    @include icon-bg('icon-classification', 52px, 42px);
                }
            }
            .title {
                font-size: toRem(36px);
                height: toRem(42px);
                line-height: toRem(42px);
            }
        }

        .hd-left {
            .icon {
                float: left;
            }
            .text {
                margin-left: toRem(4px);
                float: left;
                text-align: left;
            }
        }

        .hd-right {
            .icon {
                float: right;
            }
            .text {
                margin-right: toRem(4px);
                float: right;
                text-align: right;
            }
        }

        .hd-content {
            display: table-cell;
            text-align: center;
            font-size: toRem(40px);
        }
    }

</style>


