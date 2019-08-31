<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "GuluTabsHead",
  inject: ["eventBus"],
  created() {
    console.log(this.eventBus);
  }
};
</script>
<style lang="scss" scoped>
$blue: blue;
$tab-height: 40px;
.tabs-head {
  display: flex;
  justify-content: flex-start;
  height: $tab-height;
  position: relative;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    width: 100px;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>