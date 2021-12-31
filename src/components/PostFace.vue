<template>
  <div class="post-face-outer-wrapper">
    <div class="post-face-container">
      <p
        class="post-face ani"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="2s"
        swiper-animate-delay="0.3s"
      >
        2021年充满期待，春促胜利在望，发展再上台阶，收入冲刺十亿。当下正值春促决战，让我们以“不破楼兰终不还”的冲劲，以沉浸式的工作状态，积极投入到春促三高发展中去，奋战超越新征程，从此山高不阻志，涧深不断行，为2021年提前锁定胜局奠定坚实基础！为把达州公司建成一流公司而努力奋斗！
      </p>
      <page-btn
        class="pc-screen ani"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="1s"
        swiper-animate-delay="2s"
      ></page-btn>
    </div>
  </div>
</template>

<script>
import PageBtn from "./PageBtn";
export default {
  name: "PostFace",
  components: {
    PageBtn,
  },
};
</script>

<style lang="less" scoped>
.post-face-outer-wrapper {
  height: 100%;
  width: 100%;
  background: url("../assets/image/jiyu.jpg") center/cover;
  @media (min-width: 1024px) {
    .post-face-container {
      width: 1000px;
      margin: 0 auto;
      .post-face {
        font-size: calc(24px + (100vw - 1024px) * 0.017);
        line-height: 80px;
      }
      .pc-screen {
        display: flex;
      }
    }
  }
}
.post-face-container {
  height: 100%;
  width: 100%;
  .post-face {
    padding: calc(115px + (100vh - 568px) * 0.164) 32px 0;
    line-height: calc(28px + (100vh - 568px) * 0.0655);
    font-size: calc(18 / 375 * 100vw);
    font-weight: 500;
    color: #fff;
    text-align: justify;
    text-indent: 2em;
  }
  .open {
    margin-top: calc(56px + (100vw - 375px) * 0.7);
  }
}
</style>
