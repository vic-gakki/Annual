<template>
  <div class="overview-container">
    <div class="header">
      <div class="circle-btn ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="0.8s" swiper-animate-delay="0s">总</div>
      <div class="circle-btn ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="0.8s" swiper-animate-delay=".5s">计</div>
    </div>
    <div class="content">
      <p class="overview-content ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="0.8s" swiper-animate-delay="1s">总收入：<span class="high-light">8.0</span> 万元</p>
      <p class="overview-content ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="0.8s" swiper-animate-delay="1.2s">工资类发放合计：<span class="high-light">5.27</span> 万元</p>
      <p class="overview-content ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="0.8s" swiper-animate-delay="1.4s">福利类发放合计：<span class="high-light">0.99</span> 万元</p>
      <p class="overview-content ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="0.8s" swiper-animate-delay="1.6s">单位缴纳保险合计：<span class="high-light">2.79</span> 万元</p>
    </div>
    <div class="detail-btn ani" swiper-animate-effect="swing" swiper-animate-duration="0.8s" swiper-animate-delay="2s">详情</div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.overview-container {
    height: 100%;
  width: 100%;
  background: url('../assets/image/detail-bg.jpg') center/cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    margin-top: 50px;
    display: flex;
    height: 100px;
    align-items: center;
    .circle-btn:first-child {
      margin-right: 24px;
    }
  }
  .content {
        padding-left: 40px;
    margin-top: 8px;
    font-size: 22px;
    font-weight: 600;
    line-height: 1.8;
    p {
      margin: 0;
    }
    .high-light {
      color: rgb(238, 185, 38);
    }
  }
  .detail-btn {
    font-size: 18px;
    background-color: red;
    border: 1px solid red;
    border-radius: 5px;
    padding: 8px 32px;
    color: rgb(238, 185, 38);
    display: inline-block;
    margin-top: 24px;
  }
}
</style>