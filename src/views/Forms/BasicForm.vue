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
        <a-form
          :form="form"
          @submit="handleSubmit"
        >
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
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <span slot="label">
              客户
              <em class="optional">
                （选填）
                <a-tooltip title="目标的服务对象">
                  <a-icon type="info-circle-o" style="{ marginRight: 4 }" />
                </a-tooltip>
              </em>
            </span>
            <a-input
              v-decorator="[
                'client',
              ]"
              placeholder="请描述你服务的客户，内部客户直接 @姓名／工号"
            />
          </a-form-item>
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <span slot="label">
              邀评人
              <em class="optional">
                （选填）
              </em>
            </span>
            <a-input
              v-decorator="[
                'invites',
              ]"
              placeholder="请直接 @姓名／工号，最多可邀请 5 人"
            />
          </a-form-item>
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <span slot="label">
              权重
              <em class="optional">
                （选填）
              </em>
            </span>
            <a-input-number
              v-decorator="[
                'weight',
              ]"
              placeholder="请输入"
              :min="0"
              :max="100"
            />
            <span class="ant-form-text">%</span>
          </a-form-item>
          <a-form-item
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
            label="目标公开"
            help="客户、邀评人默认被分享"
          >
            <a-radio-group
              v-decorator="[
                'public',
                {initialValue: '1'}
              ]"
            >
              <a-radio value="1">
                公开
              </a-radio>
              <a-radio value="2">
                部分公开
              </a-radio>
              <a-radio value="3">
                不公开
              </a-radio>
            </a-radio-group>
            <a-form-item
              style="{ marginBottom: 0 }"
              v-show="form.getFieldValue('public') === '2'"
            >
              <a-select>
                <a-select-option value="1">
                  同事A
                </a-select-option>
                <a-select-option value="2">
                  同事B
                </a-select-option>
                <a-select-option value="3">
                  同事C
                </a-select-option>
              </a-select>
            </a-form-item>
          </a-form-item>
          <a-form-item
            :wrapper-col="submitWraperCol"
          >
            <a-button 
              type="primary" 
              :loading="submitting" 
              :style="{marginTop: '32px'}"
              html-type="submit"
            >
              提交
            </a-button>
            <a-button :style="{marginLeft: '8px'}">
              保存
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../components/PageHeader'
import {fakeSubmitForm} from '@/services/api'
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
      },
      form: this.$form.createForm(this),
      submitting: false,
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll(async (err, values) => {
        if(!err) {
          console.log(values);
          this.submitting = true;
          const result = await fakeSubmitForm(values);
          console.log(result.message);
          if (result.message === 'Ok') {
            this.submitting = false;
            this.$message.success('提交成功');
          }
        }
      })
      
    }
  }
}
</script>

<style lang="less">

</style>


