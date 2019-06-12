<template>
    <div class="warpper">
        <edit-header></edit-header>
        <div class="warpper-content">
            content
        </div>
        <edit-footer></edit-footer>
    </div>
</template>

<script>
  import editHeader from '@/components/editHeader'
  import editFooter from '@/components/editFooter'

  export default {
    components: {
      editHeader, editFooter,
    }
  }
</script>

<style lang="scss" scoped>
    @import '@/common/scss/common.scss';

    .warpper {
        width: 100%;
        height: 100%;
        border: 1px solid red;
        background: #2f2e33;
    }
</style>