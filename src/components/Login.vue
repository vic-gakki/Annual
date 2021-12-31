<template>
  <div class="login-container">
    <div class="login-wrapper">
      <img src="../assets/image/bill-bg.png" alt="" class="bill-img" />
      <div class="wrapper">
        <div
          class="account-wrapper ani"
          swiper-animate-effect="lightSpeedIn"
          swiper-animate-duration="1s"
          swiper-animate-delay="0.3s"
        >
          <a-input placeholder="请输入手机号" v-model="account"></a-input>
          <a-button @click="getCaptura" :disabled="loading">{{
            text
          }}</a-button>
        </div>
        <a-input
          placeholder="请输入验证码"
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
        <img
          class="company-bg ani"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration=".5s"
          swiper-animate-delay="2s"
          src="../assets/image/dazhou.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Input, message, Button } from "ant-design-vue";
const timeout = 60;
export default {
  name: "Login",
  props: {},
  components: { [Input.name]: Input, [Button.name]: Button },
  watch: {},
  computed: {
    loading() {
      return this.timeout > 0;
    },
    text() {
      return this.loading ? `已发送(${this.timeout}s)` : "获取验证码";
    },
  },
  data() {
    return {
      timeout: 0,
      account: "",
      password: "",
    };
  },
  methods: {
    async handleClick() {
      if (!this.account || !this.password) {
        return message.error("账号密码不匹配");
      }
      if (!/^[\d|\w]{6}$/.test(this.password)) {
        return message.error("验证码为6位字符");
      }
      try {
        const res = await this.$http.get("/bill", {
          params: {
            phone: this.account,
            code: this.password,
          },
        });
        this.$emit("next", res.data);
      } catch (e) {
        console.log(e);
      }
    },
    async getCaptura() {
      if (!this.account) {
        return message.error("请输入手机号");
      }
      if (!/^1\d{10}$/.test(this.account)) {
        return message.error("请输入正确格式的手机号");
      }
      try {
        await this.$http.get("/code", {
          params: {
            phone: this.account,
          },
        });
        this.timeout = 60;
        const interval = setInterval(() => {
          this.timeout--;
          if (this.timeout <= 0) {
            clearInterval(interval);
          }
        }, 1000);
      } catch (error) {
        console.log(error);
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
  @media (min-width: 1024px) {
    .login-wrapper {
      width: 900px;
      margin: 0 auto;
    }
  }
  .bill-img {
    width: 100%;
    margin-top: calc(20px + (100vh - 568px) * 0.164);
  }
  .wrapper {
    width: 78%;
    margin: calc(50px + (100vh - 568px) * 0.123) auto;
    text-align: center;
    .account-wrapper {
      margin-bottom: calc(16px + (100vh - 568px) * 0.0655);
      display: flex;
      /deep/ .ant-btn {
        font-size: 12px;
        padding: 0 8px;
        margin-left: 5px;
        min-width: 80px;
      }
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
    margin: calc(48px + (100vh - 568px) * 0.0655) auto
      calc(16px + (100vh - 568px) * 0.0655);
    cursor: pointer;
  }
  .company-bg {
    width: 100%;
  }
}
</style>
