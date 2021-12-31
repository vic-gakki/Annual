<template>
  <div class="ending">
    <page-btn
      :next="false"
      class="pc-screen ani"
      swiper-animate-effect="fadeInUp"
      swiper-animate-duration="1s"
      swiper-animate-delay="0s"
    ></page-btn>
  </div>
</template>

<script>
import PageBtn from "./PageBtn";
export default {
  name: "Ending",
  components: {
    PageBtn,
  },
};
</script>

<style lang="less" scoped>
.ending {
  height: 100%;
  width: 100%;
  background: url("../assets/image/end-bg.jpg") center/cover;
  display: flex;
  align-items: flex-end;
  padding-bottom: 100px;
  @media (min-width: 1024px) {
    .pc-screen {
      display: flex;
    }
  }
}
</style>