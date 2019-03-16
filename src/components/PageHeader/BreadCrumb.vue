<template>
  <a-breadcrumb class="breadcrumb" :separator="breadcrumbSeparator">
    <a-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
      {{item.title}}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    breadcrumbList: Array,
    breadcrumbSeparator: String,
  }
}
</script>

<style lang="less" scoped>
.breadcrumb {
  margin-bottom: 16px;
}
</style>


