<template>
  <div>
    <page-header 
      title="分步表单"
      :breadcrumbList="breadcrumbList"
      :style="{ margin: '-20px -24px 0' }"
    >
      <template v-slot:content>将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。</template>
    </page-header>
        <div :style="{ margin: '24px 0 0 0' }">
      <a-card>
        <a-steps :current="getPath()" class="steps">
          <a-step title="填写转账信息"></a-step>
          <a-step title="确认转账信息"></a-step>
          <a-step title="完成"></a-step>
        </a-steps>
        <router-view></router-view>
      </a-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../../components/PageHeader'
export default {
  name: 'StepForm',
  components: {
    PageHeader
  },
  data() {
    return {
      breadcrumbList: [
        {title: '首页'},
        {title: 'hahah'}
      ],
    }
  },
  methods: {
    getPath() {
      switch(this.$route.path) {
        case "/form/step-form/info":
          return 0;
        case "/form/step-form/confirm":
          return 1;
        case "/form/step-form/result":
          return 2;
        default:
          return 0;
      }
    }
  },
  mounted() {
    this.getPath();
  }
}
</script>

<style lang="less">
.steps:global(.ant-steps) {
  max-width: 750px;
  margin: 16px auto;
}
</style>