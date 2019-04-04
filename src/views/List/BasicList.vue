<template>
  <div>
    <page-header 
      :breadcrumbList="breadcrumbList"
      :style="{ margin: '-20px -24px 0' }"
    ></page-header>
    <div class="standardList">
      <a-card :bordered="false">
        <a-row>
          <a-col :sm="8" :xs="24">
            <info title="我的待办" value="8个任务" bordered />
          </a-col>
          <a-col :sm="8" :xs="24">
            <info title="本周任务平均处理时间" value="32分钟" bordered />
          </a-col>
          <a-col :sm="8" :xs="24">
            <info title="本周完成任务数" value="24个任务" />
          </a-col>
        </a-row>
      </a-card>

      <a-card
        class="listCard"
        :bordered="false"
        title="标准列表"
        :style="{ marginTop: '24px' }"
      >
        <div class="extraContent" slot="extra">
          <a-radio-group defaultValue="all">
            <a-radio-button value="all">全部</a-radio-button>
            <a-radio-button value="progress">进行中</a-radio-button>
            <a-radio-button value="waiting">等待中</a-radio-button>
          </a-radio-group>
          <a-input-search class="extraContentSearch" placeholder="请输入"></a-input-search>
        </div>
        <a-button 
          type="dashed" 
          :style="{width: '100%', marginBottom: '8px' }"
          icon="plus"
          @click="showModal"
        >
          添加
        </a-button>
        <a-list :dataSource="list" :pagination="pagination">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-list-item-meta :description="item.subDescription">
              <a slot="title" :href="item.href">{{item.title}}</a>
              <a-avatar slot="avatar" :src="item.logo" shape="square" size="large" />
            </a-list-item-meta>
            <a slot="actions">编辑</a>
            <a-dropdown slot="actions">
              <a-menu slot="overlay">
                <a-menu-item key="edit">编辑</a-menu-item>
                <a-menu-item key="delete">删除</a-menu-item>
              </a-menu>
              <a>更多<a-icon type="down"/></a>
            </a-dropdown>
            <div class="listContent">
              <div class="listContentItem">
                <span>Owner</span>
                <p>{{item.owner}}</p>
              </div>
              <div class="listContentItem">
                <span>开始时间</span>
                <p>{{moment(item.createdAt).format('YYYY-MM-DD HH:mm')}}</p>
              </div>
              <div class="listContentItem">
                <a-progress :percent="item.percent" :status="item.status" :strokeWidth="6" :style="{ width: '180px' }" />
              </div>
            </div>
          </a-list-item>
        </a-list>
      </a-card>
    </div>
    <a-modal
      :title="done? null : `任务${current.id ? '编辑' : '添加'}`"
      class="standardListForm"
      :width="640"
      :bodyStyle="done? {padding: '72px 0'} : {padding: '28px 0 0'}"
      destroyOnClose
      :visible="visible"
      :footer="done?null:undefined"
      okText="保存"
      @cancel="done?handleDone():handleCancel()"
      @ok="handleSubmit"
    >

      <div>dfsdfsf</div>
    </a-modal>
  </div>
</template>

<script>
import Vue from 'vue'
import {createNamespacedHelpers} from 'vuex'
import moment from 'moment'
import PageHeader from '../../components/PageHeader'
const {mapState} = createNamespacedHelpers('list')

const Info = Vue.component('info', {
  functional: true,
  props: {
    title: String,
    value: String,
    bordered: Boolean,
  },
  render(h, context) {
    console.log(context);
    return (
      <div class="headerInfo">
        <span>{context.props.title}</span>
        <p>{context.props.value}</p>
        {context.props.bordered && <em />}
      </div>
    )
  }
})

