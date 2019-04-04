<template>
  <div>
    <a-modal
      :visible="showUpdateModal"
      :width="640"
      title="规则配置"
      destroyOnClose
      @cancel="handleCancel"
    >
      <a-steps
        :style="{ marginBottom: '28px' }" 
        size="small" 
        :current='currentStep'
      >
        <a-step title="基本信息" />
        <a-step title="配置规则属性" />
        <a-step title="设定调度周期" />
      </a-steps>
      <a-form 
        :form="form"
      >
        <div v-if="currentStep == 0">
          <a-form-item
            key="name"
            :label-col="{ span: 7 }"
            :wrapper-col="{ span: 13 }"
            label="规则名称"
          >
            <a-input
              v-decorator="[
                'name',
                {
                  rules: [{ required: true, message: '请输入规则名称！' }],
                  initialValue: formVals.name,
                }
              ]"
              placeholder="请输入"
            />
          </a-form-item>
          <a-form-item
            key="desc"
            :label-col="{ span: 7 }"
            :wrapper-col="{ span: 13 }"
            label="规则描述"
          >
            <a-textarea
              v-decorator="[
                'desc',
                {
                  rules: [{ required: true,  message: '请输入至少五个字符的规则描述！', min: 5}],
                  initialValue: formVals.desc,
                }
              ]"
              :rows="4" 
              placeholder="请输入至少五个字符"
            />
          </a-form-item>
        </div>
        <div v-else-if="currentStep == 1">
          <a-form-item
            key="target"
            :label-col="{ span: 7 }"
            :wrapper-col="{ span: 13 }"
            label="规则名称"
          >
            <a-select
              v-decorator="[
                'target',
                {
                  initialValue: formVals.target,
                }
              ]"
              placeholder="请输入"
            >
              <a-select-option value="0">表一</a-select-option>
              <a-select-option value="1">表二</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item
            key="template"
            :label-col="{ span: 7 }"
            :wrapper-col="{ span: 13 }"
            label="规则模板"
          >
            <a-select
              v-decorator="[
                'template',
                {
                  initialValue: formVals.template,
                }
              ]"
              placeholder="请输入"
            >
              <a-select-option value="0">规则模板一</a-select-option>
              <a-select-option value="1">规则模板二</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item
            key="type"
            :label-col="{ span: 7 }"
            :wrapper-col="{ span: 13 }"
            label="规则类型"
          >
            <a-radio-group
              v-decorator="[
                'type',
                {
                  initialValue: formVals.type,
                }
              ]"
              placeholder="请输入"
            >
              <a-radio value="0">强</a-radio>
              <a-radio value="1">弱</a-radio>
            </a-radio-group>
          </a-form-item>
        </div>
        <div v-else>
          <a-form-item
            key="time"
            :label-col="{ span: 7 }"
            :wrapper-col="{ span: 13 }"
            label="规则类型"
          >
            <a-date-picker
              v-decorator="[
                'time',
                {
                   rules: [{ required: true, message: '请选择开始时间！' }]
                }
              ]"
              :style="{ width: '100%' }"
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="选择开始时间"
            />
          </a-form-item>
          <a-form-item
            key="frequency"
            :label-col="{ span: 7 }"
            :wrapper-col="{ span: 13 }"
            label="调度周期"
          >
            <a-select
              v-decorator="[
                'frequency',
                {
                  initialValue: formVals.frequency,
                }
              ]"
              placeholder="请输入"
            >
              <a-select-option value="month">月</a-select-option>
              <a-select-option value="week">周</a-select-option>
            </a-select>
          </a-form-item>
        </div>
      </a-form>

      <div slot="footer">
        <div v-if="currentStep == 0">
          <a-button key="cancel" @click="handleCancel">
            取消
          </a-button>
          <a-button key="forward" type="primary" @click="handleNext">
            下一步
          </a-button>
        </div>
        <div v-else-if="currentStep == 1">
          <a-button key="back" :style="{ float: 'left' }" @click="backward">
            上一步
          </a-button>
          <a-button key="cancel" @click="handleCancel">
            取消
          </a-button>
          <a-button key="forward" type="primary" @click="handleNext">
            下一步
          </a-button>
        </div>
        <div v-else>
          <a-button key="back" :style="{ float: 'left' }" @click="backward">
            上一步
          </a-button>
          <a-button key="cancel" @click="handleCancel">
            取消
          </a-button>
          <a-button key="forward" type="primary" @click="handleNext">
            完成
          </a-button>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'UpdateRuleModal',
  props: {
    showUpdateModal: Boolean,
    values: Object,
  },
  data() {
    return {
      currentStep: 0,
      form: this.$form.createForm(this),
      formVals: {
        name: this.values.name,
        desc: this.values.desc,
        key: this.values.key,
        target: '0',
        template: '0',
        type: '1',
        time: '',
        frequency: 'month',
      }
    }
  },
  methods: {
    handleCancel() {
      this.$emit('cancel');
    },

    handleNext() {
      const {formVals: oldValue} = this;
      this.form.validateFields((err, fieldValue) => {

        if (err) return
        const formVals = {...oldValue, ...fieldValue};
        this.formVals = formVals;
        console.log(this.formVals)
        if (this.currentStep < 2) {
          this.currentStep = this.currentStep + 1;
        } else {
          this.$emit('submit', {...formVals, time: fieldValue['time'].format('YYYY-MM-DD HH:mm:ss')})
        }
      })

    },
    backward() {
      this.currentStep -= 1;
    }
  }
}
</script>

<style lang="less">

</style>

