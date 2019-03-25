<template>
  <div class="toolbar" :style="{ width }">
    <div class="left">
      <slot name="extra"></slot>
    </div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterToolbar',
  data() {
    return {
      width: null
    }
  },
  methods: {
    resizeFooterToolbar() {
      const sider = document.querySelector('.ant-layout-sider');
      if (sider == null) {
        return;
      }
      // const { isMobile } = this.context;
      //const width = isMobile ? null : `calc(100% - ${sider.style.width})`;
      const width = `calc(100% - ${sider.style.width})`;
      this.width = {width: width+'px'};
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeFooterToolbar);
    this.resizeFooterToolbar();
  },
  beforeDestroy() {
    //window.removeEventListener('resize');
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

.toolbar {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 9;
  width: 100%;
  height: 56px;
  padding: 0 24px;
  line-height: 56px;
  background: #fff;
  border-top: 1px solid @border-color-split;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.03);

  &::after {
    display: block;
    clear: both;
    content: '';
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  button + button {
    margin-left: 8px;
  }
}

</style>

