<template>
    <div class="footer">
        <ul class="tabs">
            <li class="tab-item">
                <b class="icon icon-edit"></b>
                <span class="text">创作</span>
            </li>
            <li class="tab-item">
                <b class="icon icon-scenes"></b>
                <span class="text">作品</span>
            </li>
            <li class="tab-item">
                <b class="icon icon-declare"></b>
                <span class="text">关于</span>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "editFooter"
  }
</script>

<style lang="scss" scoped>
    @import '@/common/scss/common.scss';
    .footer {
        width: toRem(750px);
        height: toRem(132px);
        position: fixed;
        margin: 0 auto;
        background: transparent;
        bottom: 0;

        .tabs {
            width: 100%;
            display: flex;
            .tab-item {
                flex: 1;
                height: toRem(132px);
                text-align: center;
                margin: 0;

                .icon {
                    display: block;
                    width: toRem(48px);
                    height: toRem(48px);
                    margin: toRem(20px) auto toRem(8px) auto;

                    &.icon-edit {
                        @include icon-bg('icon-edit', 48px, 48px);
                    }
                    &.icon-scenes {
                        @include icon-bg('icon-scenes', 48px, 48px);
                    }
                    &.icon-declare {
                        @include icon-bg('icon-declare', 48px, 48px);
                    }
                }
                .text {
                    width: 100%;
                    height: toRem(36px);
                    line-height: toRem(36px);
                    font-size: toRem(32px);
                    color: #a5a3ae;

                }
            }
        }
    }
</style>