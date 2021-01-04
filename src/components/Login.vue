<template>
  <div class="login-container">
    <div>
      <img src="../assets/image/bill-bg.png" alt="" class="bill-img" />
      <div class="wrapper">
        <a-input
          placeholder="请输入手机号"
          class="ani"
          swiper-animate-effect="lightSpeedIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
          v-model="account"
        ></a-input>
        <a-input
          placeholder="请输入身份证后六位"
          class="ani"
          swiper-animate-effect="lightSpeedIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.7s"
          v-model="password"
          @keyup.enter="handleClick"
        ></a-input>
        <div
        @click="handleClick"
        class="check ani"
        swiper-animate-effect="swing"
        swiper-animate-duration="1s"
        swiper-animate-delay="1.6s"
      >
        查看我的年度账单
      </div>
      <img class="company-bg ani" swiper-animate-effect="fadeInUp"
        swiper-animate-duration=".5s"
        swiper-animate-delay="2s" src="../assets/image/dazhou.png"/>
      </div>
    </div>
    <!-- <div>
      <div
        @click="handleClick"
        class="check ani"
        swiper-animate-effect="swing"
        swiper-animate-duration="1s"
        swiper-animate-delay="1.6s"
      >
        查看我的年度账单
      </div>
      <img class="company-bg ani" swiper-animate-effect="fadeInUp"
        swiper-animate-duration=".5s"
        swiper-animate-delay="2s" src="../assets/image/dazhou.png"/>
    </div> -->
  </div>
</template>

<script>
import { Input, message } from "ant-design-vue";
export default {
  name: "Login",
  props: {},
  components: { AInput: Input },
  watch: {},
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    async handleClick() {
      if (!this.account || !this.password) {
        return message.error("账号密码不匹配");
      }
      try {
        const res = await this.$http.get("/bill", {
          params: {
            phone: this.account,
            idcard: this.password,
          },
        });
        this.$emit("next", res.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped lang="less">
.login-container {
  height: 100%;
  width: 100%;
  padding: 120px 0 calc(50px + (100vh - 568px) * 0.123) 0;
  background: url("../assets/image/first-page.jpg") center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .bill-img {
    width: 100%;
    margin-top: calc(20px + (100vh - 568px) * 0.164);
  }
  .wrapper {
    width: 78%;
    margin: calc(50px + (100vh - 568px) * 0.123) auto;
    text-align: center;
    .ant-input:first-child {
      margin-bottom: calc(16px + (100vh - 568px) * 0.0655);
    }
  }
  .check {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    background-color: red;
    font-size: 18px;
    padding: 8px 16px;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 3px;
    margin: calc(48px + (100vh - 568px) * 0.0655) auto calc(16px + (100vh - 568px) * 0.0655);
  }
  .company-bg {
    width: 100%;
  }
}
</style>
