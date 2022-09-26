<template>
  <button :class="{ btn: true, outlined: outlined }" v-on="listeners" v-bind:type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped lang="scss">
.btn {
  cursor: pointer;
  background: #ff662d;
  color: #fff;
  width: 349px;
  height: 48.56px;
  font-size: 18px;
  line-height: 21px;
  border: 0;
}
.outlined {
  color: #ff662d;
  background-color: #fff;
  border: 1px solid #ff662d;
}
</style>
