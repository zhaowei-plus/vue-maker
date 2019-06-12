<template>
    <div class="list">
        <list-header></list-header>

        <router-view></router-view>

        <list-footer></list-footer>
    </div>
</template>

<script>
  import listHeader from '@/components/listHeader'
  import listFooter from '@/components/listFooter'

  import htmlList from '@/components/htmLlist'

  export default {
    data() {
      return {
        selected: 1,
        currentIndex: -1,
      }
    },

    created(){
      // this.items.length = 1;
    },
    methods: {

    },
    components: {
      listHeader,listFooter,htmlList
    }
  }
</script>

<style lang="scss" scoped>
    @import "@/common/scss/common.scss";
    .list {
       width: 100%;
        position: relative;
    }

</style>