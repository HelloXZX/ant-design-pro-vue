<template>
  <div :class="{trendItem: true, trendItemGrey: !colorful, reverseColor: reverseColor && colorful}" >
    <span>
      <slot></slot>
    </span>
    <span v-show="flag" :class="flag">
      <a-icon :type="`caret-${flag}`" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'Trend',
  props: {
    colorful: {
      type: Boolean,
      default: true,
    },
    reverseColor: {
      type: Boolean,
      default: false,
    },
    flag: String,
  }
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.trendItem {
  display: inline-block;
  font-size: @font-size-base;
  line-height: 22px;

  .up,
  .down {
    position: relative;
    top: 1px;
    margin-left: 4px;
    i {
      font-size: 12px;
      transform: scale(0.83);
    }
  }
  .up {
    color: @red-6;
  }
  .down {
    top: -1px;
    color: @green-6;
  }

  &.trendItemGrey .up,
  &.trendItemGrey .down {
    color: @text-color;
  }

  &.reverseColor .up {
    color: @green-6;
  }
  &.reverseColor .down {
    color: @red-6;
  }
}
</style>