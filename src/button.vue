<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
    <div class="content">
      <slot></slot>
    </div>

    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`" />
    </svg>
  </button>
</template>
<script>
export default {
  props: ["icon", "iconPosition"]
};
</script>
<style lang="scss">
@mixin large-text {
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: flex;
    justify-content: center;
    align-items: center;
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


