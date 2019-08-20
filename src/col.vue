<template>
  <div class="col" :class="classes" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
let validator = value => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach(key => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },

    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
    }
    // gutter: {
    //   type: [Number, String]
    // }
  },
  data() {
    return {
      gutter: 0
    };
  },
  methods: {
    createClasses(obj, str = "") {
      if (!obj) {
        return [];
      }
      let array = [];
      if (obj.span) {
        array.push(`col-${str}${obj.span}`);
      }
      if (obj.offset) {
        array.push(`offset-${str}${obj.offset}`);
      }
      return array;
    }
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px"
      };
    },

    classes() {
      let { span, offset, phone, ipad, narrowPc, pc, widePc } = this;
      let createClasses = this.createClasses;
      // if (ipad) {
      //   phoneClass = [`col-ipad-${ipad.span}`];
      // }
      // if (narrowPc) {
      //   phoneClass = [`col-narrow-pc-${narrowPc.span}`];
      // }
      // if (pc) {
      //   phoneClass = [`col-pc-${pc.span}`];
      // }
      // if (widePc) {
      //   phoneClass = [`col-wide-pc-${widePc.span}`];
      // }
      return [
        createClasses({ span, offset }),
        createClasses(ipad, "ipad-"),
        createClasses(narrowPc, "narrow-pc-"),
        createClasses(pc, "pc-"),
        createClasses(widePc, "wide-pc")
        // span && `col-${span}`,
        // offset && `offset-${offset}`,
        // ipad && `col-ipad-${ipad.span}`,
        // narrowPc && `col-narrow-pc-${narrowPc.span}`,
        // pc && `col-pc-${pc.span}`,
        // widePc && `col-wide-pc-${widePc.span}`
        // ...(phone && [`col-phone-${phone.span}`])
        // ...(ipad && [`col-ipad-${ipad.span}`]),
        // ...(narrowPc && [`col-narrow-pc-${narrowPc.span}`]),
        // ...(pc && [`col-pc-${pc.span}`]),
        // ...(widePc && [`col-wide-pc-${widePc.span}`])
      ];
    }
  }
};
</script>
<style lang="scss" scoped>
.col {
  width: 50%;
  height: 100px;
  background: grey;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }

  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 769px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
}
</style>