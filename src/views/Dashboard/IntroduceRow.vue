<template>
  <a-row :gutter="24">
    <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
      <chart-card title="总销售额" :contentHeight="46" >
        <template v-slot:total>
          12212
        </template>
        <template v-slot:action>
          <a-tooltip title="指标说明">
            <a-icon type="info-circle-o" />
          </a-tooltip>
        </template>
        <template v-slot:children>
          <trend flag="up" :style="{marginRight: '16px'}">
            周同比<span :style="{marginLeft: '8px'}">12%</span>
          </trend>
          <trend flag="down" :style="{marginRight: '16px'}">
            日同比<span :style="{marginLeft: '8px'}">11%</span>
          </trend>
        </template>
        <template v-slot:footer>
          <field label="日销售额" :value="`￥${numeral(12423).format('0,0')}`"></field>
        </template>
      </chart-card>
    </a-col>

    <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
      <chart-card title="访问量" :contentHeight="46" >
        <template v-slot:total>
          {{`${numeral(10242).format('0,0')}`}}
        </template>
        <template v-slot:action>
          <a-tooltip title="指标说明">
            <a-icon type="info-circle-o" />
          </a-tooltip>
        </template>
        <template v-slot:children>
          <mini-area :data="visitData" />
        </template>
        <template v-slot:footer>
          <field label="日访问量" :value="`￥${numeral(12423).format('0,0')}`"></field>
        </template>
      </chart-card>
    </a-col>

    <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
      <chart-card title="支付笔数" :contentHeight="46" >
        <template v-slot:total>
          {{`${numeral(342834).format('0,0')}`}}
        </template>
        <template v-slot:action>
          <a-tooltip title="指标说明">
            <a-icon type="info-circle-o" />
          </a-tooltip>
        </template>
        <template v-slot:children>
          <mini-bar :data="visitData" />
        </template>
        <template v-slot:footer>
          <field label="转化率" value="60%"></field>
        </template>
      </chart-card>
    </a-col>

    <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6" :style="{marginBottom: '24px'}">
      <chart-card title="运营活动效果" :contentHeight="46" >
        <template v-slot:total>
          50%
        </template>
        <template v-slot:action>
          <a-tooltip title="指标说明">
            <a-icon type="info-circle-o" />
          </a-tooltip>
        </template>
        <template v-slot:children>
          <mini-progress :percent="50" :strokeWidth="8" :target="80" color="#13C2C2"/>
        </template>
        <template v-slot:footer>
          <trend flag="up" :style="{marginRight: '16px'}">
            周同比<span :style="{marginLeft: '8px'}">12%</span>
          </trend>
          <trend flag="down" :style="{marginRight: '16px'}">
            日同比<span :style="{marginLeft: '8px'}">11%</span>
          </trend>
        </template>
      </chart-card>
    </a-col>
  </a-row>
</template>

<script>
import ChartCard from '../../components/Charts/ChartCard';
import Trend from '@/components/Trend';
import Field from '@/components/Field';
import MiniArea from '@/components/MiniArea';
import MiniBar from '@/components/MiniBar';
import MiniProgress from '@/components/MiniProgress';
import numeral from 'numeral';
import {fakeChartData} from '@/services/api';
export default {
  name: "IntroduceRow",
  components: {
    ChartCard,
    Trend,
    Field,
    MiniArea,
    MiniBar,
    MiniProgress
  },
  data() {
    return {
      offlineChartData: [],
      offlineData: [],
      radarData: [],
      salesData: [],
      salesTypeData: [], 
      salesTypeDataOffline: [],
      salesTypeDataOnline: [],
      searchData: [],
      visitData: [],
      visitData2: [],
    }
  },
  methods: {
    numeral,
    getData: async function () {
      const result = await fakeChartData();
      this.offlineChartData = result.offlineChartData;
      this.offlineData = result.offlineData;
      this.radarData = result.radarData;
      this.salesData = result.salesData;
      this.salesTypeData = result.salesTypeData; 
      this.salesTypeDataOffline = result.salesTypeDataOffline;
      this.salesTypeDataOnline = result.salesTypeDataOnline;
      this.searchData = result.searchData;
      this.visitData = result.visitData;
      this.visitData2 = result.visitData2;
      console.log(this.visitData);
    },
  },
  mounted() {
    this.getData();
  },
}
</script>

<style lang="less">
  
</style>