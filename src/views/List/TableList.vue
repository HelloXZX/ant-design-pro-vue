<template>
  <div>
    <page-header 
      title="查询列表"
      :breadcrumbList="breadcrumbList"
      :style="{ margin: '-20px -24px 0' }"
    >
    </page-header>
    <div :style="{ margin: '24px 0 0 0' }">
      <a-card :bordered="false">
        <div class="tableList">
          <div class="tableListForm">
            <a-form v-if="isCollapse" @submit="handleSearch" :form="form" layout="inline">
              <a-row :gutter="{ md: 8, lg: 24, xl: 48 }">
                <a-col :md="8" :sm="24">
                  <a-form-item
                    :wrapperCol="{span: 19}"
                    label="规则名称"
                  >
                    <a-input
                      v-decorator="[
                        'name',
                      ]"
                      placeholder="请输入"
                    />
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item
                    :wrapperCol="{span: 19}" 
                    label="使用状态"
                  >
                    <a-select
                      v-decorator="[
                        'status',
                      ]"
                      placeholder="请选择" 
                      :style="{width: '100%'}"
                    >
                      <a-select-option value="0">关闭</a-select-option>
                      <a-select-option value="1">运行中</a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <span class="submitButtons">
                    <a-button type="primary" htmlType="submit">
                      查询
                    </a-button>
                    <a-button :style="{ marginLeft: '8px' }" @click="handleFormReset">
                      重置
                    </a-button>
                    <a :style="{ marginLeft: '8px' }" @click="isCollapse = false;">
                      展开 <a-icon type="down" />
                    </a>
                  </span>
                </a-col>
              </a-row>
            </a-form>
            <a-form v-else  @submit="handleSearch" :form="form" layout="inline">
              <a-row :gutter="{ md: 8, lg: 24, xl: 48 }">
                <a-col :md="8" :sm="24">
                  <a-form-item
                    :wrapperCol="{span: 19}"
                    label="规则名称"
                  >
                    <a-input
                      v-decorator="[
                        'name',
                      ]"
                      placeholder="请输入"
                    />
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item
                    :wrapperCol="{span: 19}" 
                    label="使用状态"
                  >
                    <a-select
                      v-decorator="[
                        'status',
                      ]"
                      placeholder="请选择" 
                      :style="{width: '100%'}"
                    >
                      <a-select-option value="0">关闭</a-select-option>
                      <a-select-option value="1">运行中</a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item
                    :wrapperCol="{span: 19}"
                    label="调用次数"
                  >
                    <a-input-number
                      v-decorator="[
                        'number',
                      ]"
                      placeholder="请输入"
                      :style="{width: '100%'}"
                    />
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row :gutter="{ md: 8, lg: 24, xl: 48 }">
                <a-col :md="8" :sm="24">
                  <a-form-item
                    :wrapperCol="{span: 19}"
                    label="更新日期"
                  >
                    <a-date-picker
                      v-decorator="[
                        'updatedAt',
                      ]"
                      placeholder="请输入更新日期"
                      :style="{width: '100%'}"
                    />
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item
                    :wrapperCol="{span: 19}" 
                    label="使用状态"
                  >
                    <a-select
                      v-decorator="[
                        'status',
                      ]"
                      placeholder="请选择" 
                      :style="{width: '100%'}"
                    >
                      <a-select-option value="0">关闭</a-select-option>
                      <a-select-option value="1">运行中</a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
                <a-col :md="8" :sm="24">
                  <a-form-item
                    :wrapperCol="{span: 19}" 
                    label="使用状态"
                  >
                    <a-select
                      v-decorator="[
                        'status',
                      ]"
                      placeholder="请选择" 
                      :style="{width: '100%'}"
                    >
                      <a-select-option value="0">关闭</a-select-option>
                      <a-select-option value="1">运行中</a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
              </a-row>
              <div :style="{ overflow: 'hidden' }">
                <div :style="{ marginBottom: '24px' }">
                  <a-button type="primary" htmlType="submit">
                    查询
                  </a-button>
                  <a-button :style="{ marginLeft: '8px' }" @click="handleFormReset">
                    重置
                  </a-button>
                  <a :style="{ marginLeft: '8px' }" @click="isCollapse = true;">
                    收起 <a-icon type="up" />
                  </a>
                </div>
              </div>
            </a-form>
          </div>
          <div class="tableListOperator">
            <a-button icon="plus" type="primary" @click="showNewModal = true" >
              新建
            </a-button>
            <span v-show="selectedRows.length > 0">
              <a-button>批量操作</a-button>
              <a-dropdown>
                <a-menu slot="overlay" @click="handleMenuClick" :selectedKeys="[]">
                  <a-menu-item key="remove">删除</a-menu-item>
                  <a-menu-item key="approval">批量审批</a-menu-item>
                </a-menu>
                <a-button>
                  更多操作 <a-icon type="down" />
                </a-button>
              </a-dropdown>
            </span>
          </div>
          <standard-table 
            :data="data" 
            :columns="columns"
            :selectedRows="selectedRows"
            :loading="loading"
            @selectRow="handleSelectRows"
            @change="handleStandardTableChange"
          />
        </div>

      </a-card>
    </div>
    <a-modal
      :visible="showNewModal"
      title="新建规则"
      destroyOnClose
      @cancel="showNewModal = false"
      @ok="handleAddRule"
    >
      <a-form
        :form="addForm"        
      >
        <a-form-item
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 15 }"
          label="描述"
        >
          <a-input
            v-decorator="[
              'desc',
              {rules: [{ required: true, message: '请输入至少五个字符的规则描述！', min: 5 }]}
            ]"
            placeholder="请输入"
          ></a-input>
        </a-form-item>
      </a-form>
    </a-modal>
    <update-rule-modal
      :showUpdateModal="showUpdateModal"
      :values="updateValues"
      @cancel="showUpdateModal = false"
      @submit="handleUpdate"
      :key="updateValues.key"
    />
  </div>
