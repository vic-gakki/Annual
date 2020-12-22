<template>
  <div class="bonus-container">
    <div class="title">{{title}}</div>
    <div class="content">
      <p class="item" v-for="item of data" :key="item.label">{{item.label}}：<span class="high-light">{{item.value}}</span> 万元</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    data: Array
  }
}
</script>

<style lang="less" scoped>
.bonus-container {
    height: 100%;
  width: 100%;
  background: url('../assets/image/bonus-bg.jpg') center/cover;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  .title {
    height: 50px;
    line-height: 50px;
    text-align: center;
    width: 280px;
    margin: 0 auto;
    font-size: 22px;
    border-radius: 8px;
    background-color: rgb(238, 185, 38);
    color: red;
  }
  .content {
    margin-top: 24px;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.8;
    .item {
      margin: 0;
      padding-left: 50px;
      .high-light {
      color: rgb(238, 185, 38);
    }
    }
  }
}
</style>