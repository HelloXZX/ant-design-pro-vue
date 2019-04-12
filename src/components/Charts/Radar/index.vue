<template>
   <div class="radar">
     <div :id="mountId"></div>
   </div>
</template>

<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set'

export default {
  name: 'Radar',
  data() {
    return {
      chart: null,
    }
  },
  props: {
    mountId: String,
    data: Array,
    height: Number,
  },
  watch: {
    data: function() {
      this.initChart();
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      // var dv = new DataView().source(this.data);
      // dv.transform({
      //   type: 'fold',
      //   fields: ['a', 'b'], // 展开字段集
      //   key: 'user', // key字段
      //   value: 'score' // value字段
      // });
      if (!this.chart) {
        this.chart = new G2.Chart({
          container: this.mountId,
          forceFit: true,
          height: this.height,
          padding: [20, 20, 20, 20]
        });
      }

      this.chart.source(this.data);
      this.chart.coord('polar', {
        radius: 0.8
      });
      this.chart.axis('label', {
        line: null,
        tickLine: null,
        grid: {
          lineStyle: {
            lineDash: null
          },
          hideFirstLine: false
        }
      });
      this.chart.axis('value', {
        grid: {
          type: 'polygon',
          lineStyle: {
            lineDash: null
          },
        }
      });
      this.chart.legend('user', {
        marker: 'circle',
        offset: 30
      });
      this.chart.line().position('label*value').color('name').size(2);
      this.chart.point().position('label*value').color('name').shape('circle').size(3).style({
        stroke: '#fff',
        lineWidth: 1,
        fillOpacity: 1
      });
      this.chart.render();
    }
  }
}
</script>
