<template>
  <div>
    <a-form
      :form="form"
      class="stepForm"
    >
      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="付款账户"
      >
        <a-select
          v-decorator="[
            'payAccount',
            {
              initialValue: step.payAccount,
              rules: [{ required: true, message: '请选择付款账户' }]
            }
          ]"
          placeholder="test@example.com"
        >
          <a-select-option value="xzx_1943@163.com">
            xzx_1943@163.com
          </a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="收款账户"
      >
        <a-input-group :compact="true">
          <a-select
            defaultValue="alipay"
            :style="{width: '100px'}"
          >
            <a-select-option value="aplipay">
              支付宝
            </a-select-option>
            <a-select-option value="bank">
              银行账户
            </a-select-option>

          </a-select>
          <a-input
            v-decorator="[
              'receiverAccount',
              {
                initialValue: step.receiverAccount,
                rules: [
                  { required: true, message: '请输入收款人账户' },
                  { type: 'email', message: '账户名应为邮箱格式' },
                ],
              }
            ]"
            placeholder="test@example.com"
            :style="{width: 'calc(100% - 100px)'}"
          />
        </a-input-group>
      </a-form-item>
      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="收款人姓名"
      >
        <a-input
          v-decorator="[
            'receiverName',
            {
              initialValue: step.receiverName,
              rules: [
                { required: true, message: '请输入收款人姓名' },
              ],
            }
          ]"
          placeholder="请输入收款人姓名"
        />
      </a-form-item>
      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="转账金额"
      >
        <a-input
          v-decorator="[
            'amount',
            {
              initialValue: step.amount,
              rules: [
                { required: true, message: '请输入转账金额' },
                { 
                  pattern: /^(\d+)((?:\.\d+)?)$/,
                  message: '请输入合法金额数字',
                }
              ],
            }
          ]"
          placeholder="请输入金额"
          prefix="￥"
        />
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
      >
        <a-button type="primary" @click="triggerNext">下一步</a-button>
      </a-form-item>
    </a-form>
    <a-divider :style="{margin: '40px 0 24px'}"></a-divider>
    <div class="desc">
      <h3>说明</h3>
      <h4>转账到支付宝账户</h4>
      <p>
        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
      </p>
      <h4>转账到银行卡</h4>
      <p>
        如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。
      </p>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('form')
export default {
  name: 'Step1',
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
    ...mapState(['step'])
  },
  methods: {
    triggerNext() {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.commit('form/saveStepFormData', values);
          this.$router.push('/form/step-form/confirm');
        }
      })
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