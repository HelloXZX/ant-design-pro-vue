<template>
  <div>
    <page-header 
      :breadcrumbList="breadcrumbList"
      :style="{ margin: '-20px -24px 0' }"
      title="卡片列表"
    >
      <div slot="content" class="pageHeaderContent">
        <div class="avatar">
          <a-avatar size="large" src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
        </div>
        <div class="content">
          <div class="contentTitle">
            早安，
            XZX
            ，祝你开心每一天！
          </div>
          <div>
            前端工程师 | 某某某某－某某某事业群－某某平台部－某某技术部门
          </div>
        </div>
      </div>
      <div slot="extraContent" class="extraContent">
        <div class="statItem">
          <p>项目数</p>
          <p>56</p>
        </div>
        <div class="statItem">
          <p>团队内排名</p>
          <p>
            8<span> / 24</span>
          </p>
        </div>
        <div class="statItem">
          <p>项目访问</p>
          <p>2,223</p>
        </div>
      </div>
    </page-header>
    <a-row :gutter="24" :style="{marginTop: '24px'}">
      <a-col :xl="16" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card
          class="projectList"
          :style="{marginBottom: '24px'}"
          title="进行中的项目"
          :bordered="false"
          :bodyStyle="{padding: 0}"
        >
          <router-link slot="extra" to="/">全部项目</router-link>
          <a-card-grid v-for="(item, index) in notice" :key="index">
            <a-card
              :bodyStyle="{padding: 0}"
              :bordered="false"
            >
              <a-card-meta>
                <div slot="title" class="cardTitle">
                  <a-avatar size="small" :src="item.logo" />
                  <router-link :to="item.href">{{item.title}}</router-link>
                </div>
                <div class="description" slot="description">{{item.description}}</div>
              </a-card-meta>
              <div class="projectItemContent">
                <router-link :to="item.memberLink">{{item.member || ''}}</router-link>
                  <span v-show="item.updatedAt" class="datetime" :title="item.updatedAt">
                    {{moment(item.updatedAt).fromNow()}}
                  </span>
              </div>
            </a-card>
          </a-card-grid>
        </a-card>

        <a-card
          :bodyStyle="{ padding: 0 }"
          :bordered="false"
          class="activeCard"
          title="动态"
        >
          <a-list size="large">
             <div class="activitiesList">
                <a-list-item v-for="item in list" :key="item.id">
                  <a-list-item-meta>
                    <a-avatar slot="avatar" :src="item.user.avatar" />
                    <span slot="title">
                      <a class="username">{{item.user.name}}</a>
                      &nbsp;
                      <span class="event">{{
                        item.template.split(/@\{([^{}]*)\}/gi).map(key => {
                          if (item[key]) {
                            return (
                                item[key].name
                            );
                          }
                          return key;
                        }).toString().replace(/,/g,'')
                      }}</span>
                    </span>
                    <span slot="description" class="datetime" :title="item.updatedAt">
                      {{moment(item.updatedAt).fromNow()}}
                    </span>
                  </a-list-item-meta>
                </a-list-item>
             </div>
          </a-list>
        </a-card>
      </a-col>
      <a-col :xl="8" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card
          :style="{ marginBottom: '24px' }"
          title="快速开始 / 便捷导航"
          :bordered="false"
          :bodyStyle="{ padding: 0 }"
        >
          <Editable-Link-Group :links="links" />
        </a-card>
        <a-card
          :style="{ marginBottom: '24px' }"
          title="XX 指数"
          :bordered="false"
        >
          <div class="chart">
            <radar hasLegend :height="300" :data="data.radarData" mountId="radar" />
          </div>
        </a-card>
        <a-card
          :style="{ marginBottom: '24px' }"
          :bodyStyle="{ paddingTop: '12px', paddingBottom: '12px' }"
          title="团队"
          :bordered="false"
        >
          <div class="members">
            <a-row :gutter="48">
                <a-col v-for="item in notice" :span="12" :key="`members-item-${item.id}`">
                  <router-link :to="item.href">
                    <a-avatar :src="item.logo" size="small" />
                    <span class="member">{{item.member}}</span>
                  </router-link>
                </a-col>
            </a-row>
          </div>
        </a-card>

      </a-col>
    </a-row>

  </div>
</template>

<script>
import PageHeader from '../../components/PageHeader';
import EditableLinkGroup from '@/components/EditableLinkGroup';
import Radar from '@/components/Charts/Radar';
import {createNamespacedHelpers} from 'vuex'
import moment from 'moment'

const userMapState = createNamespacedHelpers('user').mapState
const projectMapState = createNamespacedHelpers('project').mapState
const activitiesMapState = createNamespacedHelpers('activities').mapState
const chartMapState = createNamespacedHelpers('chart').mapState

const links = [
  {
    title: '操作一',
    href: '',
  },
  {
    title: '操作二',
    href: '',
  },
  {
    title: '操作三',
    href: '',
  },
  {
    title: '操作四',
    href: '',
  },
  {
    title: '操作五',
    href: '',
  },
  {
    title: '操作六',
    href: '',
  },
];

