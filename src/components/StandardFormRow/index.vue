<template>
  <div :class="{standardFormRow: true, standardFormRowBlock: block, standardFormRowLast: last, standardFormRowGrid: grid}">
    <div v-show="title" class="label">
      <span>{{title}}</span>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'StandardFormRow',
  props: {
    block: Boolean,
    last: Boolean,
    grid: Boolean,
    title: String,
  }
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.standardFormRow {
  display: flex;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px dashed @border-color-split;
  :global {
    .ant-form-item {
      margin-right: 24px;
    }
    .ant-form-item-label label {
      margin-right: 0;
      color: @text-color;
    }
    .ant-form-item-label,
    .ant-form-item-control {
      padding: 0;
      line-height: 32px;
    }
  }
  .label {
    flex: 0 0 auto;
    margin-right: 24px;
    color: @heading-color;
    font-size: @font-size-base;
    text-align: right;
    & > span {
      display: inline-block;
      height: 32px;
      line-height: 32px;
      &::after {
        content: '：';
      }
    }
  }
  .content {
    flex: 1 1 0;
    :global {
      .ant-form-item:last-child {
        margin-right: 0;
      }
    }
  }
}

.standardFormRowLast {
  margin-bottom: 0;
  padding-bottom: 0;
  border: none;
}

.standardFormRowBlock {
  :global {
    .ant-form-item,
    div.ant-form-item-control-wrapper {
      display: block;
    }
  }
}

.standardFormRowGrid {
  :global {
    .ant-form-item,
    div.ant-form-item-control-wrapper {
      display: block;
    }
    .ant-form-item-label {
      float: left;
    }
  }
}
</style>


