<template>
  <div class="wishes-container">
    <div class="words">
    <p class="name ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.8s" swiper-animate-delay="0.3s">刘心洁：</p>
    <p class="content first ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0.6s">感谢您一年以来的无</p>
    <p class="content ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0.8s">私奉奉献，辛勤劳动，让</p>
    <p class="content ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="1.0s">我们携起起手来，在以后</p>
    <p class="content ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="1.2s">的日子里，共创辉煌！</p>
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
    color: #fff;
    text-align: justify;
    p {
      margin: 0;
      letter-spacing: .2em
    }
    .first {
      text-indent: 2em;
    }
    .content {
      line-height: 2;
      overflow: hidden;
    }
  }
  .open {
    margin-top: 56px;
    animation: poping .8s infinite;
  }
}
@keyframes poping {
  0% {
    transform: scale(.9);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(.9);
  }
}
</style>