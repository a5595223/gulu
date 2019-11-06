<template>
  <div class="popover" @click.stop="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "GuluPopover",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper);
      let {
        width,
        height,
        top,
        left
      } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
      this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
    },
    listenToDocument() {
      let eventHandle = e => {
        console.log(e.target);
        if (
          this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target)
        ) {
          return;
        } else {
          this.close();
          document.removeEventListener("click", eventHandle);
        }
      };
      document.addEventListener("click", eventHandle);
    },
    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        this.listenToDocument();
      });
    },
    close() {
      this.visible = false;
    },

    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        this.visible = !this.visible;
        if (this.visible === true) {
          this.close();
          document.removeEventListener("click", eventHandle);
        } else {
          this.open();
        }
      }
      //
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>