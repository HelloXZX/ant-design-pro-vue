<template>
  <a-card :bordered="false" :bodyStyle="{ padding: 0 }">
      <div class="salesCard">
        <a-tabs>
          <template v-slot:tabBarExtraContent>
            <div class="salesExtraWrap">
              <div class="salesExtra">
                <a :class="{currentDate: selectDate==='today'}" @click="selectDate = 'today'">
                  今日
                </a>
                <a :class="{currentDate: selectDate==='week'}" @click="selectDate = 'week'">
                  本周
                </a>
                <a :class="{currentDate: selectDate==='month'}" @click="selectDate = 'month'">
                  本月
                </a>
                <a :class="{currentDate: selectDate==='year'}" @click="selectDate = 'year'">
                  本年
                </a>
                <a-range-picker />
              </div>

            </div>
          </template>
          <a-tab-pane tab="销售额" key="sales">

          </a-tab-pane>
          <a-tab-pane tab="访问量" key="views">

          </a-tab-pane>
        </a-tabs>
      </div>
  </a-card>
</template>

<script>
export default {
  name: 'SalesCard',
  data() {
    return {
      selectDate: "today"
    }
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