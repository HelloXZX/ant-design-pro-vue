<template>
  <div>
    <page-header 
      title="高级表单"
      :breadcrumbList="breadcrumbList"
      :style="{ margin: '-20px -24px 0' }"
    >
      <template v-slot:content>高级表单常见于一次性输入和提交大批量数据的场景。</template>
    </page-header>
    <div :style="{ margin: '24px 0 0 0' }">
      <a-card title="仓库管理" class="card" :bordered="false">
        <a-form
          :form="form"
          layout="vertical"
          hideRequiredMark
          @submit="handleSubmit"
        >
          <a-row :gutter="16">
            <a-col :lg="6" :md="12" :sm="24">
              <a-form-item :label="fieldLabels.name" >
                <a-input
                  v-decorator="[
                    'name',
                    {rules: [{ required: true, message: '请输入仓库名称' }]}
                  ]"
                  placeholder="请输入仓库名称"
                />
              </a-form-item>
            </a-col>
            <a-col :xl="{span: 6, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
              <a-form-item :label="fieldLabels.url">
                <a-input
                  v-decorator="[
                    'url',
                    {rules: [{ required: true, message: '请选择' }]}
                  ]"
                  :style="{width: '100%'}"
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="请输入"
                />
              </a-form-item>
            </a-col>
            <a-col :xl="{span: 6, offset: 2}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
              <a-form-item :label="fieldLabels.owner">
                <a-select
                  v-decorator="[
                    'owner',
                    {rules: [{ required: true, message: '请选择管理员' }]}
                  ]"
                  placeholder="请选择管理员"
                >
                  <a-select-option value="xiao">付晓晓</a-select-option>
                  <a-select-option value="mao">周毛毛</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :lg="6" :md="12" :sm="24">
              <a-form-item :label="fieldLabels.approver">
                <a-select
                  v-decorator="[
                    'approver',
                    {rules: [{ required: true, message: '请选择审批员' }]}
                  ]"
                  placeholder="请选择审批员"
                >
                  <a-select-option value="xiao">付晓晓</a-select-option>
                  <a-select-option value="mao">周毛毛</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :xl="{span: 6, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
              <a-form-item :label="fieldLabels.dateRange">
                <a-range-picker
                  v-decorator="[
                    'dateRange',
                    {rules: [{ required: true, message: '请选择生效日期' }]}
                  ]"
                  :style="{width: '100%'}"
                  :placeholder="['开始日期', '结束日期']"
                />
              </a-form-item>
            </a-col>
            <a-col :xl="{span: 6, offset: 2}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
              <a-form-item :label="fieldLabels.type">
                <a-select
                  v-decorator="[
                    'type',
                    {rules: [{ required: true, message: '请选择仓库类型' }]}
                  ]"
                  placeholder="请选择仓库类型"
                >
                  <a-select-option value="private">私密</a-select-option>
                  <a-select-option value="public">公开</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        
      </a-card>

      <a-card title="任务管理" class="card" :bordered="false">
        <a-form
          :form="form"
          layout="vertical"
          hideRequiredMark
          @submit="handleSubmit"
        >
          <a-row :gutter="16">
            <a-col :lg="6" :md="12" :sm="24">
              <a-form-item :label="fieldLabels.name2">
                <a-input
                  v-decorator="[
                    'name2',
                    {rules: [{ required: true, message: '请输入' }]}
                  ]"
                  placeholder="请输入"
                />
              </a-form-item>
            </a-col>
            <a-col :xl="{span: 6, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
              <a-form-item :label="fieldLabels.url2">
                <a-input
                  v-decorator="[
                    'url2',
                    {rules: [{ required: true, message: '请选择' }]}
                  ]"
                  placeholder="请输入"
                />
              </a-form-item>
            </a-col>
            <a-col :xl="{span: 6, offset: 2}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
              <a-form-item :label="fieldLabels.owner2">
                <a-select
                  v-decorator="[
                    'owner2',
                    {rules: [{ required: true, message: '请选择管理员' }]}
                  ]"
                  placeholder="请选择管理员"
                >
                  <a-select-option value="xiao">付晓晓</a-select-option>
                  <a-select-option value="mao">周毛毛</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :lg="6" :md="12" :sm="24">
              <a-form-item :label="fieldLabels.approver2">
                <a-select
                  v-decorator="[
                    'approver2',
                    {rules: [{ required: true, message: '请选择审批员' }]}
                  ]"
                  placeholder="请选择审批员"
                >
                  <a-select-option value="xiao">付晓晓</a-select-option>
                  <a-select-option value="mao">周毛毛</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :xl="{span: 6, offset: 2}" :lg="{span: 8}" :md="{span: 12}" :sm="24">
              <a-form-item :label="fieldLabels.dateRange2">
                <a-time-picker
                  v-decorator="[
                    'dateRange2',
                    {rules: [{ required: true, message: '请输入' }]}
                  ]"
                  :style="{width: '100%'}"
                  placeholder="提醒时间"
                />
              </a-form-item>
            </a-col>
            <a-col :xl="{span: 6, offset: 2}" :lg="{span: 10}" :md="{span: 24}" :sm="24">
              <a-form-item :label="fieldLabels.type2">
                <a-select
                  v-decorator="[
                    'type2',
                    {rules: [{ required: true, message: '请选择仓库类型' }]}
                  ]"
                  placeholder="请选择仓库类型"
                >
                  <a-select-option value="private">私密</a-select-option>
                  <a-select-option value="public">公开</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
        
      </a-card>

      <a-card title="成员管理" class="card" :bordered="false">
        <a-form
          :form="form"
          hideRequiredMark
        >
        <a-form-item>
          <table-form
            v-decorator="[
              'members',
              {initialValue: tableData}
            ]"
          />
        </a-form-item>

        </a-form>
      </a-card>
      
    </div>
    <footer-toolbar>
      <span v-show="errorCount > 0" class="errorIcon">
        <a-popover
          title="表单校验信息"
          trigger="click"
          overlayClassName="errorPopover"
          :getPopupContainer="trigger => trigger.parentNode"
        >
          <template slot="content"> 
            <li v-for="(item, key) in errors"  :key="key" class="errorListItem" @click="scrollToField(key)">
              <a-icon type="cross-circle-o" class="errorIcon" />
              <div class="errorMessage">{{item['errors'][0].message}}</div>
              <div class="errorField">{{fieldLabels[key]}}</div>
            </li>
          </template>
          <a-icon type="exclamation-circle" />
        </a-popover>
        {{errorCount}}
      </span>
      <a-button type="primary" :loading="submitting" @click="handleSubmit">
        提交
      </a-button>
    </footer-toolbar>
  </div>
