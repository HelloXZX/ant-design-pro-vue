<template>
  <div>
    <div class="item">
      <div class="line"></div>
      <a-icon type="plus-circle" />
      <div class="content">
        dfasdf
        dfsdfdsf
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.item {
  position: relative;
  display: flex;
}
.line {
  position: absolute;
  display: block;
  height: 100%;
  width: 2px;
  top: 0;
  left: 5px;
  background: red;
  padding: 15px 0 5px;
  ::after {
      height: 100%;
  background: blue;
  width: 1px;
  }
}
.line::after {
  height: 100%;
  background: blue;
  width: 1px;
}
.content {
  height: 50px;
}
</style>

