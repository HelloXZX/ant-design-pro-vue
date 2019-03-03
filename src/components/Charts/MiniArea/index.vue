<template>
  <div :id="id" :style="{width: '100%'}"></div>
</template>

<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set'
export default {
  name: 'MiniArea',
  props: {
    color: String,
    data: Array,
    line: Boolean,
    id: String,
    height: Number,
    color: {
      type: String,
      default: 'rgba(24, 144, 255, 0.2)',
    },
    borderColor: {
      type: String,
      default: '#1089ff',
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  watch: {
    data: function() {
      this.initChart();
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.initChart();
    // })
    setTimeout(() => {
      this.initChart();
    }, 0)
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
      if (!this.chart) {
        this.chart = new G2.Chart({
          container: this.id,
          forceFit: true,
          height: this.height,
          padding: [5, 0, 0, 0],
        });
      }

      this.chart.source(dv);
      this.chart.axis('x', {
        title: null,
        label: null,
        line: null,
        tickLine: null,
        grid: null,
      })
      this.chart.axis('value', {
        title: null,
        label: null,
        line: null,
        tickLine: null,
        grid: null,
      })
      this.chart.tooltip({
        crosshairs: true
      });
      // chart.legend('x', false);
      // chart.legend('y', false);

      this.chart.area().position('x*value').color(this.color).shape('smooth');
      if (this.line) {
        this.chart.line().position('x*value').color(this.borderColor).size(2).shape('smooth');
      }
      this.chart.render();
    }
  },
}
</script>