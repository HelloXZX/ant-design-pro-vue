<template>
  <a-card
    :bordered="false"
    :style="{ marginTop: '24px' }"
  >
    <template v-slot:title>线上热门搜索</template>
    <template v-slot:extra>
      <span class="iconGroup">
        <a-dropdown  placement="bottomRight">
          <a-icon type="ellipsis" />
          <a-menu slot="overlay">
            <a-menu-item>操作一</a-menu-item>
            <a-menu-item>操作二</a-menu-item>
          </a-menu>
        </a-dropdown>
      </span>
    </template>
    <a-row :gutter="68">
      <a-col :sm="12" :xs="24" :style="{ marginBottom: 24 }">
        <number-info
          :gap="8"
          status="up"
          :subTotal="17.1"
        >
          <template slot="total">
            {{numeral(12321).format('0,0')}}
          </template>
          <template slot="subTitle">
            <span>
              搜索用户数
              <a-tooltip title="指标说明">
                <a-icon style="{ marginLeft: '8px' }" type="info-circle-o" />
              </a-tooltip>
            </span>
          </template>
        </number-info>
        <mini-area :line="true" id="topSearchMiniArea1" :height="45" :data="visitData2" />
      </a-col>
      <a-col :sm="12" :xs="24" :style="{ marginBottom: 24 }">
        <number-info
          :gap="8"
          status="down"
          :subTotal="26.2"
        >
          <template slot="total">
            2.7
          </template>
          <template slot="subTitle">
            <span>
              搜索用户数
              <a-tooltip title="指标说明">
                <a-icon style="{ marginLeft: '8px' }" type="info-circle-o" />
              </a-tooltip>
            </span>
          </template>
        </number-info>
        <mini-area :line="true" id="topSearchMiniArea2" :height="45" :data="visitData2" />
      </a-col>
    </a-row>
    <a-table :data-source="searchData" size="small" :pagination="{pageSize: 5}" :style="{marginTop: '20px'}">
      <a-table-column
        title="排名"
        dataIndex="index"
        key="index"
      />
      <a-table-column
        title="搜索关键词"
        dataIndex="keyword"
        key="keyword"
      />
      <a-table-column
        title="用户数"
        dataIndex="count"
        key="count"
        :sorter = "(a, b) => a.count - b.count"
      />
      <a-table-column
        title="涨幅数"
        dataIndex="range"
        key="range"
        align="right"
        :sorter = "(a, b) => a.range - b.range"
      >
        <template slot-scope="range, record" >
          <trend :flag="record.status === 1 ? 'down' : 'up'" >
            <span :style="{marginLeft: '8px'}">{{range}}%</span>
          </trend>
        </template>
      </a-table-column>
    </a-table>
  </a-card>
</template>

<script>
import NumberInfo from '@/components/NumberInfo'
import MiniArea from '@/components/Charts/MiniArea'
import Trend from '@/components/Trend'
import numeral from 'numeral'
export default {
  name: 'TopSearch',
  components: {
    NumberInfo,
    MiniArea,
    Trend,
  },
  props: {
    searchData: {
      type: Array,
      default: [],
    },
    visitData2: {
      type: Array,
      default: []
    }
  },
  methods: {
    numeral
  }
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';
@import '~@/utils/utils.less';

.iconGroup {
  i {
    margin-left: 16px;
    color: @text-color-secondary;
    cursor: pointer;
    transition: color 0.32s;
    &:hover {
      color: @text-color;
    }
  }
}

.rankingList {
  margin: 25px 0 0;
  padding: 0;
  list-style: none;
  li {
    .clearfix();

    display: flex;
    align-items: center;
    margin-top: 16px;
    span {
      color: @text-color;
      font-size: 14px;
      line-height: 22px;
    }
    .rankingItemNumber {
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-top: 1.5px;
      margin-right: 16px;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      background-color: @background-color-base;
      border-radius: 20px;
      &.active {
        color: #fff;
        background-color: #314659;
      }
    }
    .rankingItemTitle {
      flex: 1;
      margin-right: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

.salesExtra {
  display: inline-block;
  margin-right: 24px;
  a {
    margin-left: 24px;
    color: @text-color;
    &:hover {
      color: @primary-color;
    }
    &.currentDate {
      color: @primary-color;
    }
  }
}

.salesCard {
  .salesBar {
    padding: 0 0 32px 32px;
  }
  .salesRank {
    padding: 0 32px 32px 72px;
  }
  :global {
    .ant-tabs-bar {
      padding-left: 16px;
      .ant-tabs-nav .ant-tabs-tab {
        padding-top: 16px;
        padding-bottom: 14px;
        line-height: 24px;
      }
    }
    .ant-tabs-extra-content {
      padding-right: 24px;
      line-height: 55px;
    }
    .ant-card-head {
      position: relative;
    }
    .ant-card-head-title {
      align-items: normal;
    }
  }
}

.salesCardExtra {
  height: inherit;
}

.salesTypeRadio {
  position: absolute;
  right: 54px;
  bottom: 12px;
}

.offlineCard {
  :global {
    .ant-tabs-ink-bar {
      bottom: auto;
    }
    .ant-tabs-bar {
      border-bottom: none;
    }
    .ant-tabs-nav-container-scrolling {
      padding-right: 40px;
      padding-left: 40px;
    }
    .ant-tabs-tab-prev-icon::before {
      position: relative;
      left: 6px;
    }
    .ant-tabs-tab-next-icon::before {
      position: relative;
      right: 6px;
    }
    .ant-tabs-tab-active h4 {
      color: @primary-color;
    }
  }
}

.twoColLayout {
  .salesCard {
    height: calc(100% - 24px);
  }
  div[class^='ant-col']:last-child {
    position: absolute\9;
    right: 0\9;
    height: 100%\9;
  }
  :global {
    .ant-row {
      position: relative\9;
      display: flex;
      display: block\9;
      flex-flow: row wrap;
    }
  }
}

.trendText {
  margin-left: 8px;
  color: @heading-color;
}

@media screen and (max-width: @screen-lg) {
  .salesExtra {
    display: none;
  }

  .rankingList {
    li {
      span:first-child {
        margin-right: 8px;
      }
    }
  }
}

@media screen and (max-width: @screen-md) {
  .rankingTitle {
    margin-top: 16px;
  }

  .salesCard .salesBar {
    padding: 16px;
  }
}

@media screen and (max-width: @screen-sm) {
  .salesExtraWrap {
    display: none;
  }

  .salesCard {
    :global {
      .ant-tabs-content {
        padding-top: 30px;
      }
    }
  }
}

</style>


