<template>
  <div class="wishes-container">
    <div class="words">
    <p class="name ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s">刘心洁：</p>
    <p class="content first-line ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.6s">您好！</p>
    <p class="content first-line ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="2.5s" swiper-animate-delay="0.8s">感谢2020年的温暖陪伴，这一年刻骨铭心，疫情中的战斗、烈日中的冲锋、风雪中的坚守，每一位电信人都为创一流公司写下了浓墨重彩的一笔。</p>
    <p class="content first-line ani last" swiper-animate-effect="fadeInUp" swiper-animate-duration="2.5s" swiper-animate-delay="1.5s">这一年，我们一起干出了达州电信的新高度——全年收入目标圆满完成，收入能力增长全省第4；春、暑促综合排名位列全省前3；新大楼拔地而起；员工年收入创历史新高，工资总额、人工成本增幅双超收入增幅。</p>
    </div>
    <div class="open circle-btn ani infinite" swiper-animate-effect="poping" swiper-animate-duration="0.8s">开</div>
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
  padding-top: 70px;
  .words {
       padding: 0 32px;
    font-size: calc(22 / 375 * 100vw);
    font-weight: 500;
    color: #fff;
    text-align: justify;
    .first-line {
      text-indent: 2em;
    }
    .content {
      line-height: 2;
      font-size: calc(18 / 375 * 100vw);
      font-weight: 400;
    }
  }
  .open {
    margin-top: calc(56px + (100vw - 375px) * 0.7);
  }
}
</style>