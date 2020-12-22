<template>
  <div class="annual-container">
  <div class="fixed-container">
    <div class="logo"></div>
    <div class="music-bg"></div>
  </div>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide><login @next="goNext"></login></swiper-slide>
    <swiper-slide><wishes></wishes></swiper-slide>
    <swiper-slide><over-view></over-view></swiper-slide>
    <swiper-slide><bonus-detail title="福利类发放详情" :data="bonus"></bonus-detail></swiper-slide>
    <swiper-slide><bonus-detail title="单位缴纳保险详情" :data="insurance"></bonus-detail></swiper-slide>
    <swiper-slide><ending></ending></swiper-slide>
  </swiper>
  </div>
</template>

<script>
import * as swiperAnimated from "../assets/js/swiper.animate1.0.3.min";
import BonusDetail from './BonusDetail.vue';
import Ending from './Ending.vue';

import Login from "./Login";
import OverView from './OverView.vue';
import Wishes from './Wishes'
const bonus = [
      {label: '防暑及取暖费', value: 111},
      {label: '疗休费', value: 222},
      {label: '体检费', value: 333},
      {label: '伙食及驻地补贴', value: 444},
      {label: '补充门诊补贴', value: 555},
      {label: '其他福利费', value: 666},
    ]
const insurance = [
      {label: '住房公积金', value: 621},
      {label: '基本养老保险', value: 1298},
      {label: '基本医疗保险', value: 1378},
      {label: '企业年金', value: 1837},
      {label: '其他费用', value: 1368},
    ]
export default {
  name: "Annual",
  components: { Login, Wishes, OverView, BonusDetail, Ending },
  data() {
    return {
      swiperOptions: {
        autoplay: false, // 是否自动播放
        height: window.innerHeight, // 高
        width: window.innerWidth, //宽
        on: {
          init: function() {
            swiperAnimated.swiperAnimateCache(this); //隐藏动画元素
            swiperAnimated.swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function() {
            swiperAnimated.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          }
        }
      },
      bonus,
      insurance,
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    goNext(){
      this.swiper.slideNext()
    }
  }
};
</script>
<style lang="less" scoped>
.annual-container {

  height: 100%;
  .fixed-container {
    position: fixed;
    width: 100%;
    z-index: 2;
    .logo {
      width: 50px;
      height: 64px;
      position: absolute;
      left: 0;
      background: url('../assets/image/telecom.webp') center/cover no-repeat;
    }
    .music-bg {
          width: 30px;
          position: absolute;
     right: 16px;
    top: 16px;
    height: 30px; 
    border-radius: 15px;
    background-image: url("../assets/image/bg-music.svg");
    background-size: contain;
    background-repeat: no-repeat;
    animation: running 1.2s linear infinite;
    }
  }
}
@keyframes running {
  0% {
    transform: rotate(0deg);
}

100% {
    transform: rotate(1turn);
}
}

</style>
