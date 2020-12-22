<template>
  <div class="login-container">
    <div class="wrapper">
      <a-input placeholder="请输入手机号"></a-input>
      <a-input placeholder="请输入身份证后六位"></a-input>
      <div @click="handleClick" class="check">查看我的年度账单</div>
    </div>
  </div>
</template>

<script>
import { Input } from "ant-design-vue";
export default {
  name: "Login",
  props: {},
  components: { AInput: Input },
  watch: {},
  data() {
    return {};
  },
  methods: {
    handleClick(){
      this.$emit('next')
    }
  }
};
</script>

<style scoped lang="less">
.login-container {
  height: 100%;
  width: 100%;
  background: url('../assets/image/first-page.jpg') center/cover;
  display: flex;
  align-items: flex-end;
  .wrapper {
    width: 200px;
    margin: 0 auto 80px;
    text-align: center;
    .ant-input,
    .ant-btn {
      margin-bottom: 16px;
    }
  }
  .check {
    width: 100%   ;
    margin: 0 auto;
    background-color: red;
    font-size: 18px;
    padding: 8px 16px;
    border-radius: 10px;
    color:rgb(238, 185, 38);
  }
}
</style>
