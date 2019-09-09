<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <div class="content">
      <slot></slot>
    </div>
    <g-icon v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon name="loading" v-if="loading" class="loading"></g-icon>
  </button>
</template>
<script>
import Icon from "./icon";
export default {
  name: "GuluButton",
  components: {
    "g-icon": Icon
  },
  props: {
    icon: "",
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  animation: spin 2s infinite linear;
}
@mixin large-text {
  .g-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    > .icon {
      order: 1;
      margin-right: 0.3em;
    }
    > .content {
      order: 2;
    }
  }
  .g-button:hover {
    border-color: $border-color-hover;
  }
  .g-button:active {
    background-color: $button-active-bg;
  }
  .g-button:focus {
    outline: none;
  }
  .g-button.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
  }
}
@include large-text;
</style>


