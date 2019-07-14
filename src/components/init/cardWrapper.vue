<template>
  <div>
    <ul class="case">
      <button class="buttona button3">{{buttonName}}</button>
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: "cardWrapper",
  props: {
    buttonName: {
      type: String,
      required: true
    },
    autoSet: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.case {
  border: 1px solid #1d4c9e;
  padding: 0 20px;
  margin: 20px auto;
  position: relative;
  background: #fff;
  border-radius: 5px;
}
.buttona {
  border: none;
  position: absolute;
  top: 88px;
  left: 48px;
  width: 150px;
  color: #fff;
  background: -webkit-linear-gradient(#5294c2, #1d4c9e); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#5294c2, #1d4c9e); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#5294c2, #1d4c9e); /* Firefox 3.6 - 15 */
  background: linear-gradient(#5294c2, #1d4c9e); /* 标准的语法 */
  padding: 5px 20px;
  &:hover {
    opacity: 1;
  }
}
.button3 {
  top: -12px;
  z-index: 1;
  &:hover {
    opacity: 1;
  }
}
</style>
