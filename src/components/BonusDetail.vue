<template>
  <div class="bonus-outer-wrapper">
  <div class="bonus-container">
    <div class="title ani" swiper-animate-effect="bounceInDown" swiper-animate-duration="0.8s" swiper-animate-delay="0s">{{title}}</div>
    <div class="content">
      <p class="item ani" swiper-animate-effect="bounceInRight" swiper-animate-duration="0.8s" :swiper-animate-delay="(index + 1) * 0.5 + 's'" v-for="(item, index) of data" :key="item.label">{{item.label}}：<span class="high-light">{{item.value}}</span> {{index === data.length - 1 ? '万' : ''}}元</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    data: Array
  },
  // watch: {
  //   data: {
  //     immediate: true,
  //     handler(val){
  //     const total = val.reduce((acc, cur) => acc + +cur.value, 0) / 10000
  //     this.calcData = [...val, {label: '小计', value: total}]
  //   }
  //   }
  // },
  data(){
    return {
      // calcData: [...this.data]
    }
  }
}
</script>

<style lang="less" scoped>
.bonus-outer-wrapper {
   height: 100%;
  width: 100%;
  background: url('../assets/image/bonus-bg.jpg') center/cover;
  @media (min-width: 1024px) {
    .bonus-container {
      width: 1000px;
      margin: 0 auto;
      .title {
        font-size: calc(28px + (100vw - 1024px) * 0.017);
        width: 600px;
      }
      .content {
        width: 600px;
        font-size: calc(22px + (100vw - 1024px) * 0.017);
        margin:16px auto 60px auto;
        .item {
          padding-left: 0;
        }
      }
    }
  }
}
.bonus-container {
    height: 100%;
  width: 100%;
  padding-top: calc(80px + (100vh - 568px) * 0.082);
  display: flex;
  flex-direction: column;
  .title {
    text-align: center;
    margin: 0 auto;
    font-size: calc(20 / 320 * 100vw);
    padding: 8px 24px;
    font-weight: 600;
    letter-spacing: .1em;
    border-radius: 8px;
    background-color: rgb(238, 185, 38);
    color: #fff;
  }
  .content {
    flex: 1;
    margin: 16px 0 calc(165px + (100vh - 568px) * 0.266) 0;
    font-size: calc(20 / 320 * 100vw);
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .item {
      margin: 0;
      padding-left: 50px;
      .high-light {
      color: rgb(238, 185, 38);
    }
    }
  }
}
</style>