<template>
<div>
  <introduce-row :visitData="visitData"/>
  <sales-card :salesData="salesData" />
  <a-row :gutter="24">
    <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
      <top-search :visitData2="visitData2" :searchData="searchData"/>
    </a-col>
    <a-col :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
      <proportion-sales :salesTypeData="salesTypeData" />
    </a-col>
  </a-row>
</div>

</template>

<script>
import IntroduceRow from './IntroduceRow'
import SalesCard from './SalesCard'
import TopSearch from './TopSearch'
import ProportionSales from './ProportionSales'
import {fakeChartData} from '@/services/api';
export default {
  name: 'Analysis',
  components: {
    IntroduceRow,
    SalesCard,
    TopSearch,
    ProportionSales,
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
    },
  },
  mounted() {
    this.getData();
  }
  
}
</script>