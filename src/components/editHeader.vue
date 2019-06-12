<template>
    <div class="header">
        <div class="hd-left">
            <span class="icon icon-back"></span>
            <span class="title">返回</span>
        </div>

        <div class="hd-content">
            <span class="title">{{title}}</span>
        </div>

        <div class="hd-right">
            <span class="icon icon-preview"></span>
            <span class="title">预览</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "editHeader",
    props: {
      title: {
        type: String,
        default: '',
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '@/common/scss/common.scss';
    .header {
        background: transparent;
        width: 100%;
        padding: 0;
        margin: 0;
        height: toRem(102px);
        line-height: toRem(102px);
        display: flex;
        color: #d4d4d4;
        box-sizing: border-box;

        font-size: 0;

        .hd-left, .hd-right {
            line-height: toRem(102px);
            box-sizing: border-box;
            padding: toRem(30px) toRem(36px);
            .icon {
                width: toRem(42px);
                height: toRem(42px);
                vertical-align: top;

            }
            .title {
                height: toRem(42px);
                line-height: toRem(42px);
                font-size: toRem(32px);
            }
        }

        .hd-left {
            .icon {
                float: left;
                margin-right: toRem(4px);
                @include icon-bg('icon-back', 42px, 42px);
            }
            .title {
                float: left;
                text-align: left;
            }
        }

        .hd-right {
            .icon {
                float: right;
                margin-left: toRem(8px);
                @include icon-bg('icon-preview', 42px, 42px);
            }
            .title {
                float: right;
                text-align: right;
            }
        }

        .hd-content {
            flex: 1;
            text-align: center;
            .title {
                margin: -1px auto;
                height: toRem(42px);
                font-size: toRem(42px);
            }

        }
    }

</style>