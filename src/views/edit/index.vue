<template>
    <div class="warpper">
        <edit-header :title="page.title"></edit-header>
        <div class="warpper-content">

            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="page in page.pages">
                        <div class="canvas template">
                            <template v-for="element in page.elements">
                                <fontComponent :element="element" v-if='element.type == "text"' :onEdit="onEdit"></fontComponent>
                                <picComponent :element="element" v-if='element.type == "pic"' :onEdit="onEdit"></picComponent>
                            </template>
                        </div>
                    </div>
                </div>
            </div>

            <div class="action-warpper">
                <div class="action">
                    <span class="text">保存页面</span>
                </div>
            </div>
        </div>
        <edit-footer></edit-footer>
    </div>
</template>

<script>
  import axios from 'axios'
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';

  import editHeader from '@/components/editHeader'
  import editFooter from '@/components/editFooter'
  import fontComponent from '@/components/fontComponent'
  import picComponent from '@/components/picComponent'

  export default {
    data() {
      return {
        page: {},
        canvasWidth: 298,
      }
    },
    methods: {
      initSwiper() {
        let _this = this
        _this.mySwiper = null
        _this.mySwiper = new Swiper('.swiper-container', {
          autoHeight: true,
          loop: true,
          spaceBetween: 20,
        })
      },
      onEdit() {
        this.$nextTick(() => {
          this.initSwiper();
        });
      },
    },
    watch: {
      themeId () {
        return this.$store.state.editor.editorTheme._id
      },
      editorPage () {
        return this.$store.state.editor.editorPage
      },
      element () {
        let ele = this.$store.state.editor.editorElement
        return ele || {}
      }
    },
    mounted() {
      axios.get('/v1/h5makes/64', {
        method: 'GET',
      }).then((res) => {
        this.page = res.data;

        this.$nextTick(() => {
          var swiper = new Swiper('.swiper-container', {
            preventClicksPropagation: false,
            preventClicks : false,//默认true
            loop: true,
            effect : 'cube',
          });
        });
      });
    },
    computed: {
      elements() {
        return this.$store.state.editor.editorPage.elements
      },
      editorPage() {
        return this.$store.state.editor.editorPage.elements
      }
    },
    components: {
      editHeader, editFooter, fontComponent, picComponent
    }
  }
</script>

<style lang="scss" scoped>
    @import '@/common/scss/common.scss';

    .warpper {
        width: toRem(750px);
        overflow: hidden;
        height: 100%;
        margin: 0 auto;
        background: #2f2e33;
        /*padding-bottom: toRem(132px);*/

        .warpper-content {
            width: 100%;
            /*padding-top: toRem(12px);*/
            height: auto;

            .canvas {
                width: toRem(586px);
                height: toRem(890px);
                margin: 0 auto;
                position: relative;
                background: #fff;
                border: 2px solid #373f42;
                box-shadow: 0 2px 30px 5px rgba(0,0,0,.2);

                &.template {
                    /*background: url("./img/template.jpeg");*/
                    background-size: toRem(586px) toRem(890px);
                    background-position: center;
                    background-repeat: no-repeat;
                }
            }

            .action-warpper {
                height: toRem(62px);
                margin: toRem(20px);

                .action {
                    width: toRem(330px);
                    height: toRem(62px);
                    line-height: toRem(62px);
                    margin: 0 auto;
                    text-align: center;
                    color: #fff;
                    border-radius: toRem(31px);
                    border: 1px solid #45454b;

                    .icon {
                        display: inline-block;
                        width: toRem(32px);
                        height: toRem(32px);
                        margin-left: toRem(8px);
                        vertical-align: middle;

                        &.icon-manage {
                            @include icon-bg('icon-manage', 32px, 32px);
                        }
                    }

                    .text {
                        font-size: toRem(24px);
                    }
                }
            }
        }
    }
</style>