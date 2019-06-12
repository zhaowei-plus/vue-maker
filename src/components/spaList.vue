<template>
    <div class="spa-list">
        <div class="empty">
            暂无作品
        </div>
    </div>
</template>

<script>
  export default {
    name: "spaList"
  }
</script>

<style lang="scss" scoped>
    .spa-list {
        .empty {
            width: 100%;
            height: 100%;
            bordor: 1px solid red;
            text-align: center;
            font-size: 32px;
        }
    }
</style>