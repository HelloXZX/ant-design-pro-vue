<template>
  <div :class="{main: true}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridContent',
}
</script>

<style lang="less">
.main {
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition: 0.3s;
  &.wide {
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>

