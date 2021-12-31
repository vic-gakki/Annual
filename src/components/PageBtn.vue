<template>
  <div class="page-btn-container">
    <div class="prev-btn pagi" @click="goPrev" v-show="prev">上一页</div>
    <div class="next-btn pagi" @click="goNext" v-show="next">下一页</div>
  </div>
</template>

<script>
export default {
  name: "PageBtn",
  inject: ["goPrev", "goNext"],
  props: {
    prev: {
      type: Boolean,
      default: true,
    },
    next: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped lang="less">
.page-btn-container {
  width: 100%;
  display: none;
  justify-content: space-around;
  cursor: pointer;
  .pagi {
    padding: 8px 32px;
    // background-color: #eeb926;
    background-color: red;
    border-radius: 5px;
    font-size: calc(20px + (100vw - 1024px) * 0.017);
  }
}
</style>