<template>
  <div>
    <page-header 
      :breadcrumbList="breadcrumbList"
      :style="{ margin: '-20px -24px 0' }"
    />
    <a-card :style="{marginTop: '24px'}" :bordered="false">
      <result
        type="error"
        title="提交失败"
      >
        <span slot="description">请核对并修改以下信息后，再重新提交。</span>
        <div slot="extra">
          <div
            :style="{
              fontSize: '16px',
              color: 'rgba(0, 0, 0, 0.85)',
              fontWeight: '500',
              marginBottom: '16px',
            }"
          >
            您提交的内容有如下错误：
          </div>
          <div :style="{ marginBottom: '16px' }">
            <a-icon :style="{ color: '#f5222d', marginRight: '8px' }" type="close-circle-o" />
            您的账户已被冻结
            <a :style="{ marginLeft: '16px' }">
              立即解冻
              <a-icon type="right" />
            </a>
          </div>
          <div>
            <a-icon :style="{ color: '#f5222d', marginRight: '8px' }" type="close-circle-o" />
            您的账户还不具备申请资格
            <a :style="{ marginLeft: '16px' }">
              立即升级
              <a-icon type="right" />
            </a>
          </div>
        </div>
        <a-button slot="actions" type="primary">
          返回修改
        </a-button>
      </result>
    </a-card>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import Result from '@/components/Result'

export default {
  name: 'Error',
  components: {
    PageHeader,
    Result,
  },
  data() {
    return {
      breadcrumbList: [
        {title: '首页'},
        {title: '结果页'},
        {title: '失败页'},
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
