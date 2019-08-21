<template>
  <div class="layout" :class="LayoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluLayout",
  data() {
    return {
      LayoutClass: { hasSider: false }
    };
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "GuluSider") {
        this.LayoutClass.hasSider = true;
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  flex: 1;
  &.hasSider {
    flex-direction: row;
  }
}
</style>    