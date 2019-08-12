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
<style lang="scss">
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
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
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
    border-color: var(--border-color-hover);
  }
  .g-button:active {
    background-color: var(--button-active-bg);
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


