<template>
  <transition name="slide">
    <div class="sider" v-if="show">
      <slot></slot>
      <button @click="show = !show">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "GuluSider",
  data() {
    return { show: true };
  }
};
</script>
<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  margin-left: -200px;
}
</style>    