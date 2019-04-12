<template>
  <div class="activeChart">
    <number-info
      :gap="8"
    >
      <template slot="total">
        有望达到预期
      </template>
      <template slot="subTitle">
        目标评估
      </template>
    </number-info>
    <div :style="{ marginTop: '32px' }">
      <mini-area :animate="false" id="monitorMiniArea" color="#836FCE" :height="84" :data="activeData" />
    </div>
    <div>
      <div class="activeChartGrid">
        <p>{{activeData.length > 0 && [...activeData].sort()[activeData.length - 1].y + 200}} 亿元</p>
        <p>{{activeData.length > 0 &&[...activeData].sort()[Math.floor(activeData.length / 2)].y}} 亿元</p>
      </div>
      <div class="dashedLine">
        <div class="line" />
      </div>
      <div class="dashedLine">
        <div class="line" />
      </div>
    </div>
    <div class="activeChartLegend">
      <span>00:00</span>
      <span>{{activeData.length > 0 && activeData[Math.floor(activeData.length / 2)].x}}</span>
      <span>{{activeData.length > 0 && activeData[activeData.length - 1].x}}</span>
    </div>
  </div>
</template>

<script>
import MiniArea from '@/components/Charts/MiniArea';
import NumberInfo from '@/components/NumberInfo';

export default {
  name: 'ActiveChart',
  components: {
    MiniArea,
    NumberInfo,
  },
  data() {
    return {
      activeData: [],
    }
  },
  methods: {
    fixedZero(val) {
      return val * 1 < 10 ? `0${val}` : val;
    },
    getActiveData() {
      const activeData = [];
      for (let i = 0; i < 24; i += 1) {
        activeData.push({
          x: `${this.fixedZero(i)}:00`,
          y: Math.floor(Math.random() * 200) + i * 50,
        });
      }
      return activeData;
    },
    loopData() {
      this.timer = setTimeout(() => {
        this.activeData = this.getActiveData();
        this.loopData();
      }, 1000);
    }
  }, 
  mounted() {
    this.loopData();
  },
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
</script>

<style lang="less">
.activeChart {
  position: relative;
}
.activeChartGrid {
  p {
    position: absolute;
    top: 80px;
  }
  p:last-child {
    top: 115px;
  }
}
.activeChartLegend {
  position: relative;
  height: 20px;
  margin-top: 8px;
  font-size: 0;
  line-height: 20px;
  span {
    display: inline-block;
    width: 33.33%;
    font-size: 12px;
    text-align: center;
  }
  span:first-child {
    text-align: left;
  }
  span:last-child {
    text-align: right;
  }
}
.dashedLine {
  position: relative;
  top: -70px;
  left: -3px;
  height: 1px;

  .line {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, transparent 50%, #e9e9e9 50%);
    background-size: 6px;
  }
}

.dashedLine:last-child {
  top: -36px;
}

</style>

