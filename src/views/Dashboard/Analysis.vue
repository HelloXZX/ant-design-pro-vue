<template>
<div>
  <introduce-row :visitData="visitData"/>
  <sales-card :salesData="salesData" />
  <top-search :visitData2="visitData2" :searchData="searchData"/>
</div>

</template>

<script>
import IntroduceRow from './IntroduceRow'
import SalesCard from './SalesCard'
import TopSearch from './TopSearch'
import {fakeChartData} from '@/services/api';
export default {
  name: 'Analysis',
  components: {
    IntroduceRow,
    SalesCard,
    TopSearch,
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