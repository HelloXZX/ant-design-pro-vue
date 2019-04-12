<template>
  <grid-content>
    <a-row :gutter="24">
      <a-col :xl="18" :lg="24" :md="24" :sm="24" :xs="24" :style="{ marginBottom: '24px' }">
        <a-card title="活动实时交易情况" :bordered="false">
          <a-row>
            <a-col :md="6" :sm="12" :xs="24">
              <number-info
                :gap="8"
                suffix="元"
              >
                <template slot="total">
                  {{numeral(124543233).format('0,0')}}
                </template>
                <template slot="subTitle">
                  今日交易总额
                </template>
              </number-info>
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <number-info
                :gap="8"
              >
                <template slot="subTitle">
                  销售目标完成率
                </template>
                <template slot="total">
                  93%
                </template>
              </number-info>
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <number-info
                :gap="8"
              >
                <template slot="subTitle">
                  活动剩余时间
                </template>
                <template slot="total">
                  <count-down :target="new Date().getTime() + 3900000" ></count-down>
                </template>
              </number-info>
            </a-col>
            <a-col :md="6" :sm="12" :xs="24">
              <number-info
                :gap="8"
                suffix="元"
              >
                <template slot="subTitle">
                  每秒交易总额
                </template>
                <template slot="total">
                  {{numeral(234).format('0,0')}}
                </template>
              </number-info>
            </a-col>
          </a-row>
          <div class="mapChart">
            <a-tooltip
              title="Waiting for implementation"
            >
              <img
                src="https://gw.alipayobjects.com/zos/antfincdn/h%24wFbzuuzz/HBWnDEUXCnGnGrRfrpKa.png"
                alt="map"
              />
            </a-tooltip>
          </div>
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="24" :md="24" :sm="24" :xs="24">
        <a-card 
          title="活动情况预测" 
          :style="{ marginBottom: '24px' }"
          :bordered="false"
        >
          <active-chart></active-chart>
        </a-card>
        <a-card 
          title="券核效率"
          :style="{ marginBottom: '24px' }"
          :bodyStyle="{ textAlign: 'center' }"
          :bordered="false"
        >
          <gauge title="跳出率" :height="170" :percent="87" ></gauge>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="24">
      <a-col :xl="12" :lg="24" :sm="24" :xs="24" :style="{ marginBottom: '24px' }">
        <a-card title="各品类占比" class="pieCard" :bordered="false">
          <a-row :style="{padding: '16px 0'}">
            <a-col :span="8">
              <pie :percent="28" id="monitorPie1" :height="128" subTitle="中式快餐"></pie>
            </a-col>
            <a-col :span="8">
              <pie :percent="22" id="monitorPie2" :height="128" subTitle="西餐"></pie>
            </a-col>
            <a-col :span="8">
              <pie :percent="32" id="monitorPie3" :height="128" subTitle="火锅"></pie>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" :style="{ marginBottom: '24px' }">
        <a-card title="热门搜索" :bordered="false" :bodyStyle="{overflow: 'hidden'}">
          <tag-cloud id="tagclound" :data="tags" :height="161" />
        </a-card>
      </a-col>
      <a-col :xl="6" :lg="12" :sm="24" :xs="24" :style="{ marginBottom: '24px' }">
        <a-card 
          title="资源剩余"
          :bodyStyle="{ textAlign: 'center', fontSize: 0 }"
          :bordered="false"
        >
          <water-wave 
            :height="161"
            title="补贴资金剩余"
            :percent="34"
          />
        </a-card>
      </a-col>
    </a-row>
  </grid-content>
</template>

<script>
import GridContent from '@/components/GridContent';
import NumberInfo from '@/components/NumberInfo';
import CountDown from '@/components/CountDown';
import ActiveChart from '@/components/ActiveChart';
import Gauge from '@/components/Charts/Gauge';
import Pie from '@/components/Charts/Pie';
import TagCloud from '@/components/Charts/TagCloud';
import WaterWave from '@/components/Charts/WaterWave';
import {queryTags} from '@/services/api';
import numeral from 'numeral';

export default {
  name: 'Monitor',
  components: {
    GridContent,
    NumberInfo,
    CountDown,
    ActiveChart,
    Gauge,
    Pie,
    TagCloud,
    WaterWave,
  },
  data() {
    return {
      tags: [],
    }
  },
  methods: {
    numeral,
    async getTags() {
      const result = await queryTags();
      this.tags = result.list;
    },
  },
  mounted() {
    this.getTags();
  }
}
</script>


<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';
@import '~@/utils/utils.less';

.mapChart {
  height: 452px;
  padding-top: 24px;
  text-align: center;
  img {
    display: inline-block;
    max-width: 100%;
    max-height: 437px;
  }
}

.pieCard :global(.pie-stat) {
  font-size: 24px !important;
}

@media screen and (max-width: @screen-lg) {
  .mapChart {
    height: auto;
  }
}

</style>

