<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide><login></login></swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
  </swiper>
</template>

<script>
import * as swiperAnimated from "../assets/js/swiper.animate1.0.3.min";

import Login from "./Login";
export default {
  name: "Annual",
  components: { Login },
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
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false);
  }
};
</script>
<style lang="less"></style>
