<template>
  <div class="outer-wrapper">
  <div class="wishes-container">
    <div class="words">
      <p
        class="name ani"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="0.3s"
      >
        {{ name }}：
      </p>
      <p
        class="content first-line ani"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="0.6s"
      >
        您好！
      </p>
      <p
        class="content first-line ani"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="2.5s"
        swiper-animate-delay="0.8s"
      >
        感谢2020年的温暖陪伴，这一年刻骨铭心，疫情中的战斗、烈日中的冲锋、风雪中的坚守，每一位电信人都为创一流公司写下了浓墨重彩的一笔。
      </p>
      <p
        class="content first-line ani last"
        swiper-animate-effect="fadeInUp"
        swiper-animate-duration="2.5s"
        swiper-animate-delay="1.5s"
      >
        这一年，我们一起干出了达州电信的新高度——全年收入目标圆满完成，收入能力增长全省第4；春、暑促综合排名位列全省前3；新大楼拔地而起；员工年收入创历史新高，人工成本实现两位数增长。
      </p>
    </div>
    <div
      class="open circle-btn ani infinite"
      swiper-animate-effect="poping"
      swiper-animate-duration="0.8s"
      @click="goNext"
    >
      开
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Wishes",
  inject: ["goNext"],
  props: ["name"]
};
</script>

<style lang="less" scoped>
.outer-wrapper {
  height: 100%;
  width: 100%;
  background: url("../assets/image/jiyu.jpg") center/cover;
   @media (min-width: 1024px) {
    .wishes-container {
      width: 1000px;
      margin: 0 auto;
      .words {
        font-size: calc(22px + (100vw - 1024px) * 0.017);
        .content {
          font-size: calc(16px + (100vw - 1024px) * 0.017);
          line-height: 70px;
        }
      }
      .open {
        margin-top: 60px;
      }
    }
  }
}
.wishes-container {
   height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(80px + (100vh - 568px) * 0.082);
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
      line-height: calc(24px + (100vh - 568px) * 0.0655);
      font-size: calc(18 / 375 * 100vw);
      font-weight: 400;
    }
  }
  .open {
    margin-top: calc(56px + (100vw - 375px) * 0.7);
  }
}
</style>
