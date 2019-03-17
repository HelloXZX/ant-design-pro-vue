<template>
  <div>
    <h4 v-show="title" :style="{ marginBottom: '20'+'px' }">{{title}}</h4>
    <div :id="id" :style="{width: '100%'}"></div>
  </div>
</template>

<script>
import G2 from '@antv/g2';
export default {
  name: 'Bar',
  props: {
    color: String,
    data: {
      type: Array,
      default: [],
    },
    height: Number,
    title: String,
    id: String,
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    data: function() {
      this.initChart();
    }
  },
  mounted() {
    setTimeout(() => {
      this.initChart()
    }, 0)
  },
  methods: {
    initChart: function() {
      if (!this.chart) {
        this.chart = new G2.Chart({
          container: this.id,
          forceFit: true,
          height: this.title?this.height-41:this.height,
          padding: 'auto'
        });
      }
      this.chart.source(this.data);
      this.chart.scale('sales', {
        tickInterval: 20
      });
      this.chart.axis('y', {
        title: null,
        tickLine: null,
      });
      this.chart.axis('x', {
        title: null,
        tickLine: null,
      })
      this.chart.interval().position('x*y').color('#FA8072');
      this.chart.render();
    },
  },
}
</script>