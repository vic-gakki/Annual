<template>
  <div class="overview-container">
    <div class="header">
      <div
        class="circle-btn ani"
        swiper-animate-effect="bounceInDown"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="0s"
      >
        总
      </div>
      <div
        class="circle-btn ani"
        swiper-animate-effect="bounceInDown"
        swiper-animate-duration="0.8s"
        swiper-animate-delay=".5s"
      >
        计
      </div>
    </div>
    <div class="content">
      <p
        class="overview-content ani"
        swiper-animate-effect="bounceInRight"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="0.8s"
      >
        收入类合计：<span class="high-light">8.0</span> 万元
      </p>
      <p
        class="overview-content ani"
        swiper-animate-effect="bounceInRight"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="1.2s"
      >
        工资类发放合计：<span class="high-light">5.27</span> 万元
      </p>
      <p
        class="overview-content ani"
        swiper-animate-effect="bounceInRight"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="1.6s"
      >
        福利类发放合计：<span class="high-light">0.99</span> 万元
      </p>
      <p
        class="overview-content ani"
        swiper-animate-effect="bounceInRight"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="2s"
      >
        单位缴纳保险合计：<span class="high-light">2.79</span> 万元
      </p>
    </div>
    <div
      class="detail-btn ani"
      swiper-animate-effect="swing"
      swiper-animate-duration="1.5s"
      swiper-animate-delay="2.5s"
    >
      <span>详</span>
      <span>情</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.overview-container {
  height: 100%;
  width: 100%;
  background: url("../assets/image/detail-bg.jpg") center/cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  .header {
    width: 100%;
    margin-top: 50px;
    display: flex;
    padding: 8px 0;
    justify-content: space-around;
  }
  .content {
    width: 100%;
    font-size: calc(18 / 320 * 100vw);
    font-weight: 600;
    line-height: calc(36px + (100vh - 568px) * 0.139);
    .high-light {
      color: rgb(238, 185, 38);
    }
  }
  .detail-btn {
    font-size: 18px;
        margin-top: 8px;
    background-color: red;
    border: 1px solid red;
    border-radius: 5px;
    display: inline-block;
    height: 40px;
    display: flex;
    padding: 0 24px;
    align-items: center;
    span:first-child {
      margin-right: 16px;
    }
  }
}
</style>