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
    id: String,
    height: Number,
  },
  data() {
    return {
      chart: null,
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
    // setTimeout(() => {
    //   this.initChart();
    // }, 0)
    window.addEventListener('resize', this.initChart, {passive: true});
  },
  methods: {
    getTextAttrs(cfg) {
      return _.assign({}, cfg.style, {
        fillOpacity: cfg.opacity,
        fontSize: cfg.origin._origin.size,
        rotate: cfg.origin._origin.rotate,
        text: cfg.origin._origin.text,
        textAlign: 'center',
        fontFamily: cfg.origin._origin.font,
        fill: cfg.color,
        textBaseline: 'Alphabetic'
      });
    },
    initChart: function() {

      function getTextAttrs(cfg) {
        return _.assign({}, cfg.style, {
          fillOpacity: cfg.opacity,
          fontSize: cfg.origin._origin.size,
          rotate: cfg.origin._origin.rotate,
          text: cfg.origin._origin.text,
          textAlign: 'center',
          fontFamily: cfg.origin._origin.font,
          fill: cfg.color,
          textBaseline: 'Alphabetic'
        });
      }
      if (this.data.length === 0) {
        return;
      }
      // 给point注册一个词云的shape
      G2.Shape.registerShape('point', 'cloud', {
        drawShape: function drawShape(cfg, container) {
          let attrs = getTextAttrs(cfg);
          return container.addShape('text', {
            attrs: _.assign(attrs, {
              x: cfg.x,
              y: cfg.y
            })
          });
        }
      });
      let dv = new DataSet.View().source(this.data);
      let range = dv.range('value');
      let min = range[0];
      let max = range[1];
      dv.transform({
        type: 'tag-cloud',
        fields: ['name', 'value'],
        size: [this.$el.parentElement.clientWidth - 48, this.height],
        font: 'Verdana',
        padding: 0,
        timeInterval: 5000, // max execute time
        rotate: function rotate() {
          let random = ~~(Math.random() * 4) % 4;
          if (random == 2) {
            random = 0;
          }
          return random * 90; // 0, 90, 270
        },
        fontSize: function fontSize(d) {
          if (d.value) {
            return Math.pow((d.value - min) / (max - min), 2) * (17.5 - 5) + 5;
          }
          return 0;
        }
      });
      if (!this.chart) {
        this.chart = new G2.Chart({
          container: this.id,
          height: this.height,
          width: this.$el.parentElement.clientWidth - 48,
          padding: 0
        });
      }
      this.chart.height = this.height;
      this.chart.changeWidth(this.$el.parentElement.clientWidth - 48);
      this.chart.source(dv, {
        x: {
          nice: false
        },
        y: {
          nice: false
        }
      });
      this.chart.legend(false);
      this.chart.axis(false);
      this.chart.tooltip({
        showTitle: false
      });
      this.chart.coord().reflect();
      this.chart.point().position('x*y').color('text').shape('cloud').tooltip('value*category');
      this.chart.render();
    },

  },
  beforeDestroy() {
    window.removeEventListener('resize', this.initChart);
  }
}
</script>