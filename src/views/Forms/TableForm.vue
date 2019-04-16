<template>
  <div>
    <a-table
      :dataSource="data"
      :pagination="false"
      :columns="columns"
      :loading="loading"
      :rowClassName="(record) => (record.editable ? 'editable' : '')"
    >
      <div slot="name" slot-scope="text, record">
        <a-input
          v-if="record.editable"
          :value="text"
          autoFocus
          placeholder="成员姓名"
          @change="handleFieldChange($event, 'name', record.key)"
        />
        <div v-else >{{text}}</div>
      </div>
      <div slot="workId" slot-scope="text, record">
        <a-input
          v-if="record.editable"
          :value="text"
          autoFocus
          placeholder="工号"
          @change="handleFieldChange($event, 'workId', record.key)"
        />
        <div v-else >{{text}}</div>
      </div>
      <div slot="department" slot-scope="text, record">
        <a-input
          v-if="record.editable"
          :value="text"
          autoFocus
          placeholder="所属部门"
          @change="handleFieldChange($event, 'department', record.key)"
        />
        <div v-else >{{text}}</div>
      </div>
      <div slot="action" slot-scope="text, record">
        <div v-show="!(!!record.editable && loading)">
          <div v-if="record.editable">
              <span v-if="record.isNew">
                <a @click="saveRow($event, record.key)">添加</a>
                <a-divider type="vertical" />
                <a-popconfirm title="是否要删除此行？" @confirm="remove(record.key)" >
                  <a>删除</a>
                </a-popconfirm>
              </span>
              <span v-else>
                <a @click="saveRow($event, record.key)">保存</a>
                <a-divider type="vertical" />
                <a @click="cancel($event, record.key)">取消</a>
              </span>
          </div>
          <div v-else>
            <span>
              <a @click="toggleEditable($event, record.key)">编辑</a>
              <a-divider type="vertical" />
              <a-popconfirm title="是否要删除此行？" @confirm="remove(record.key)" >
                <a>删除</a>
              </a-popconfirm>
            </span>
          </div>
        </div>
      </div>
    </a-table>
    <a-button
      :style="{ width: '100%', marginTop: '16px', marginBottom: '8px' }"
      type="dashed"
      icon="plus"
      @click="newMember"
    >
      新增成员
    </a-button>
  </div>
</template>

<script>
export default {
  name: 'TableForm',
  props: {
    value: Array,
  },
  data() {
    return {
      data: this.value,
      loading: false,
      columns: [
        {
          dataIndex: 'name',
          title: '成员姓名',
          key: 'name',
          width: '20%',
          scopedSlots: {customRender: 'name'}
        },
        {
          dataIndex: 'workId',
          title: '工号',
          key: 'workId',
          width: '20%',
          scopedSlots: {customRender: 'workId'}
        },
        {
          dataIndex: 'department',
          title: '所属部门',
          key: 'department',
          width: '40%',
          scopedSlots: {customRender: 'department'}
        },
        {
          title: '操作',
          key: 'action',
          scopedSlots: {customRender: 'action'}
        },
      ],
      cacheOriginData: {},
      clickedCancel: false,
      index: 0,
    }
  },
  methods: {
    getRowByKey(key, newData) {
      return (newData || this.data).filter(item => item.key === key)[0];
    },
    toggleEditable(e, key) {
      e.preventDefault();
      const newData = [...this.data];
      const target = this.getRowByKey(key, newData);
      if (target) {
        // 进入编辑状态时保存原始数据
        if (!target.editable) {
          this.cacheOriginData[key] = { ...target };
        }
        target.editable = !target.editable;
        this.data = newData;
      }
    },
    remove(key) {
      let newData = this.data.filter(item => item.key !== key);
      this.data = newData;
      this.$emit('change', newData);
    },
    saveRow(e, key) {
      //e.persist();
      this.loading = true;
      setTimeout(() => {
        if (this.clickedCancel) {
          this.clickedCancel = false;
          return;
        }
        const target = this.getRowByKey(key) || {};
        if (!target.workId || !target.name || !target.department) {
          this.$message.error('请填写完整成员信息。');
          e.target.focus();
          this.loading = false;
          return;
        }
        delete target.isNew;
        this.toggleEditable(e, key);
        this.$emit('change', this.data);
        this.loading = false;
      }, 500);
    },
    cancel(e, key) {
      this.clickedCancel = true;
      e.preventDefault();
      const newData = this.data.map(item => ({ ...item }));
      const target = this.getRowByKey(key, newData);
      if (this.cacheOriginData[key]) {
        Object.assign(target, this.cacheOriginData[key]);
        delete this.cacheOriginData[key];
      }
      target.editable = false;
      this.data = newData;
      this.clickedCancel = false;
    },
    handleFieldChange(e, fieldName, key) {
      const newData = this.data.map(item => ({ ...item }));
      const target = this.getRowByKey(key, newData);
      if (target) {
        target[fieldName] = e.target.value;
        this.data = newData;
      }
    },
    newMember() {
      const newData = this.data.map(item => ({ ...item }));
      newData.push({
        key: `NEW_TEMP_ID_${this.index}`,
        workId: '',
        name: '',
        department: '',
        editable: true,
        isNew: true,
      });
      this.index += 1;
      this.data = newData;
    }
  }
}
</script>

<style lang="less">

</style>


