<template>
  <div class="standardTable">
    <div class="tableAlert">
      <a-alert type="info" showIcon>
        <div slot="message">
          已选择 <a :style="{fontWeight: 600}">{{selectedRows.length}}</a> 项&nbsp;&nbsp;
          <span v-for="item in needTotalList" :key="item.dataIndex" :style="{ marginLeft: 8 }" >
            {{item.title}}
            总计&nbsp;
            <span :style="{ fontWeight: 600 }">
              {{item.customRender? item.customRender(item.total) :item.total}}
            </span>
          </span>
          <a @click="cleanSelectedKeys" :style="{ marginLeft: 24 }">
            清空
          </a>
        </div>
      </a-alert>
    </div>
    <a-table
      :columns="columns"
      :dataSource="data.list"
      :selectedRows="selectedRows"
      :rowSelection="rowSelection"
      :loading="loading"
      @change="handleTableChange"
    ></a-table>
  </div>
</template>

<script>
export default {
  name: 'StandardTable',
  props: {
    columns: {
      type: Array,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: function() {
        return {}
      }
    },
    selectedRows: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      needTotalList: [],
      selectedRowKeys: [],
    }
  },
  computed: {
    rowSelection() {
      const { selectedRowKeys } = this;
      return {
        selectedRowKeys,
        onChange: this.handleRowSelectChange,
        getCheckboxProps: record => ({
          props: {
            disabled: record.disabled
          }
        })
      }
    },
  },
  watch: {
    columns(newVal,oldVal) {
      const totalList = [];
      this.columns.forEach(column => {
        if (column.needTotal) {
          totalList.push({...column, total: 0})
        }
      });
      this.needTotalList = totalList;
    },
    selectedRows(newData, oldData) {
      if (newData.length === 0) {
        const totalList = [];
        this.columns.forEach(column => {
          if (column.needTotal) {
            totalList.push({...column, total: 0})
          }
        });
        this.needTotalList = totalList;
        this.selectedRowKeys = [];
      }
    }
  },
  methods: {
    handleRowSelectChange(selectedRowKeys, selectedRows) {
      let { needTotalList } = this;
      needTotalList = needTotalList.map(item => ({
        ...item,
        total: selectedRows.reduce((sum, val) => sum + parseFloat(val[item.dataIndex], 10), 0),
      }));
      this.$emit('selectRow', selectedRows)
      this.selectedRowKeys = selectedRowKeys;
      this.needTotalList = needTotalList;
    },
    cleanSelectedKeys() {
      this.handleRowSelectChange([], []);
    },
    handleTableChange(pagination, filters, sorter) {
      this.$emit('change', pagination, filters, sorter)
    }
  },
  mounted() {
    const totalList = [];
    this.columns.forEach(column => {
      if (column.needTotal) {
        totalList.push({...column, total: 0})
      }
    });
    this.needTotalList = totalList;
  }
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.standardTable {
  :global {
    .ant-table-pagination {
      margin-top: 24px;
    }
  }

  .tableAlert {
    margin-bottom: 16px;
  }
}
</style>

