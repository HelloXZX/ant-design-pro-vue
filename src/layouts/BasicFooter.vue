<template>
  <a-layout-footer>
    <global-footer :links="links" />
  </a-layout-footer>
</template>

<script>
import GlobalFooter from '@/components/GlobalFooter.vue';
export default {
  name: 'footer',
  components: {
    GlobalFooter,
  },
  data() {
    return {
      links: [
        {
          key: 'Pro 首页',
          title: 'Pro 首页',
          href: 'https://pro.ant.design',
        },
        {
          key: 'github',
          title: 'github',
          href: 'https://github.com/ant-design/ant-design-pro',
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
        },
      ],
      copyright: 'Copyright 2018 蚂蚁金服体验技术部出品'
    }
  },
}
</script>

<style lang="less">

</style>
