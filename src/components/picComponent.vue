<template>
    <div v-drag class="operation-warpper"
         :style="{left: element.left+'px', top: element.top+'px', width: element.width+'px', height: element.height+'px'}">
        <img :src="element.imgSrc">
        <div class="opertion right top" rel="delete">
            <span class="icon icon-delete"></span>
        </div>
        <div class="opertion right bottom" rel="resize" v-resize>
            <span class="icon icon-resize"></span>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      element: {
        type: Object,
      },
    },
    computed: {
      bg() {
        return {
          left: this.element.left + 'px',
          top: this.element.top + 'px',
          width: this.element.height + 'px',
          height: this.element.height + 'px',
          backgroundImage: "url(" + required("./img/default.png") + ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: this.element.width/2+'px' + ' ' + this.element.height/2+'px',
        }
      },
    },
    methids: {
    },
    directives: {
      // 左上角图标移动指令
      iconDrag: function(el, bindings) {
        // pc端
        el.onmousedown = function(e){
          const orgX = e.clientX;
          const orgY = e.clientY;
          const pl = parseInt(el.parentNode.style.left);
          const pt = parseInt(el.parentNode.style.top);

          document.onmousemove = function (e){
            // 当前位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - orgX;
            let top = e.clientY - orgY;
            el.parentNode.style.left = pl + left + 'px';
            el.parentNode.style.top = pt + top + 'px';
          }
          document.onmouseup = function(){
            document.onmousemove = document.onmouseup = null;
          }
        }

        // 移动端端
        el.ontouchstart = function(event){
          let touch;
          if(event.touches){
            touch = event.touches[0];
          }else {
            touch = event;
          }

          var orgX = touch.clientX;
          var orgY = touch.clientY;
          const pl = parseInt(el.parentNode.style.left);
          const pt = parseInt(el.parentNode.style.top);

          document.ontouchmove = function (event){
            let newTtouch;
            if(event.touches){
              newTtouch = event.touches[0];
            }else {
              newTtouch = event;
            }

            // 当前位置减去鼠标相对元素的位置，得到元素的位置
            let left = newTtouch.clientX - orgX;
            let top = newTtouch.clientY - orgY;

            el.parentNode.style.left = pl + left + 'px';
            el.parentNode.style.top = pt + top + 'px';
          }
          document.ontouchend = function(){
            document.ontouchmove = document.ontouchend = null;
          }
        }
      },
      // 移动指令
      drag: function(el, bingings) {
        // pc端
        el.onmousedown = function(e){
          const orgX = e.clientX;
          const orgY = e.clientY;
          const pl = parseInt(el.style.left);
          const pt = parseInt(el.style.top);

          document.onmousemove = function (e){
            // 当前位置减去鼠标相对元素的位置，得到元素的位置
            let left = e.clientX - orgX;
            let top = e.clientY - orgY;
            el.style.left = pl + left + 'px';
            el.style.top = pt + top + 'px';
          }
          document.onmouseup = function(){
            document.onmousemove = document.onmouseup = null;
          }
        }

        // 移动端端
        el.ontouchstart = function(event){
          let touch;
          if(event.touches){
            touch = event.touches[0];
          }else {
            touch = event;
          }

          var orgX = touch.clientX;
          var orgY = touch.clientY;
          const pl = parseInt(el.style.left);
          const pt = parseInt(el.style.top);

          document.ontouchmove = function (event){
            let newTtouch;
            if(event.touches){
              newTtouch = event.touches[0];
            }else {
              newTtouch = event;
            }

            // 当前位置减去鼠标相对元素的位置，得到元素的位置
            let left = newTtouch.clientX - orgX;
            let top = newTtouch.clientY - orgY;

            el.style.left = pl + left + 'px';
            el.style.top = pt + top + 'px';
          }
          document.ontouchend = function(){
            document.ontouchmove = document.ontouchend = null;
          }
        }
      },

      // 右下角缩放图标指令
      resize: function(el, bindings) {
        el.onmousedown = function(e){
          const x = e.clientX ;
          const y = e.clientY;
          let pW = parseInt(el.parentNode.style.width);
          let pH = parseInt(el.parentNode.style.height);
          e.stopPropagation()

          document.onmousemove = function (e){
            let left = e.clientX - x;
            let top = e.clientY - y;

            el.parentNode.style.width = pW + left + 'px';
            el.parentNode.style.height = pH + top + 'px';

            e.stopPropagation()
          }
          document.onmouseup = function(){
            document.onmousemove = document.onmouseup = null;
          }
        }

        el.ontouchstart = function(event){
          console.log('resize ontouchstart')

          let touch;
          if(event.touches){
            touch = event.touches[0];
          }else {
            touch = event;
          }

          const x = touch.clientX ;
          const y = touch.clientY;
          let pW = parseFloat(el.parentNode.style.width);
          let pH = parseFloat(el.parentNode.style.height);


          event.stopPropagation();

          document.ontouchmove = function (event){
            let touch;
            if(event.touches){
              touch = event.touches[0];
            }else {
              touch = event;
            }

            let left = touch.clientX - x;
            let top = touch.clientY - y;

            el.parentNode.style.width = pW + left + 'px';
            el.parentNode.style.height = pH + top + 'px';
            event.stopPropagation();
          }
          document.ontouchend = function(){
            document.ontouchmove = document.ontouchend = null;
          }
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
    @import '@/common/scss/common.scss';
    @import '@/common/scss/operation.scss';

    .operation-warpper {
        background: url("./img/default.png");

        img {
            width: 100%;
            height: 100%;
        }
    }
</style>