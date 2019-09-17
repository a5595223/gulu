<template>
  <div>
    <g-row class="demoRow" gutter="10">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8" offset="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="6" offset="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6" offset="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="8">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
    </g-row>
    <pre>
        <code>{{content}}</code>
    </pre>
  </div>
</template>

<script>
import Col from "../../../src/col";
import Row from "../../../src/row";
export default {
  components: {
    "g-col": Col,
    "g-row": Row
  },
  data() {
    return {
      content: `<div>
    <g-row class="demoRow" gutter="10">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8" offset="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="6" offset="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6" offset="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4" offset="8">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2">
        <div class="demoCol">2</div>
      </g-col>
      <g-col span="2" offset="2">
        <div class="demoCol">2</div>
      </g-col>
    </g-row>
  </div>`
    };
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.demoRow {
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #7cb8ff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>