<template>
  <div id="mountNode" :style="{width: '100%'}"></div>
</template>

<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set'
export default {
  name: 'MiniBar',
  props: {
    color: String,
    data: Array,
  },
  watch: {
    data: function() {
      this.initChart();
    }
  },
  mounted() {
    console.log(this.data);
    //this.initChart();
  },
  methods: {
    initChart: function() {
      var chart = new G2.Chart({
        container: 'mountNode',
        forceFit: true,
        height: 46,
        padding: 0,
      });
      chart.source(this.data);
      chart.scale('sales', {
        tickInterval: 20
      });
      chart.axis('y', {
        title: null,
        label: null,
        line: null,
        tickLine: null,
        grid: null,
      });
      chart.axis('x', {
        title: null,
        label: null,
        line: null,
        tickLine: null,
        grid: null,
      })
      chart.interval().position('x*y').color('#FA8072');
      chart.render();
    }
  },
}
</script>