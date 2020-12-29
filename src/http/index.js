import _axios from "axios";
import { message } from "ant-design-vue";
let config = {
  baseURL:
    process.env.NODE_ENV === "development"
      ? "/api"
      : `${window.getBaseUrl()}/api`,
  timeout: 0 // Timeout
};
const axios = _axios.create(config);

// 响应拦截器
axios.interceptors.response.use(
  function(response) {
    const res = response.data;
    if (res.code != 200) {
      message.error(res.msg || "请求错误，请稍后重试");
      return Promise.reject(response);
    }
    return res;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);
export default axios;
