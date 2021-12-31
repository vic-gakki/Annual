<template>
  <div class="overview-outer-wrapper">
    <div class="overview-container">
      <div
        class="header ani"
        swiper-animate-effect="bounceInDown"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="0s"
      >
        收入类合计
      </div>
      <div class="content">
        <p
          class="overview-content ani"
          swiper-animate-effect="bounceInRight"
          swiper-animate-duration="0.8s"
          :swiper-animate-delay="0.8 + index * 0.4 + 's'"
          v-for="(item, index) of overview"
          :key="item.key"
        >
          {{ item.label }}：<span class="high-light">{{ item.value }}</span>
          万元
        </p>
        <div
          class="detail-btn ani"
          swiper-animate-effect="swing"
          swiper-animate-duration="1.5s"
          swiper-animate-delay="2.5s"
          @click="goNext"
        >
          <span>详</span>
          <span>情</span>
        </div>
        <page-btn
          class="pc-screen ani"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1s"
          swiper-animate-delay="2.5s"
        ></page-btn>
      </div>
    </div>
  </div>
</template>

<script>
import PageBtn from "./PageBtn.vue";

export default {
  name: "OverView",
  inject: ["goNext"],
  props: ["overview"],
  components: { PageBtn },
};
</script>

<style lang="less" scoped>
.overview-outer-wrapper {
  height: 100%;
  width: 100%;
  background: url("../assets/image/bonus-bg.jpg") center/cover;
  @media (min-width: 1024px) {
    .overview-container {
      width: 1000px;
      margin: 0 auto;
      .header {
        font-size: calc(28px + (100vw - 1024px) * 0.017);
        width: 600px;
      }
      .content {
        font-size: calc(22px + (100vw - 1024px) * 0.017);
        width: 600px;
        padding-bottom: 60px;
        .detail-btn {
          font-size: calc(22px + (100vw - 1024px) * 0.017);
          height: 60px;
          line-height: 60px;
          width: 300px;
          display: none;
        }
        .pc-screen {
          display: flex;
        }
      }
    }
  }
}
.overview-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(80px + (100vh - 568px) * 0.082);
  .header {
    text-align: center;
    margin: 0 auto;
    font-size: calc(20 / 320 * 100vw);
    padding: 8px 24px;
    font-weight: 600;
    letter-spacing: 0.2em;
    border-radius: 8px;
    background-color: rgb(238, 185, 38);
    color: #fff;
  }
  .content {
    flex: 1;
    font-size: calc(18 / 320 * 100vw);
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-bottom: calc(160px + (100vh - 568px) * 0.246);
    p {
      width: 100%;
    }
    .high-light {
      color: rgb(238, 185, 38);
    }
    .detail-btn {
      font-size: 18px;
      margin-top: 8px;
      background-color: red;
      border: 1px solid red;
      border-radius: 5px;
      display: inline-block;
      height: 40px;
      line-height: 40px;
      text-align: center;
      padding: 0 36px;
      cursor: pointer;
      span:first-child {
        margin-right: 16px;
      }
    }
    .pc-screen {
      display: none;
    }
  }
}
</style>