export default {
  name: 'BasiclList',
  components: {
    PageHeader,
  },
  data() {
    return {
      breadcrumbList: [
        {title: '首页'},
        {title: '列表页'},
        {title: '标准列表'}
      ],
      pagination: {
        showSizeChanger: true,
        showQuickJumper: true,
        pageSize: 5,
        total: 50,
      },
      done: false,
      visible: false,
      current: {},
    }
  },
  computed: {
    ...mapState(['list', 'loading'])
  },
  mounted() {
    this.$store.dispatch('list/fetch', {count: 5})
  },
  methods: {
    moment,
    showModal() {
      this.visible = true;
      this.current = {};
    },
    handleDone() {
      this.done = false;
      this.visible = false;
    },
    handleSubmit() {

    },
    handleCancel() {
      this.visible = false;
    }
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';
@import '~@/utils/utils.less';

.standardList {
  margin-top: 24px;
  :global {
    .ant-card-head {
      border-bottom: none;
    }
    .ant-card-head-title {
      padding: 24px 0;
      line-height: 32px;
    }
    .ant-card-extra {
      padding: 24px 0;
    }
    .ant-list-pagination {
      margin-top: 24px;
      text-align: right;
    }
    .ant-avatar-lg {
      width: 48px;
      height: 48px;
      line-height: 48px;
    }
  }
  .headerInfo {
    position: relative;
    text-align: center;
    & > span {
      display: inline-block;
      margin-bottom: 4px;
      color: @text-color-secondary;
      font-size: @font-size-base;
      line-height: 22px;
    }
    & > p {
      margin: 0;
      color: @heading-color;
      font-size: 24px;
      line-height: 32px;
    }
    & > em {
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 56px;
      background-color: @border-color-split;
    }
  }
  .listContent {
    font-size: 0;
    .listContentItem {
      display: inline-block;
      margin-left: 40px;
      color: @text-color-secondary;
      font-size: @font-size-base;
      vertical-align: middle;
      > span {
        line-height: 20px;
      }
      > p {
        margin-top: 4px;
        margin-bottom: 0;
        line-height: 22px;
      }
    }
  }
  .extraContentSearch {
    width: 272px;
    margin-left: 16px;
  }
}

@media screen and (max-width: @screen-xs) {
  .standardList {
    :global {
      .ant-list-item-content {
        display: block;
        flex: none;
        width: 100%;
      }
      .ant-list-item-action {
        margin-left: 0;
      }
    }
    .listContent {
      margin-left: 0;
      & > div {
        margin-left: 0;
      }
    }
    .listCard {
      :global {
        .ant-card-head-title {
          overflow: visible;
        }
      }
    }
  }
}

@media screen and (max-width: @screen-sm) {
  .standardList {
    .extraContentSearch {
      width: 100%;
      margin-left: 0;
    }
    .headerInfo {
      margin-bottom: 16px;
      & > em {
        display: none;
      }
    }
  }
}

@media screen and (max-width: @screen-md) {
  .standardList {
    .listContent {
      & > div {
        display: block;
      }
      & > div:last-child {
        top: 0;
        width: 100%;
      }
    }
  }
  .listCard {
    :global {
      .ant-radio-group {
        display: block;
        margin-bottom: 8px;
      }
    }
  }
}

@media screen and (max-width: @screen-lg) and (min-width: @screen-md) {
  .standardList {
    .listContent {
      & > div {
        display: block;
      }
      & > div:last-child {
        top: 0;
        width: 100%;
      }
    }
  }
}

@media screen and (max-width: @screen-xl) {
  .standardList {
    .listContent {
      & > div {
        margin-left: 24px;
      }
      & > div:last-child {
        top: 0;
      }
    }
  }
}

@media screen and (max-width: 1400px) {
  .standardList {
    .listContent {
      text-align: right;
      & > div:last-child {
        top: 0;
      }
    }
  }
}

.standardListForm {
  :global {
    .ant-form-item {
      margin-bottom: 12px;
      &:last-child {
        margin-bottom: 32px;
        padding-top: 4px;
      }
    }
  }
}

.formResult {
  width: 100%;
  [class^='title'] {
    margin-bottom: 8px;
  }
}
</style>