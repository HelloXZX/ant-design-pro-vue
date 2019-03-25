<template>
  <div>
    <a-form
      :form="form"
      class="stepForm"
    >
      <a-alert
        closable
        showIcon
        message="确认转账后，资金将直接打入对方账户，无法退回。"
        :style="{ marginBottom: '24px' }"
      ></a-alert>
      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="付款账户"
      >
        {{step.payAccount}}
      </a-form-item>
      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="收款账户"
      >
        {{step.receiverAccount}}
      </a-form-item>
      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="收款人姓名"
      >
        {{step.receiverName}}
      </a-form-item>
      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="转账金额"
      >
        <span class="money">{{step.amount}}</span>
        <span class="uppercase">（{{digitUppercase(step.amount)}}）</span>
      </a-form-item>
      <a-divider style="{margin: '24px 0'}" />
      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="支付密码"
      >
        <a-input
          v-decorator="[
            'password',
            {
              initialValue: '123456',
              rules: [
                {
                  required: true,
                  message: '需要支付密码才能进行支付',
                },
              ]
            },
          ]"
          type="password"
          autoComplete="off"
          :style="{width: '100%'}"
        ></a-input>
      </a-form-item>
      <a-form-item
        :wrapperCol="{
          xs: { span: 24, offset: 0 },
          sm: {
            span: wrapperCol.span,
            offset: labelCol.span,
          },
        }"
        label=""
        :style="{ marginBottom: '8px' }"
      >
        <a-button type="primary" @click="triggerSubmit" :loading="loading">提交</a-button>
        <a-button :style="{marginLeft: '8px'}" @click="triggerPrev">上一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import {digitUppercase} from '@/utils/utils'
const { mapState } = createNamespacedHelpers('form');
export default {
  name: 'Step2',
  data() {
    return {
      labelCol: {
        span: 5,
      },
      wrapperCol: {
        span: 19,
      },
      form: this.$form.createForm(this),
    }
  },
  computed: {
    ...mapState(['step', 'loading'])
  },
  methods: {
    digitUppercase,
    triggerSubmit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('hhhhh')
          this.$store.dispatch('form/submitStepForm', {...this.step, ...values});
        }
      })
    },
    triggerPrev() {
      this.$router.push('/form/step-form/info');
    }
  }
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.stepForm {
  max-width: 500px;
  margin: 40px auto 0;
}

.stepFormText {
  margin-bottom: 24px;
  :global {
    .ant-form-item-label,
    .ant-form-item-control {
      line-height: 22px;
    }
  }
}

.result {
  max-width: 560px;
  margin: 0 auto;
  padding: 24px 0 8px;
}

.desc {
  padding: 0 56px;
  color: @text-color-secondary;
  h3 {
    margin: 0 0 12px 0;
    color: @text-color-secondary;
    font-size: 16px;
    line-height: 32px;
  }
  h4 {
    margin: 0 0 4px 0;
    color: @text-color-secondary;
    font-size: 14px;
    line-height: 22px;
  }
  p {
    margin-top: 0;
    margin-bottom: 12px;
    line-height: 22px;
  }
}

@media screen and (max-width: @screen-md) {
  .desc {
    padding: 0;
  }
}

.information {
  line-height: 22px;
  :global {
    .ant-row:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  .label {
    padding-right: 8px;
    color: @heading-color;
    text-align: right;
    @media screen and (max-width: @screen-sm) {
      text-align: left;
    }
  }
}

.money {
  font-weight: 500;
  font-size: 20px;
  font-family: 'Helvetica Neue', sans-serif;
  line-height: 14px;
}

.uppercase {
  font-size: 12px;
}

</style>