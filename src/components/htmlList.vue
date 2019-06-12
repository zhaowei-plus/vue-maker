<template>
    <div class="html-list">
        <list-swipe></list-swipe>
        <cell></cell>
        <div class="content">
            <div class="item">
                <div class="create">
                    <div class="create-icon" @click="onAdd">
                        <span class="icon iconfont icon-tianjiaqunzu"></span>
                    </div>
                    <span class="text">创建模板</span>
                </div>
            </div>

            <div class="item" @click="onSelect(index)" v-for="(item, index) in items">
                <div class="template">
                    <!--<img :src="item.imgSrc">-->
                    <!--<span>{{item.title}}</span>-->
                    <!--<span>{{item.desc}}</span>-->
                </div>

                <!--<div class="operation" v-if="currentIndex == index" >-->
                    <!--<div class="action">-->
                        <!--<i class="icon iconfont h5-icon-pencil" @click="onEdit(index)"></i>-->
                        <!--<i class="icon iconfont h5-shanchu" @click="onDelete(index, $event)"></i>-->
                    <!--</div>-->

                    <!--<span class="preview" @click="onPreview(index)">预览</span>-->
                <!--</div>-->
            </div>
        </div>

    </div>
</template>

<script>
  import listSwipe from '@/components/listSwipe'
  import cell from '@/components/cell'
  export default {
    name: "htmlList",
    data() {
      return {
        currentIndex: -1,
        items: [{
          imgSrc: require("./img/template.png"),
          title: '免费版复古邀请函',
          desc: '这是一个模版',
        }, {
          imgSrc: require("./img/template.png"),
          title: '免费版复古邀请函',
          desc: '这是一个模版',
        },  {
          imgSrc: require("./img/template.png"),
          title: '免费版复古邀请函',
          desc: '这是一个模版',
        },  {
          imgSrc: require("./img/template.png"),
          title: '免费版复古邀请函',
          desc: '这是一个模版',
        }]
      }
    },
    methods: {
      onAdd() {
        this.items.unshift({
          imgSrc: require("./img/default.png"),
          title: '',
          desc: '',
        })
      },
      onSelect(index) {
        this.currentIndex = index;
      },
      onDelete(index, event) {
        this.items.splice(index, 1);
        this.currentIndex = -1;
        event.stopPropagation();
      },
      onEdit(index) {
        Toast({
          message: '暂未开放模板编辑功能',
          iconClass: 'icon error iconfont h5-cuowu ',
        });
      },
      onPreview(index) {
        Toast({
          message: '暂未开放模板预览功能',
          iconClass: 'icon error iconfont h5-cuowu ',
        });
      }
    },
    components: {
      listSwipe,cell
    }
  }
</script>

<style lang="scss" scoped>
    @import "@/common/scss/common.scss";

    .html-list {
        width: 100%;
        min-height: pxTorem(446px);
        height: auto;

        .content {
            display: flex;
            flex-wrap: wrap;
        }

        .item {
            width: pxTorem(212px);
            height: pxTorem(424px);

            margin: 0 pxTorem(14px) pxTorem(30px) pxTorem(14px);
            padding-bottom: pxTorem(8px);
            /*position: relative;*/
            border:1px solid #f0f0f0;

            .operation {
                position: absolute;
                top:0;
                left: 0;
                z-index: 9;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,.3);
                text-align: center;
                color: #fff;

                .action {
                    position: absolute;
                    top: 2px;
                    right: 2px;

                    .iconfont {
                        font-size: 18px;
                    }
                }

                .preview {
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -25%);
                    width: 60px;
                    font-size: 14px;
                    border-radius: 4px;
                    line-height: 32px;
                    border: 1px solid #fff;
                    margin: 0 auto;
                    vertical-align: middle;
                }
            }

            .template,
            .create {
                width: pxTorem(212px);
                height: 100%;
                border-radius: 4px;
                margin: 0;
                padding: 0;
                overflow: hidden;
            }

            .template {
                img {
                    /*width: 100%;*/
                    /*height: pxTorem(324px);*/
                    /*border-radius: 4px;*/
                }
                span {
                    width: 100%;
                    height: pxTorem(48px);
                    line-height: pxTorem(48px);
                    font-size: pxTorem(26px);
                    color: #161616;
                    padding: 0 pxTorem(4px);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }

            .create {
                .create-icon {
                    display: block;
                    margin-top: pxTorem(160px);
                    margin-left: pxTorem(72px);
                    color: rgba(0, 0,0, .5);

                    .icon {
                        font-size: pxTorem(48px);
                    }
                }

                .text {
                    display: block;
                    width: 100%;
                    height: pxTorem(100px);
                    line-height: pxTorem(100px);
                    text-align: center;
                    font-size: pxTorem(32px);
                }
            }
        }
    }
</style>