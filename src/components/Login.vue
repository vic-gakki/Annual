<template>
  <div class="login-container">
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
      type="password"
        placeholder="请输入身份证后六位"
        class="ani"
        swiper-animate-effect="lightSpeedIn"
        swiper-animate-duration="1s"
        swiper-animate-delay="0.7s"
        v-model="password"
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
    </div>
  </div>
</template>

<script>
import { Input, message } from "ant-design-vue";
export default {
  name: "Login",
  props: {},
  components: { AInput: Input},
  watch: {},
  data() {
    return {
      account: "",
      password: ""
    };
  },
  methods: {
    handleClick() {
      if(!this.account || !this.password){
        return message.error('账号密码不匹配')
      }
      this.$emit("next");
    }
  }
};
</script>

<style scoped lang="less">
.login-container {
  height: 100%;
  width: 100%;
  padding: 120px 0 80px 0;
  background: url("../assets/image/first-page.jpg") center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .bill-img {
    width: 100%;
    margin-top: calc(48px + (100vh - 568px) * 0.41);
  }
  .wrapper {
    width: 250px;
    margin: 0 auto;
    text-align: center;
    .ant-input:first-child {
      margin-bottom: 16px;
    }
  }
  .check {
    width: 100%;
    margin: 0 auto;
    background-color: red;
    font-size: 18px;
    padding: 8px 16px;
    border-radius: 10px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 3px;
    margin-top: 36px;
  }
}
</style>
