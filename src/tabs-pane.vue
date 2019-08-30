<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "GuluTabsPane",
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", name => {});
  }
};
</script>
<style lang="scss" scoped>
.tabs-pane {
}
</style>