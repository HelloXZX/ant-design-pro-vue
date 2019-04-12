<template>
  <div id="gaudeMountNode" :style="{width: '100%'}"></div>
</template>

<script>
import G2 from '@antv/g2';
export default {
  name: 'Gauge',
  props: {
    title: String,
    color: String,
    height: Number,
    bgColor: Number,
    percent: Number,
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart: function() {
      var Shape = G2.Shape;
      // 自定义Shape 部分
      Shape.registerShape('point', 'pointer', {
        drawShape: function drawShape(cfg, group) {
          var center = this.parsePoint({ // 获取极坐标系下画布中心点
            x: 0,
            y: 0
          });
          // 绘制指针
          group.addShape('line', {
            attrs: {
              x1: center.x,
              y1: center.y,
              x2: cfg.x,
              y2: cfg.y,
              stroke: cfg.color,
              lineWidth: 2,
              lineCap: 'round'
            }
          });
          return group.addShape('circle', {
            attrs: {
              x: center.x,
              y: center.y,
              r: 4.75,
              stroke: cfg.color,
              lineWidth: 3,
              fill: '#fff'
            }
          });
        }
      });

      var data = [{
        value: 6
      }];
      var chart = new G2.Chart({
        container: 'gaudeMountNode',
        forceFit: true,
        height: this.height,
        padding: [0, 0, 20, 0]
      });
      chart.source(data);

      chart.coord('polar', {
        startAngle: -1.25 * Math.PI,
        endAngle: 0.25 * Math.PI,
        radius: 0.8
      });
      chart.scale('value', {
        min: 0,
        max: 9,
        nice: false,
        ticks: [1.5, 3.5, 5.5, 7.5]
      });

      chart.axis('1', false);
      chart.axis('value', {
        zIndex: 2,
        line: null,
        label: {
          offset: -10,
          formatter: function formatter(val) {
            if (val === '1.5') {
              return '差';
            } else if (val === '3.5') {
              return '中';
            } else if (val === '5.5') {
              return '良';
            } else if (val === '7.5') {
              return '优';
            }

          },
          textStyle: {
            fontSize: 12,
            fill: 'rgba(0, 0, 0, 0.65)',
            textAlign: 'center'
          }
        },
        tickLine: null,
        grid: null
      });
      chart.legend(false);
      chart.point().position('value*1').shape('pointer').color('#1890FF').active(false);

      // 绘制仪表盘刻度线
      chart.guide().line({
        start: [2.5, 0.905],
        end: [2.5, 0.85],
        lineStyle: {
          stroke: '#19AFFA', // 线的颜色
          lineDash: null, // 虚线的设置
          lineWidth: 3
        }
      });
      chart.guide().line({
        start: [4.5, 0.905],
        end: [4.5, 0.85],
        lineStyle: {
          stroke: '#19AFFA', // 线的颜色
          lineDash: null, // 虚线的设置
          lineWidth: 3
        }
      });

      chart.guide().line({
        start: [6.5, 0.905],
        end: [6.5, 0.85],
        lineStyle: {
          stroke: '#19AFFA', // 线的颜色
          lineDash: null, // 虚线的设置
          lineWidth: 3
        }
      });

      // 绘制仪表盘背景
      chart.guide().arc({
        zIndex: 0,
        top: false,
        start: [0, 0.965],
        end: [9, 0.965],
        style: { // 底灰色
          stroke: '#CBCBCB',
          lineWidth: 5
        }
      });
      // 绘制指标
      chart.guide().arc({
        zIndex: 1,
        start: [0, 0.965],
        end: [data[0].value, 0.965],
        style: {
          stroke: '#1890FF',
          lineWidth: 7
        }
      });
      // 绘制指标数字
      chart.guide().html({
        position: ['50%', '95%'],
        html: '<div style="width: 300px;text-align: center;">' + '<p style="font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;">跳出率</p>' + '<p style="font-size: 24px;color: rgba(0,0,0,0.85);margin: 0;">' + data[0].value * 10 + '%</p>' + '</div>'
      });

      chart.render();
    }
  },
}
</script>