</template>

<script>
import PageHeader from '../../components/PageHeader'
import StandardTable from '../../components/StandardTable'
import UpdateRuleModal from './UpdateRuleModal'
import moment from 'moment'
import {createNamespacedHelpers} from 'vuex'
import { Badge } from 'ant-design-vue'
const {mapState} = createNamespacedHelpers('rule')

const getValue = obj =>
  Object.keys(obj)
    .map(key => obj[key])
    .join(',');
const statusMap = ['default', 'processing', 'success', 'error'];
const status = ['关闭', '运行中', '已上线', '异常'];

export default {
  name: 'TabelList',
  components: {
    PageHeader,
    StandardTable,
    UpdateRuleModal
  },
  data() {
    return {
      breadcrumbList: [
        {title: '首页'},
        {title: '查询列表'}
      ],
      columns:  [
        {
          title: '规则名称',
          dataIndex: 'name',
        },
        {
          title: '描述',
          dataIndex: 'desc',
        },
        {
          title: '服务调用次数',
          dataIndex: 'callNo',
          sorter: true,
          customRender: val => `${val} 万`,
          needTotal: true,
        },
        {
          title: '状态',
          dataIndex: 'status',
          filters: [
          {
            text: status[0],
            value: 0,
          },
          {
            text: status[1],
            value: 1,
          },
          {
            text: status[2],
            value: 2,
          },
          {
            text: status[3],
            value: 3,
          }],
          onFilter: (value, record) => {
            return record.status === value;
            console.log(value);
            console.log(record);
          },
          customRender: (val) => {
            return <Badge status={statusMap[val]} text={status[val]} />
          },
        },
        {
          title: '上次调度时间',
          dataIndex: 'updatedAt',
          sorter: true,
          customRender: val => <span>{moment(val).format('YYYY-MM-DD HH:mm:ss')}</span>,
        },
        {
          title: '操作',
          customRender: (text, record) => (
            <div>
              <a onClick={() => this.handleUpdateModalVisible(true, record)}>配置</a>
              <a-divider type="vertical" />
              <a href="">订阅警报</a>
            </div>
          ),
        },
      ],
      selectedRows: [],
      isCollapse: true, // 是否折叠
      form: this.$form.createForm(this),
      addForm: this.$form.createForm(this),
      showNewModal: false,
      showUpdateModal: false,
      updateValues: {},
      formValues: {},
    }
  },
  computed: {
    ...mapState(['data', 'loading'])
  },
  methods: {
    handleSelectRows(rows) {
      this.selectedRows = rows;
    },
    handleStandardTableChange(pagination, filtersArg, sorter) {

      const filters = Object.keys(filtersArg).reduce((obj, key) => {
        const newObj = { ...obj };
        newObj[key] = getValue(filtersArg[key]);
        return newObj;
      }, {});
      const params = {
        currentPage: pagination.current,
        pageSize: pagination.pageSize,
        ...filters,
      };
      if (sorter.field) {
        params.sorter = `${sorter.field}_${sorter.order}`;
      }
      this.$store.dispatch('rule/fetch', params)
    },
    handleMenuClick(e) {
      const { selectedRows } = this;
      if (selectedRows.length === 0) return;
      if (e.key === 'remove') {
        this.$store.dispatch('rule/remove', {
          key: selectedRows.map(row => row.key)
        }).then(() => {
          this.selectedRows = [];
        })
      }
    },
    handleFormReset() {
      this.form.resetFields();
      this.$store.dispatch('rule/fetch', {})
    },
    handleSearch(e) {
      e.preventDefault();

      this.form.validateFields((err, fieldsValue) => {
        if (err) return;
        console.log(fieldsValue);
        const values = {
          ...fieldsValue,
          updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
        };
        this.formValues = values;
        this.$store.dispatch('rule/fetch', values);
      });
    },
    handleAddRule() {
      this.addForm.validateFields((err, fieldsValue) => {
        if (err) return;
        this.addForm.resetFields();
        this.$store.dispatch('rule/add', fieldsValue).then(() => {
          this.showNewModal = false;
        });
      })
    },
    handleUpdateModalVisible(visible, record) {
      this.showUpdateModal = visible;
      this.updateValues = record;
    },
    handleUpdate(fields) {
      console.log(fields);
      this.$store.dispatch('rule/update', {
        query: this.formValues,
        body: {
          name: fields.name,
          desc: fields.desc,
          key: fields.key,
        }
      }).then(() => {
        this.showUpdateModal = false;
      })
    }
  },
  mounted() {
    this.$store.dispatch('rule/fetch');
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';
@import '~@/utils/utils.less';

.tableList {
  .tableListOperator {
    margin-bottom: 16px;
    button {
      margin-right: 8px;
    }
  }
}

.tableListForm {
  :global {
    .ant-form-item {
      display: flex;
      margin-right: 0;
      margin-bottom: 24px;
      > .ant-form-item-label {
        width: auto;
        padding-right: 8px;
        line-height: 32px;
      }
      .ant-form-item-control {
        line-height: 32px;
      }
    }
    .ant-form-item-control-wrapper {
      flex: 1;
    }
  }
  .submitButtons {
    display: block;
    margin-bottom: 24px;
    white-space: nowrap;
  }
}

@media screen and (max-width: @screen-lg) {
  .tableListForm :global(.ant-form-item) {
    margin-right: 24px;
  }
}

@media screen and (max-width: @screen-md) {
  .tableListForm :global(.ant-form-item) {
    margin-right: 8px;
  }
}
</style>


