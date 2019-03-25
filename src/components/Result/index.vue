<template>
  <div class="result" >
    <div class="icon">
      <a-icon v-show="type == 'error'" class="error" type="close-circle" theme="filled" />
      <a-icon v-show="type == 'success'" class="success" type="check-circle" theme="filled" />
    </div>
    <div class="title">{{title}}</div>
    <div v-show="$slots.description" class="description">
      <slot name="description"></slot>
    </div>
    <div v-show="$slots.extra" class="extra">
      <slot name="extra"></slot>
    </div>
    <div v-show="$slots.actions" class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
    type: String,
    title: String,
  },
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

.result {
  width: 72%;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: @screen-xs) {
    width: 100%;
  }

  .icon {
    margin-bottom: 24px;
    font-size: 72px;
    line-height: 72px;

    & > .success {
      color: @success-color;
    }

    & > .error {
      color: @error-color;
    }
  }

  .title {
    margin-bottom: 16px;
    color: @heading-color;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
  }

  .description {
    margin-bottom: 24px;
    color: @text-color-secondary;
    font-size: 14px;
    line-height: 22px;
  }

  .extra {
    padding: 24px 40px;
    text-align: left;
    background: #fafafa;
    border-radius: @border-radius-sm;

    @media screen and (max-width: @screen-xs) {
      padding: 18px 20px;
    }
  }

  .actions {
    margin-top: 32px;

    button:not(:last-child) {
      margin-right: 8px;
    }
  }
}
</style>

