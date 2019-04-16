<template>
  <span>{{format(lastTime)}}</span>
</template>

<script>
export default {
  name: 'CountDown',
  props: {
    target: Number,
  },
  data() {
    return {
      lastTime: 0,
      interval: 1000,
      timer: null,
    }
  },
  methods: {
    format(time) {
      const hours = 60 * 60 * 1000;
      const minutes = 60 * 1000;

      const h = Math.floor(time / hours);
      const m = Math.floor((time - h * hours) / minutes);
      const s = Math.floor((time - h * hours - m * minutes) / 1000);
      return `${this.fixedZero(h)}:${this.fixedZero(m)}:${this.fixedZero(s)}`
    },
    fixedZero(val) {
      return val * 1 < 10 ? `0${val}` : val;
    },
    initTime() {
      let lastTime = 0;
      let targetTime = 0;
      try {
        if (Object.prototype.toString.call(this.target) === '[object Date]') {
          targetTime = this.target.getTime();
        } else {
          targetTime = new Date(this.target).getTime();
        }
      } catch (e) {
        throw new Error('invalid target prop', e);
      }

      lastTime = targetTime - new Date().getTime();
      this.lastTime = lastTime < 0 ? 0 : lastTime;
    },
    tick() {
      let { lastTime } = this;

      this.timer = setTimeout(() => {
        if (lastTime < this.interval) {
          clearTimeout(this.timer);
          this.lastTime = 0;
        } else {
          lastTime -= this.interval;
          this.lastTime = lastTime;
        }
      }, this.interval);
    },
  },
  mounted() {
    this.initTime();
    this.tick();
  },
  updated() {
    clearTimeout(this.timer);
    this.tick();
  },
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
</script>

