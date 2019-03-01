<template>
  <div id="mountNodeMiniArea" :style="{width: '100%'}"></div>
</template>

<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set'
export default {
  name: 'MiniArea',
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
      var dv = new DataSet.View().source(this.data);
      dv.transform({
        type: 'fold',
        fields: ['y'],
        key: 'type',
        value: 'value'
      });
      var chart = new G2.Chart({
        container: 'mountNodeMiniArea',
        forceFit: true,
        height: 46,
        padding: 0,
      });
      chart.source(dv);
      chart.axis('x', {
        title: null,
        label: null,
        line: null,
        tickLine: null,
        grid: null,
      })
      chart.axis('value', {
        title: null,
        label: null,
        line: null,
        tickLine: null,
        grid: null,
      })
      chart.tooltip({
        crosshairs: true
      });
      // chart.legend('x', false);
      // chart.legend('y', false);

      chart.area().position('x*value').color('type').shape('smooth');
      chart.line().position('x*value').color('type').size(2).shape('smooth');
      chart.render();
    }
  },
}
</script>