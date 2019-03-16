<template>
  <div>
    <page-header 
      title="基础表单"
      :breadcrumbList="breadcrumbList"
      :style="{ margin: '-20px -24px 0' }"
    >
      <template v-slot:content>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</template>
    </page-header>
    <div :style="{ margin: '24px 0 0 0' }">
      <a-card>
        <a-form>
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            label="标题"
          >
            <a-input
              v-decorator="[
                'title',
                {rules: [{ required: true, message: '请输入标题' }]}
              ]"
              placeholder="给目标起个名字"
            />
          </a-form-item>
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            label="起止日期"
          >
            <a-range-picker
              :style="{width: '100%'}"
              v-decorator="[
                'date',
                {rules: [{ required: true, message: '请选择起止时间' }]}
              ]"
              :placeholder="['开发时间', '结束时间']"
            />
          </a-form-item>
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            label="目标描述"
          >
            <a-textarea
              :style="{minHeight: 32}"
              :rows="4"
              v-decorator="[
                'goal',
                {rules: [{ required: true, message: '目标描述' }]}
              ]"
              placeholder="请输入目标描述"
            />
          </a-form-item>
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            label="衡量标准"
          >
            <a-textarea
              :style="{minHeight: 32}"
              :rows="4"
              v-decorator="[
                'standard',
                {rules: [{ required: true, message: '请输入衡量标准' }]}
              ]"
              placeholder="请输入衡量标准"
            />
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../components/PageHeader'
export default {
  name: 'BasicForm',
  components: {
    PageHeader,
  },
  data() {
    return {
      breadcrumbList: [
        {title: '首页'},
        {title: 'hahah'}
      ],
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
      submitWraperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      }
    }
  }
}
</script>

<style lang="less">

</style>


