<template>
  <div class="wishes-container">
    <div class="words">
    <p class="name">刘心洁：</p>
    <p class="content">感谢您一年以来的无私奉奉献，辛勤劳动，让我们携起起手来，在以后的日子里，共创辉煌！</p>
    </div>
    <div class="open circle-btn">开</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.wishes-container {
  height: 100%;
  width: 100%;
  background: url('../assets/image/jiyu.png') center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  .words {
    width: 300px;
    margin: 0 auto;
    font-size: 22px;
    font-weight: 600;
    p {
      margin: 0;
      letter-spacing: .3em
    }
    .content {
      text-indent: 2em;
    }
  }
  .open {
    margin-top: 36px;
  }

}
</style>