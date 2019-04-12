<template>
  <div class="linkGroup">
    <a v-for="link in links" :key="link.id">{{link.title}}</a>
    <a-button size="small" type="primary" ghost icon="plus">
      添加
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'EditableLinkGroup',
  props: {
    links: Array,
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

.linkGroup {
  padding: 20px 0 8px 24px;
  font-size: 0;
  & > a {
    display: inline-block;
    width: 25%;
    margin-bottom: 13px;
    color: @text-color;
    font-size: @font-size-base;
    &:hover {
      color: @primary-color;
    }
  }
}

</style>

