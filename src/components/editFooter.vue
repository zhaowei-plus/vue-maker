<template>
    <div class="footer">
        <ul class="tabs">
            <li class="tab-item">
                <b class="icon icon-single-page"></b>
                <span class="text">+页面</span>
            </li>
            <li class="tab-item" @click="addTextElement('plain')">
                <b class="icon icon-text"></b>
                <span class="text">+文字</span>
            </li>
            <li class="tab-item">
                <label class="icon icon-picture">
                    <input class="input" type="file" @change="fileChange">
                </label>
                <span class="text">+图片</span>
            </li>
            <li class="tab-item">
                <b class="icon icon-effects" @click="onCreateEffects"></b>
                <span class="text">+媒体</span>
            </li>
        </ul>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "editFooter",
    methods: {
      addTextElement (type) {
        let param = {}
        param['type'] = 'text'
        param['text'] = '请输入文本'
        param['width'] = this.canvasWidth
        param['lineHeight'] = 1.5
        switch (type) {
          case 'plain':
            break
          case 'title':
            param['fontSize'] = 32
            param['fontWeight'] = 'bold'
            param['textAlign'] = 'center'
            break
          default:
        }
        this.$store.dispatch('addElement', param)
      },

      addPicElement (ele) {
        let obj = {}
        obj.type = 'pic'
        obj.top = 0
        obj.left = 0
        obj.width = ele.width
        obj.height = ele.height
        obj.imgSrc = ele.filePath
        obj.loop = ele.loop

        console.log('obj:', obj);

        this.$store.dispatch('addElement', obj)
        // } else {
        //   this.$store.dispatch('addElement', this.element)
        // }
        this.element.type = 'pic'
      },

      fileChange (event) {
        let file = event.target.files[0]

        if (file) {
          const formData = new window.FormData()
          formData.append('image', file)
          formData.append('themeId', '37')
          formData.append('fileType', 'ipic')

          var fr = new window.FileReader()
          fr.readAsDataURL(file)
          fr.onload = (e) => {
            var img = new window.Image()
            img.src = fr.result
            img.onload = () => {
              formData.append('width', img.width)
              formData.append('height', img.height)

              axios({
                method: 'post',
                url: '/v1/upload',
                params: {
                  ...formData,
                }
              }).then((res)=>{
                console.log('res:', res);

                this.$emit('uploaded', {
                  filePath: res.filePath,
                  width: img.width,
                  height: img.height
                })
              });
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '@/common/scss/common.scss';
    .footer {
        width: toRem(750px);
        height: toRem(126px);
        position: fixed;
        margin: 0 auto;
        background: #202020;
        bottom: 0;

        .tabs {
            display: flex;
            .tab-item {
                flex: 1;
                width: 25%;
                height: toRem(126px);
                text-align: center;
                margin: 0;

                .icon {
                    display: block;
                    width: toRem(34px);
                    height: toRem(34px);
                    margin: toRem(24px) auto toRem(18px) auto;

                    &.icon-single-page {
                        @include icon-bg('icon-single-page', 34px, 34px);
                    }
                    &.icon-text {
                        @include icon-bg('icon-text', 34px, 34px);
                    }
                    &.icon-picture {
                        @include icon-bg('icon-picture', 34px, 34px);
                    }
                    &.icon-effects {
                        @include icon-bg('icon-effects', 34px, 34px);
                    }
                }
                .text {
                    width: 100%;
                    height: toRem(24px);
                    line-height: toRem(24px);
                    font-size: toRem(24px);
                    color: #b1b0ba;

                }

                .input {
                    display: none;
                }
            }
        }
    }
</style>