export default {
  name: 'Workplace',
  components: {
    PageHeader,
    EditableLinkGroup,
    Radar,
  },
  data() {
    return {
      breadcrumbList: [
        {title: '首页'},
        {title: 'Dashboard'},
        {title: '工作台'}
      ],
      links,
    }
  },
  computed: {
    ...userMapState(['currentUser']),
    ...projectMapState(['notice']),
    ...chartMapState(['data']),
    ...activitiesMapState(['list'])
  },
  mounted() {
    this.$store.dispatch('user/fetchCurrent');
    this.$store.dispatch('project/fetchNotice');
    this.$store.dispatch('activities/fetchList');
    this.$store.dispatch('chart/fetch');
  },
  methods: {
    moment,
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';
@import '~@/utils/utils.less';

.description {
      height: 44px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.45);
    line-height: 22px;
}

.activitiesList {
  padding: 0 24px 8px 24px;
  .username {
    color: @text-color;
  }
  .event {
    font-weight: normal;
  }
}

.pageHeaderContent {
  display: flex;
  .avatar {
    flex: 0 1 72px;
    margin-bottom: 8px;
    & > span {
      display: block;
      width: 72px;
      height: 72px;
      border-radius: 72px;
    }
  }
  .content {
    position: relative;
    top: 4px;
    flex: 1 1 auto;
    margin-left: 24px;
    color: @text-color-secondary;
    line-height: 22px;
    .contentTitle {
      margin-bottom: 12px;
      color: @heading-color;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
    }
  }
}

.extraContent {
  .clearfix();

  float: right;
  white-space: nowrap;
  .statItem {
    position: relative;
    display: inline-block;
    padding: 0 32px;
    > p:first-child {
      margin-bottom: 4px;
      color: @text-color-secondary;
      font-size: @font-size-base;
      line-height: 22px;
    }
    > p {
      margin: 0;
      color: @heading-color;
      font-size: 30px;
      line-height: 38px;
      > span {
        color: @text-color-secondary;
        font-size: 20px;
      }
    }
    &::after {
      position: absolute;
      top: 8px;
      right: 0;
      width: 1px;
      height: 40px;
      background-color: @border-color-split;
      content: '';
    }
    &:last-child {
      padding-right: 0;
      &::after {
        display: none;
      }
    }
  }
}

.members {
  a {
    display: block;
    height: 24px;
    margin: 12px 0;
    color: @text-color;
    transition: all 0.3s;
    .textOverflow();
    .member {
      margin-left: 12px;
      font-size: @font-size-base;
      line-height: 24px;
      vertical-align: top;
    }
    &:hover {
      color: @primary-color;
    }
  }
}

.projectList {
  :global {
    .ant-card-meta-description {
      height: 44px;
      overflow: hidden;
      color: @text-color-secondary;
      line-height: 22px;
    }
  }
  .cardTitle {
    font-size: 0;
    a {
      display: inline-block;
      height: 24px;
      margin-left: 12px;
      color: @heading-color;
      font-size: @font-size-base;
      line-height: 24px;
      vertical-align: top;
      &:hover {
        color: @primary-color;
      }
    }
  }
  .projectGrid {
    width: 33.33%;
  }
  .projectItemContent {
    display: flex;
    height: 20px;
    margin-top: 8px;
    overflow: hidden;
    font-size: 12px;
    line-height: 20px;
    .textOverflow();
    a {
      display: inline-block;
      flex: 1 1 0;
      color: @text-color-secondary;
      .textOverflow();
      &:hover {
        color: @primary-color;
      }
    }
    .datetime {
      flex: 0 0 auto;
      float: right;
      color: @disabled-color;
    }
  }
}

.datetime {
  color: @disabled-color;
}

@media screen and (max-width: @screen-xl) and (min-width: @screen-lg) {
  .activeCard {
    margin-bottom: 24px;
  }
  .members {
    margin-bottom: 0;
  }
  .extraContent {
    margin-left: -44px;
    .statItem {
      padding: 0 16px;
    }
  }
}

@media screen and (max-width: @screen-lg) {
  .activeCard {
    margin-bottom: 24px;
  }
  .members {
    margin-bottom: 0;
  }
  .extraContent {
    float: none;
    margin-right: 0;
    .statItem {
      padding: 0 16px;
      text-align: left;
      &::after {
        display: none;
      }
    }
  }
}

@media screen and (max-width: @screen-md) {
  .extraContent {
    margin-left: -16px;
  }
  .projectList {
    .projectGrid {
      width: 50%;
    }
  }
}

@media screen and (max-width: @screen-sm) {
  .pageHeaderContent {
    display: block;
    .content {
      margin-left: 0;
    }
  }
  .extraContent {
    .statItem {
      float: none;
    }
  }
}

@media screen and (max-width: @screen-xs) {
  .projectList {
    .projectGrid {
      width: 100%;
    }
  }
}
</style>


