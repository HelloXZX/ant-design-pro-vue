<template>
  <div class="field">
    <span class="label">{{label}}</span>
    <span class="number">{{value}}</span>
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    label: String,
    value: String,
  }
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.field {
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  .label,
  .number {
    font-size: @font-size-base;
    line-height: 22px;
  }
  .number {
    margin-left: 8px;
    color: @heading-color;
  }
}
</style>