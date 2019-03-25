<template>
  <div class="result">
    <result 
      type="success"
      title="操作成功"
    >
      <div slot="description">预计两小时内到账</div>
      <div slot="extra" class="information">
        <a-row>
          <a-col :xs="24" :sm="8" class="label">
            付款账户：
          </a-col>
          <a-col :xs="24" :sm="16">
            {{step.payAccount}}
          </a-col>
        </a-row>
        <a-row>
          <a-col :xs="24" :sm="8" class="label">
            收款账户：
          </a-col>
          <a-col :xs="24" :sm="16">
            {{step.receiverAccount}}
          </a-col>
        </a-row>
        <a-row>
          <a-col :xs="24" :sm="8" class="label">
            收款人姓名：
          </a-col>
          <a-col :xs="24" :sm="16">
            {{step.receiverName}}
          </a-col>
        </a-row>
        <a-row>
          <a-col :xs="24" :sm="8" class="label">
            转账金额：
          </a-col>
          <a-col :xs="24" :sm="16">
            <span class="money">{{step.amount}}</span> 元
          </a-col>
        </a-row>
      </div>
      <div slot="actions">
        <a-button type="primary" @click="onFinish">
          再转一笔
        </a-button>
        <a-button>查看账单</a-button>
      </div>
    </result>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import {digitUppercase} from '@/utils/utils';
import Result from '@/components/Result';
const { mapState } = createNamespacedHelpers('form');

export default {
  name: 'Step3',
  components: {
    Result,
  },
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
    onFinish() {
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