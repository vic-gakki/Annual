<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/Annual.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style lang="less">
html {
  height: 100%;
  body {
    margin: 0;
    height: 100%;
    box-sizing: border-box;
  }
}
#app {
  height: 100%;
  width: 100%;
  position: relative;
  color: #fff;
  p {
      margin: 0;
    } 
}
.swiper-container {
  height: 100%;
}
</style>
