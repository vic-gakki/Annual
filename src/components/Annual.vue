<template>
  <div class="annual-container">
    <div class="fixed-header-container">
      <p class="privacy">企业机密，仅供个人查询</p>
      <div class="logo-music">
        <div class="logo"></div>
        <div
          :class="['music-bg', { 'pause-music': isPaused }]"
          @click="togglePlayState"
        ></div>
      </div>
    </div>
    <div class="fixed-right-container">
      <img src="../assets/image/arrow.png" alt="" />
    </div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <!--      <swiper-slide><login @next="goNext"></login></swiper-slide>-->
      <!--      <swiper-slide><wishes></wishes></swiper-slide>-->
      <swiper-slide><over-view></over-view></swiper-slide>
      <swiper-slide
        ><bonus-detail title="福利类发放详情" :data="bonus"></bonus-detail
      ></swiper-slide>
      <swiper-slide
        ><bonus-detail title="单位缴纳保险详情" :data="insurance"></bonus-detail
      ></swiper-slide>
      <swiper-slide><post-face></post-face></swiper-slide>
      <swiper-slide><ending></ending></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import * as swiperAnimated from "../assets/js/swiper.animate1.0.3.min";
import BonusDetail from "./BonusDetail.vue";
import Ending from "./Ending.vue";

// import Login from "./Login";
import OverView from "./OverView.vue";
// import Wishes from "./Wishes";
import PostFace from "./PostFace";
const bonus = [
  { label: "防暑及取暖费", value: 111 },
  { label: "疗休费", value: 222 },
  { label: "体检费", value: 333 },
  { label: "伙食及驻地补贴", value: 444 },
  { label: "补充门诊补贴", value: 555 },
  { label: "其他福利费", value: 666 }
];
const insurance = [
  { label: "住房公积金", value: 621 },
  { label: "基本养老保险", value: 1298 },
  { label: "基本医疗保险", value: 1378 },
  { label: "企业年金", value: 1837 },
  { label: "其他费用", value: 1368 }
];
export default {
  name: "Annual",
  components: { OverView, BonusDetail, PostFace, Ending },
  data() {
    return {
      swiperOptions: {
        autoplay: false, // 是否自动播放
        height: window.innerHeight, // 高
        width: window.innerWidth, //宽
        // allowTouchMove: false,
        on: {
          init: function() {
            swiperAnimated.swiperAnimateCache(this); //隐藏动画元素
            swiperAnimated.swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function() {
            swiperAnimated.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          },

          slideChange(swiper) {
            if (swiper.activeIndex === 1) {
              swiper.allowSlidePrev = false;
            } else if (swiper.activeIndex === 6) {
              swiper.allowSlideNext = false;
            } else {
              swiper.allowSlideNext = true;
              swiper.allowSlidePrev = true;
            }
          }
        }
      },
      bonus,
      insurance,
      isPaused: false
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  methods: {
    goNext() {
      this.swiper.slideNext();
      this.swiper.allowTouchMove = true;
    },
    togglePlayState() {
      this.isPaused = !this.isPaused;
      if (this.isPaused) {
        // pause music
      } else {
        // play music
      }
    }
  }
};
</script>
<style lang="less" scoped>
.annual-container {
  height: 100%;
  .fixed-header-container {
    position: absolute;
    width: 100%;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    .privacy {
      padding: 5px 8px;
      font-size: 12px;
    }
    .logo-music {
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo {
        width: 50px;
        height: 64px;
        background: url("../assets/image/telecom.webp") center/cover no-repeat;
      }
      .music-bg {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-image: url("../assets/image/bg-music.svg");
        background-size: contain;
        background-repeat: no-repeat;
        animation: running 1.2s linear infinite;

        &.pause-music {
          animation-play-state: paused;
          &:before {
            content: "";
            display: block;
            height: 1px;
            background-color: #fff;
            position: absolute;
            top: 50%;
            width: 100%;
          }
        }
      }
    }
  }
  .fixed-right-container {
    position: absolute;
    right: 10px;
    height: 30px;
    width: 25px;
    top: 50%;
    margin-top: -15px;
    z-index: 2;
    animation: pointing 1s infinite;
    img {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
      object-fit: cover;
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
@keyframes pointing {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-10px);
  }
}
</style>
