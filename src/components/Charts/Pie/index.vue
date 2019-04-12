<template>
  <div :class="{pie: true, hasLegend: !!hasLegend, legendBlock: legendBlock}">
    <div class="chart" >
      <div vue-resize-text :id="id" :style="{width: '100%'}"></div>
    </div>
    <ul v-show="hasLegend" class="legend">
      <li v-for="(item, i) in legendData" :key="item.x" @click="handleLegendClick(item, i)">
        <span
          class="dot"
          :style="{backgroundColor: !item.checked ? '#aaa' : item.color,}"
        />
        <span class="legendTitle">{{item.x}}</span>
        <a-divider type="vertical" />
        <span class="percent">
          {{`${(Number.isNaN(item.percent) ? 0 : item.percent * 100).toFixed(2)}%`}}
        </span>
        <span class="value">{{`¥ ${numeral(item.y).format('0,0')}`}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set'
import numeral from 'numeral'
export default {
  name: 'Pie',
  props: {
    color: String,
    data: Array,
    height: Number,
    title: String,
    id: String,
    legendBlock: {
      type: Boolean,
      default: false,
    },
    hasLegend: {
      type: Boolean,
      default: false,
    },
    percent: Number,
    subTitle: String,
  },
  data() {
    return {
      chart: null,
      legendData: [],
    }
  },
  watch: {
    data: function() {
      this.initChart();
    },
    legendData: function() {
      console.log(this.legendData);
    }
  },
  mounted() {
    if (this.percent) {
      this.data = [
        {
          x: '占比',
          y: parseFloat(this.percent),
        },
        {
          x: '反比',
          y: 100 - parseFloat(this.percent),
        },
      ]
    }
    setTimeout(() => {
      this.initChart()
    }, 0)
  },
  methods: {
    numeral,
    initChart: function() {
      if (!this.chart) {
        this.chart = new G2.Chart({
          container: this.id,
          forceFit: true,
          height: this.height,
          padding: 0,
          animate: false
        });
      }
      var dv = new DataSet.View().source(this.data);
      dv.transform({
        type: 'percent',
        field: 'y',
        dimension: 'x',
        as: 'percent',
      });
      this.chart.source(dv);
      this.chart.coord('theta', {
        radius: 0.8,
        innerRadius: 0.7
      });
      this.chart.tooltip({
        showTitle: false,
        itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      });
      // 辅助文本
      if (this.percent) {
        this.chart.guide().html({
          position: ['50%', '50%'],
          html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">' + this.subTitle + '<br><span style="color:#8c8c8c;font-size:20px">' + this.percent + '%' +'</span></div>',
          alignX: 'middle',
          alignY: 'middle'
        });
      } else {
        this.chart.guide().html({
          position: ['50%', '50%'],
          html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">销售额<br><span style="color:#8c8c8c;font-size:20px">¥ 15,781</span></div>',
          alignX: 'middle',
          alignY: 'middle'
        });
      }

      var interval = this.chart.intervalStack().position('percent').color('x').style({
        lineWidth: 1,
        stroke: '#fff'
      });
      this.chart.render();
      interval.setSelected(dv.origin[0]);
      let items = interval.get('dataArray');
      let legendData = items.map(item => {
        /* eslint no-underscore-dangle:0 */
        const origin = item[0]._origin;
        origin.color = item[0].color;
        origin.checked = true;
        return origin;
      });
      this.legendData = legendData;
    },
    handleLegendClick: function(item, i) {
      let legendData = [...this.legendData];
      const newItem = item;
      newItem.checked = !newItem.checked;

      legendData[i] = newItem;

      const filteredLegendData = legendData.filter(l => l.checked).map(l => l.x);

      if (this.chart) {
        requestAnimationFrame(() => {
          this.chart.filter('x', val => {
            return filteredLegendData.indexOf(val) > -1
          });
          this.chart.repaint();
        })

      }
      this.legendData = legendData;
      console.log(this.legendData);
    }
  },
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.pie {
  position: relative;
  .chart {
    position: relative;
  }
  &.hasLegend .chart {
    width: ~'calc(100% - 240px)';
  }
  .legend {
    position: absolute;
    top: 50%;
    right: 0;
    min-width: 200px;
    margin: 0 20px;
    padding: 0;
    list-style: none;
    transform: translateY(-50%);
    li {
      height: 22px;
      margin-bottom: 16px;
      line-height: 22px;
      cursor: pointer;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .dot {
    position: relative;
    top: -1px;
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 8px;
  }
  .line {
    display: inline-block;
    width: 1px;
    height: 16px;
    margin-right: 8px;
    background-color: @border-color-split;
  }
  .legendTitle {
    color: @text-color;
  }
  .percent {
    color: @text-color-secondary;
  }
  .value {
    position: absolute;
    right: 0;
  }
  .title {
    margin-bottom: 8px;
  }
  .total {
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 62px;
    text-align: center;
    transform: translate(-50%, -50%);
    & > h4 {
      height: 22px;
      margin-bottom: 8px;
      color: @text-color-secondary;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
    }
    & > p {
      display: block;
      height: 32px;
      color: @heading-color;
      font-size: 1.2em;
      line-height: 32px;
      white-space: nowrap;
    }
  }
}

.legendBlock {
  &.hasLegend .chart {
    width: 100%;
    margin: 0 0 32px 0;
  }
  .legend {
    position: relative;
    transform: none;
  }
}

</style>

