<template>
  <div class="miniProgress">
    <a-tooltip title="`目标值: ${target}%`">
      <div class="target" :style="{ left: target ? `${target}%` : null }">
        <span :style="{ backgroundColor: color || null }" />
        <span :style="{ backgroundColor: color || null }" />
      </div>
    </a-tooltip>
    <div class="progressWrap">
      <div
        class="progress"
        :style="{
          backgroundColor: color || null,
          width: percent ? `${percent}%` : null,
          height: strokeWidth + 'px' || null,
        }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiniProgress',
  props: {
    target: Number,
    color: String,
    strokeWidth: Number,
    percent: Number,
  }
}
</script>

<style lang="less">
 @import '~ant-design-vue/lib/style/themes/default.less';

.miniProgress {
  position: relative;
  width: 100%;
  padding: 5px 0;
  .progressWrap {
    position: relative;
    background-color: @background-color-base;
  }
  .progress {
    width: 0;
    height: 100%;
    background-color: @primary-color;
    border-radius: 1px 0 0 1px;
    transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
  }
  .target {
    position: absolute;
    top: 0;
    bottom: 0;
    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 4px;
      border-radius: 100px;
    }
    span:last-child {
      top: auto;
      bottom: 0;
    }
  }
}
</style>