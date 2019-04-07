<template>
  <div>
    <div 
      :class="{
        descriptionList: true,
        layout: true,
        small: size === 'small',
        large: size === 'large',
      }" 
    >
      <div v-show="title" class="title">{{title}}</div>
      <a-row :gutter="gutter">
        <slot></slot>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DescriptionList',
  props: {
    title: String,
    gutter: {
      type: Number,
      default: 32
    },
    size: String,
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

.descriptionList {
  // offset the padding-bottom of last row
  :global {
    .ant-row {
      margin-bottom: -16px;
      overflow: hidden;
    }
  }

  .title {
    margin-bottom: 16px;
    color: @heading-color;
    font-weight: 500;
    font-size: 14px;
  }

  .term {
    display: table-cell;
    padding-bottom: 16px;
    color: @heading-color;
    // Line-height is 22px IE dom height will calculate error
    line-height: 20px;
    white-space: nowrap;

    &::after {
      position: relative;
      top: -0.5px;
      margin: 0 8px 0 2px;
      content: ':';
    }
  }

  .detail {
    display: table-cell;
    width: 100%;
    padding-bottom: 16px;
    color: @text-color;
    line-height: 20px;
  }

  &.small {
    // offset the padding-bottom of last row
    :global {
      .ant-row {
        margin-bottom: -8px;
      }
    }
    .title {
      margin-bottom: 12px;
      color: @text-color;
    }
    .term,
    .detail {
      padding-bottom: 8px;
    }
  }

  &.large {
    .title {
      font-size: 16px;
    }
  }

  &.vertical {
    .term {
      display: block;
      padding-bottom: 8px;
    }

    .detail {
      display: block;
    }
  }
}
</style>


