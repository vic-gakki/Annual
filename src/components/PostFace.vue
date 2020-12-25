<template>
  <div class="post-face-container">
    <p class="post-face ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="2s" swiper-animate-delay="0.3s">2021年充满期待，春促胜利在望，发展再上台阶，收入冲刺十亿。当下正值春促决战，让我们以“不破楼兰终不还”的冲劲，以沉浸式的工作状态，积极投入到春促三高发展中去，奋战超越新征程，从此山高不阻志，涧深不断行，为2021年提前锁定胜局奠定坚实基础！为把达州公司建成一流公司而努力奋斗！</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.post-face-container {
  height: 100%;
  width: 100%;
  background: url('../assets/image/jiyu.png') center/cover;
  display: flex;
  align-items: center;
  .post-face {
    width: 100%;
       padding: 32px 32px 0;
    font-size: calc(22 / 375 * 100vw);
    font-weight: 500;
    color: #fff;
    text-align: justify;
    text-indent: 2em;
      line-height: 2;
  }
  .open {
    margin-top: calc(56px + (100vw - 375px) * 0.7);
  }
}
</style>