</template>

<script>
import PageHeader from '../../components/PageHeader'
import {fakeSubmitForm} from '@/services/api'
import TableForm from './TableForm'
import FooterToolbar from '@/components/FooterToolbar'

const fieldLabels = {
  name: '仓库名',
  url: '仓库域名',
  owner: '仓库管理员',
  approver: '审批人',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '任务名',
  url2: '任务描述',
  owner2: '执行人',
  approver2: '责任人',
  dateRange2: '生效日期',
  type2: '任务类型',
};
const tableData = [
  {
    key: '1',
    workId: '00001',
    name: 'John Brown',
    department: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    workId: '00002',
    name: 'Jim Green',
    department: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    workId: '00003',
    name: 'Joe Black',
    department: 'Sidney No. 1 Lake Park',
  },
];

export default {
  name: 'BasicForm',
  components: {
    PageHeader,
    TableForm,
    FooterToolbar,
  },
  data() {
    return {
      breadcrumbList: [
        {title: '首页'},
        {title: 'hahah'}
      ],
      form: this.$form.createForm(this),
      submitting: false,
      errors: null,
      errorCount: 0,
    }
  },
  computed: {
    fieldLabels() {
      return fieldLabels;
    },
    tableData() {
      return tableData;
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll(async (err, values) => {
        this.errors = err;
        this.errorCount = Object.keys(err).length;
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
      
    },
    getErrorInfo() {
      this.errors = this.form.getFieldsError();
      this.errorCount = Object.keys(this.errors).length
      if (!this.errors || this.errorCount == 0) {
        return false;
      } else {
        return true;
      }
    },
    scrollToField(fieldKey) {
      const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
      if (labelNode) {
        labelNode.scrollIntoView(true);
      }
    }
  }
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.card {
  margin-bottom: 24px;
}

.heading {
  margin: 0 0 16px 0;
  font-size: 14px;
  line-height: 22px;
}

.steps:global(.ant-steps) {
  max-width: 750px;
  margin: 16px auto;
}

.errorIcon {
  margin-right: 24px;
  color: @error-color;
  cursor: pointer;
  i {
    margin-right: 4px;
  }
}

.errorPopover {
  :global {
    .ant-popover-inner-content {
      min-width: 256px;
      max-height: 290px;
      padding: 0;
      overflow: auto;
    }
  }
}

.errorListItem {
  padding: 8px 16px;
  list-style: none;
  border-bottom: 1px solid @border-color-split;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: @primary-1;
  }
  &:last-child {
    border: 0;
  }
  .errorIcon {
    float: left;
    margin-top: 4px;
    margin-right: 12px;
    padding-bottom: 22px;
    color: @error-color;
  }
  .errorField {
    margin-top: 2px;
    color: @text-color-secondary;
    font-size: 12px;
  }
}

.editable {
  td {
    padding-top: 13px !important;
    padding-bottom: 12.5px !important;
  }
}

// custom footer for fixed footer toolbar
.advancedForm + div {
  padding-bottom: 64px;
}

.advancedForm {
  :global {
    .ant-form .ant-row:last-child .ant-form-item {
      margin-bottom: 24px;
    }
    .ant-table td {
      transition: none !important;
    }
  }
}

.optional {
  color: @text-color-secondary;
  font-style: normal;
}

</style>




