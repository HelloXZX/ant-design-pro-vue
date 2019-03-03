<template>
  <a-card :bordered="false" :bodyStyle="{ padding: 0 }">
      <div class="salesCard">
        <a-tabs>
          <template v-slot:tabBarExtraContent>
            <div class="salesExtraWrap">
              <div class="salesExtra">
                <a :class="{currentDate: isActive('day')}" @click="selectDate('day')">
                  今日
                </a>
                <a :class="{currentDate: isActive('week')}" @click="selectDate('week')">
                  本周
                </a>
                <a :class="{currentDate: isActive('month')}" @click="selectDate('month')">
                  本月
                </a>
                <a :class="{currentDate: isActive('year')}" @click="selectDate('year')">
                  本年
                </a>
              </div>
              <a-range-picker :value="[startDate, endDate]" @change="calendarChange"/>
            </div>
          </template>
          <a-tab-pane tab="销售额" key="sales">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <div class="salesBar">
                  <bar id="mountNodebar1" :height="295" title="销售趋势" :data="salesData" />
                </div>
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <div class="salesRank">
                  <h4 class="rankingTitle">
                    门店销售额排名
                  </h4>
                  <ul class="rankingList">
                      <li v-for="(item, i) in rankingListData" :key="item.title">
                        <span :class="{rankingItemNumber: true, active: i<3}">
                          {{i + 1}}
                        </span>
                        <span class="rankingItemTitle" title={item.title}>
                          {{item.title}}
                        </span>
                        <span class="rankingItemValue">
                          {{numeral(item.total).format('0,0')}}
                        </span>
                      </li>
                  </ul>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane tab="访问量" key="views">
            <a-row>
              <a-col :xl="16" :lg="12" :md="12" :sm="24" :xs="24">
                <div class="salesBar">
                  <bar id="mountNodebar2" :height="295" title="访问量趋势" :data="salesData" />
                </div>
              </a-col>
              <a-col :xl="8" :lg="12" :md="12" :sm="24" :xs="24">
                <div class="salesRank">
                  <h4 class="rankingTitle">
                    门店销售额排名
                  </h4>
                  <ul class="rankingList">
                      <li v-for="(item, i) in rankingListData" :key="item.title">
                        <span :class="{rankingItemNumber: true, active: i<3}">
                          {{i + 1}}
                        </span>
                        <span class="rankingItemTitle" title={item.title}>
                          {{item.title}}
                        </span>
                        <span class="rankingItemValue">
                          {{numeral(item.total).format('0,0')}}
                        </span>
                      </li>
                  </ul>
                </div>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
  </a-card>
</template>

<script>
import moment from 'moment';
import Bar from '@/components/Charts/Bar';
import numeral from 'numeral';
export default {
  name: 'SalesCard',
  components: {
    Bar,
  },
  props: {
    salesData: Array,
  },
  data() {
    return {
      rankingListData: [],
      startDate: moment().startOf('year'),
      endDate: moment().endOf('year'),
    }
  },
  methods: {
    numeral,
    calendarChange: function (dates) {
      this.startDate = dates[0];
      this.endDate = dates[1];
    },
    selectDate: function (type) {
      this.startDate = moment().startOf(type);
      this.endDate = moment().endOf(type);
    },
    isActive: function name(type) {
      let startDateStr = this.startDate.format('YYYY-MM-DD');
      let endDateStr = this.endDate.format('YYYY-MM-DD');
      if (moment().startOf(type).format('YYYY-MM-DD') === startDateStr 
      && moment().endOf(type).format('YYYY-MM-DD') === endDateStr) {
        return true;
      }
      return false;
    },
    initRankingData: function() {
      let rankingListData = [];
      for (let i = 0; i < 7; i += 1) {
        rankingListData.push({
          title: `珠江路 ${i} 号店`,
          total: 323234,
        });
      }
      this.rankingListData = rankingListData;
    }
  },
  mounted() {
    this.initRankingData()
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