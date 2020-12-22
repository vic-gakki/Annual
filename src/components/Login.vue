<template>
  <div class="login-container">
    <div class="wrapper">
      <a-input placeholder="请输入手机号"></a-input>
      <a-input placeholder="请输入身份证后六位"></a-input>
      <a-button>查看我的年度账单</a-button>
    </div>
  </div>
</template>

<script>
import { Input, Button } from "ant-design-vue";
export default {
  name: "Login",
  props: {},
  components: { AInput: Input, AButton: Button },
  watch: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
.login-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  .wrapper {
    width: 200px;
    margin: auto;
    text-align: center;
    .ant-input,
    .ant-btn {
      margin-bottom: 16px;
    }
  }
}
</style>
