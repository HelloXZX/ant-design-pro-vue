<template>
  <div class="globalFooter">
    <div class="links">
      <a v-for="(link,index) in links" :key="link.key" :title="link.key" :href="link.href">
        <span v-if="link.key == 'github'">
          <a-icon type="github" />
        </span>
        <span v-else>{{link.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: []
    },
    copyright: String,
  },
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.globalFooter {
  margin: 48px 0 24px 0;
  padding: 0 16px;
  text-align: center;

  .links {
    margin-bottom: 8px;

    a {
      color: @text-color-secondary;
      transition: all 0.3s;

      &:not(:last-child) {
        margin-right: 40px;
      }

      &:hover {
        color: @text-color;
      }
    }
  }

  .copyright {
    color: @text-color-secondary;
    font-size: @font-size-base;
  }
}

</style>



