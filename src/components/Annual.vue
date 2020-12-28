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
    <div class="fixed-right-container" v-show="curIndex !== 6 && curIndex !== 0">
      <img src="../assets/image/arrow.png" alt="" />
    </div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide><login @next="goNext"></login></swiper-slide>
      <swiper-slide><wishes :name="name"></wishes></swiper-slide>
      <swiper-slide><over-view :overview="overview"></over-view></swiper-slide>
      <swiper-slide
        ><bonus-detail title="福利类发放详情" :data="bonus"></bonus-detail
      ></swiper-slide>
      <swiper-slide
        ><bonus-detail title="单位缴纳保险详情" :data="insurance"></bonus-detail
      ></swiper-slide>
      <swiper-slide><post-face></post-face></swiper-slide>
      <swiper-slide><ending></ending></swiper-slide>
    </swiper>
    <audio src="../assets/media/bg-music.mp3" ref="bgMusic" loop></audio>
  </div>
</template>

<script>
import * as swiperAnimated from "../assets/js/swiper.animate1.0.3.min";
import BonusDetail from "./BonusDetail.vue";
import Ending from "./Ending.vue";

import Login from "./Login";
import OverView from "./OverView.vue";
import Wishes from "./Wishes";
import PostFace from "./PostFace";
const overview = [
  { key: "sum_1", label: "总收入", value: 0 },
  { key: "sum_2", label: "工资类发放合计", value: 0 },
  { key: "sum_3", label: "福利类发放合计", value: 0 },
  { key: "sum_4", label: "单位缴纳保险合计", value: 0 },
];
const bonus = [
  { key: "sum_3_1", label: "防暑及取暖费", value: 0 },
  { key: "sum_3_2", label: "疗休费", value: 0 },
  { key: "sum_3_3", label: "体检费", value: 0 },
  { key: "sum_3_4", label: "伙食及驻地补贴", value: 0 },
  { key: "sum_3_5", label: "补充门诊补贴", value: 0 },
  { key: "sum_3_6", label: "其他福利费", value: 0 },
  { key: "sum_3", label: "小计", value: 0 },
];
const insurance = [
  { key: "sum_4_1", label: "住房公积金", value: 0 },
  { key: "sum_4_2", label: "基本养老保险", value: 0 },
  { key: "sum_4_3", label: "基本医疗保险", value: 0 },
  { key: "sum_4_4", label: "企业年金", value: 0 },
  { key: "sum_4_5", label: "其他费用", value: 0 },
  { key: "sum_4", label: "小计", value: 0 },
];
export default {
  name: "Annual",
  components: { Login, Wishes, OverView, BonusDetail, PostFace, Ending },
  provide() {
    return {
      goNext: () => {
        this.swiper.slideNext();
      },
    };
  },
  data() {
    return {
      swiperOptions: {
        autoplay: false, // 是否自动播放
        height: window.innerHeight, // 高
        width: window.innerWidth, //宽
        allowTouchMove: false,
        on: {
          init: function () {
            swiperAnimated.swiperAnimateCache(this); //隐藏动画元素
            swiperAnimated.swiperAnimate(this); //初始化完成开始动画
          },
          slideChangeTransitionEnd: function () {
            swiperAnimated.swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          },

          slideChange: (swiper) => {
            this.curIndex = swiper.activeIndex;
            if (swiper.activeIndex === 1) {
              swiper.allowSlidePrev = false;
            } else if (swiper.activeIndex === 6) {
              swiper.allowSlideNext = false;
            } else {
              swiper.allowSlideNext = true;
              swiper.allowSlidePrev = true;
            }
          },
        },
      },
      bonus,
      insurance,
      overview,
      isPaused: true,
      curIndex: 0,
      name: "",

    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    goNext(data) {
      this.processData(data)
      this.swiper.allowTouchMove = true;
      this.swiper.slideNext();
    },
    togglePlayState() {
      this.isPaused = !this.isPaused;
      if (!this.isPaused) {
        this.$refs.bgMusic.play();
      } else {
        this.$refs.bgMusic.pause();
      }
    },
    processData(data){
      this.name = data.p_1
      this.bonus.forEach(item => {
        item.value = data[item.key] || 0
      })
      this.insurance.forEach(item => {
        item.value = data[item.key] || 0
      })
      this.overview.forEach(item => {
        item.value = data[item.key] || 0
      })
    }
  },
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
      align-items: flex-end;
      .logo {
        width: calc(80px + (100vh - 568px) * 0.082);
        height: calc(80px + (100vh - 568px) * 0.082);
        background: url("../assets/image/telecom-bg1.png") center/cover no-repeat;
      }
      .music-bg {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-image: url("../assets/image/bg-music.svg");
        background-size: contain;
        background-repeat: no-repeat;
        animation: running 1.2s linear infinite;
        margin-right: 16px;

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
