<template>
  <div>
    <g-layout style="color: white; overflow:hidden;">
      <g-sider style=" background: #7cb8ff; width:200px; color: black;">sider</g-sider>
      <g-layout>
        <g-header style="height: 50px; background:lightskyblue;">header</g-header>
        <g-content style="height: 100px; background:deepskyblue;">content</g-content>
        <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
      </g-layout>
    </g-layout>
    <pre>
        <code>{{content}}</code>
    </pre>
  </div>
</template>

<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Footer from "../../../src/footer";
import Content from "../../../src/content";
import Sider from "../../../src/sider";
export default {
  components: {
    "g-layout": Layout,
    "g-header": Header,
    "g-footer": Footer,
    "g-content": Content,
    "g-sider": Sider
  },
  data() {
    return {
      content: `
          <g-layout style="color: white; overflow:hidden;">
      <g-sider style=" background: #7cb8ff; width:200px; color: black;">sider</g-sider>
      <g-layout>
        <g-header style="height: 50px; background:lightskyblue;">header</g-header>
        <g-content style="height: 100px; background:deepskyblue;">content</g-content>
        <g-footer style="height: 50px; background:lightskyblue;">footer</g-footer>
      </g-layout>
    </g-layout>
          `
    };
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>