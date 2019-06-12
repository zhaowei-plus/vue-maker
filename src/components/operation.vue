<template>

    <!--<template v-if="element.type == 'text'">-->
        <!--&lt;!&ndash;文本框&ndash;&gt;-->
        <!--<div class="operation-warpper"-->
             <!--:style='{left: element.left, top: element.top, width: element.width/2+"px", height: element.height/2+"px" , backgroungd: url(element.url)}}'-->
             <!--ref="warpper">-->
            <!--<font-component v-if="element.type == 'text'" :text="element.text"></font-component>-->
            <!--<div class="opertion left top" v-if="element.type == 'text'" ref="move" v-icon-drag>-->
                <!--<span class="icon icon-move"></span>-->
            <!--</div>-->
            <!--<div class="opertion right top" rel="delete">-->
                <!--<span class="icon icon-delete"></span>-->
            <!--</div>-->
            <!--<div class="opertion right bottom" rel="resize" v-resize>-->
                <!--<span class="icon icon-resize"></span>-->
            <!--</div>-->
        <!--</div>-->
    <!--</template>-->

    <!--<template v-if="element.type == 'img'">-->
        <!--<div v-drag class="operation-warpper" :style='{left: element.left, top: element.top, width: element.width/2+"px", height: element.height/2+"px", backgroungd: url(element.url)}'  ref="warpper" @click="selectElement">-->
            <!--<div class="opertion left top" ref="move" >-->
                <!--<span class="icon icon-move"></span>-->
            <!--</div>-->
            <!--<div class="opertion right top" rel="delete">-->
                <!--<span class="icon icon-delete"></span>-->
            <!--</div>-->
            <!--<div class="opertion right bottom" rel="resize" v-resize>-->
                <!--<span class="icon icon-resize"></span>-->
            <!--</div>-->
        <!--</div>-->
    <!--</template>-->
</template>

<script>
  import fontComponent from '@/components/fontComponent'
  export default {
    name: "operation",
    data() {
      return {
        x: 0,
        y: 0,
        isDown: false,
      }
    },
    props: {
      element: {
        type: Object,
      }
    },
    components: {
      fontComponent,
    },
    methods: {
      selectElement() {
        // this.$rels.warpper.addC
      }
    },
    // 自定义指令
    directives:{

    }
  }
</script>

<style lang="scss" scoped>
    @import '@/common/scss/common.scss';
    $iconWidth: 36px;
    $iconHeight: 36px;
    .operation-warpper {
        width: toRem($canvas-content-width);
        left: 0;
        top: 0;
        padding: 0;
        margin: 0;
        border: 1px solid #0d8cfa;
        position: absolute;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        .opertion {
            width: toRem($iconWidth);
            height: toRem($iconHeight);
            position: absolute;
            background: #0d8cfa;
            border-radius: 50%;

            .icon {
                display: block;
                width: 100%;
                height: 100%;

                &.icon-delete {
                    @include icon-bg('icon-delete', $iconWidth - 12px, $iconWidth  - 12px);
                }
                &.icon-move {
                    cursor: move;
                    @include icon-bg('icon-move',  $iconWidth - 12px, $iconWidth  - 12px);
                }
                &.icon-resize {
                    cursor: se-resize;
                    @include icon-bg('icon-resize',  $iconWidth - 12px, $iconWidth  - 12px);
                }
            }

            &.left {
                left: toRem(-$iconWidth / 2);
            }
            &.top {
                top: toRem(-$iconHeight / 2);
            }
            &.right {
                right: toRem(-$iconWidth / 2);
            }
            &.bottom {
                bottom: toRem(-$iconHeight / 2);
            }
        }
    }

</style>