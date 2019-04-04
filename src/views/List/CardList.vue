<template>
  <div>
    <page-header 
      :breadcrumbList="breadcrumbList"
      :style="{ margin: '-20px -24px 0' }"
      title="卡片列表"
    >
      <div slot="content" class="pageHeaderContent">
        <p>
          段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，
          提供跨越设计与开发的体验解决方案。
        </p>
        <div class="contentLink">
          <a>
            <a-icon type="clock-circle"></a-icon>
            快速开始
          </a>
          <a>
            <a-icon type="info-circle"></a-icon>
            产品简介
          </a>
          <a>
            <a-icon type="check-circle"></a-icon>
            产品文档
          </a>
        </div>
      </div>
      <div slot="extraContent" class="extraImg">
        <img
          alt="这是一个标题"
          src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"
        />
      </div>
    </page-header>
    <div class="cardList">
      <a-list 
        rowKey="id"
        :loading="loading"
        :grid="{ gutter: 24, lg: 3, md: 2, sm: 1, xs: 1 }"
        :dataSource="['', ...list]"
      >
        <a-list-item slot="renderItem" slot-scope="item, index" :key="item.id" v-if="item">
          <a-card hoverable class="card">
            <a slot="actions">操作一</a>
            <a slot="actions">操作二</a>
            <a-card-meta>
              <img slot="avatar" alt="" class="cardAvatar" :src="item.avatar" />
              <a slot="title">{{item.title}}</a>
              <div slot="description" class="desc">{{item.description}}</div>
            </a-card-meta>
          </a-card>
        </a-list-item>
        <a-list-item slot="renderItem" slot-scope="item, index" :key="item.id" v-else>
          <a-button type="dashed" class="newButton">
            <a-icon type="plus" /> 新建产品
          </a-button>
        </a-list-item>

      </a-list>
    </div>
  </div>
</template>

<script>
import PageHeader from '../../components/PageHeader';
import { createNamespacedHelpers } from 'vuex';
const {mapState} = createNamespacedHelpers('list')


export default {
  name: 'CardList',
  components: {
    PageHeader,
  },
  computed: {
    ...mapState(['list', 'loading'])
  },
  data() {
    return {
      breadcrumbList: [
        {title: '首页'},
        {title: '列表页'},
        {title: '标准列表'}
      ],
    }
  },
  mounted() {
    this.$store.dispatch('list/fetch', {count: 8})
  },
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';
@import '~@/utils/utils.less';

.cardList {
  margin-top: 24px;
  margin-bottom: -24px;

  .card {
    :global {
      .ant-card-meta-title {
        margin-bottom: 12px;
        & > a {
          display: inline-block;
          max-width: 100%;
          color: @heading-color;
        }
      }
      .ant-card-actions {
        background: #f7f9fa;
      }
      .ant-card-body:hover {
        .ant-card-meta-title > a {
          color: @primary-color;
        }
      }
    }
  }
  .item {
    height: 64px;
  }

  :global {
    .ant-list .ant-list-item-content-single {
      max-width: 100%;
    }
  }
}

.desc {
  position: relative;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 64px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.extraImg {
  width: 195px;
  margin-top: -60px;
  text-align: center;
  img {
    width: 100%;
  }
}

.newButton {
  width: 100%;
  height: 185px;
  border-radius: @border-radius-sm;
}

.cardAvatar {
  width: 48px;
  height: 48px;
  border-radius: 48px;
}

.cardDescription {
  .textOverflowMulti();
}

.pageHeaderContent {
  position: relative;
}

.contentLink {
  margin-top: 16px;
  a {
    margin-right: 32px;
    img {
      width: 24px;
    }
  }
  img {
    margin-right: 8px;
    vertical-align: middle;
  }
}

@media screen and (max-width: @screen-lg) {
  .contentLink {
    a {
      margin-right: 16px;
    }
  }
}
@media screen and (max-width: @screen-md) {
  .extraImg {
    display: none;
  }
}

@media screen and (max-width: @screen-sm) {
  .pageHeaderContent {
    padding-bottom: 30px;
  }
  .contentLink {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 1000px;
    a {
      margin-right: 16px;
    }
    img {
      margin-right: 4px;
    }
  }
}
</style>