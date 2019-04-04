<template>
  <div>
    <page-header 
      :breadcrumbList="breadcrumbList"
      :style="{ margin: '-20px -24px 0' }"
      :tabList="tabList"
      title="搜索列表"
      @tabChange="tabChange"
    >
      <div slot="content" :style="{ textAlign: 'center' }">
        <a-input-search
          placeholder="请输入"
          enterButton="搜索"
          size="large"
          :style="{ width: '522px' }"
        />
      </div>
    </page-header>
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'

export default {
  name: 'List',
  components: {
    PageHeader,
  },
  data() {
    return {
      breadcrumbList: [
        {title: '首页'},
        {title: '列表页'},
        {title: '搜索列表'},
      ],
      tabList: [
        {
          key: 'articles',
          tab: '文章',
        },
        {
          key: 'projects',
          tab: '项目',
        },
        {
          key: 'applications',
          tab: '应用',
        },
      ]
    }
  },
  methods: {
    tabChange(key) {
      this.$router.push('/list/search/' + key)
    }
  }
}
</script>

<style lang="less" scoped>

</style>