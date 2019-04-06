<template>
  <div class="listContent">
    <div class="description">{{data.content}}</div>
    <div class="extra">
      <a-avatar :src="data.avatar" size="small" />
      <a :href="data.href">{{data.owner}}</a> 发布在 <a :href="data.href">{{data.href}}</a>
      <em>{{moment(data.updatedAt).format('YYYY-MM-DD HH:mm')}}</em>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ArticleListContent',
  props: {
    data: Object,
  },
  methods: {
    moment,
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

.listContent {
  .description {
    max-width: 720px;
    line-height: 22px;
  }
  .extra {
    margin-top: 16px;
    color: @text-color-secondary;
    line-height: 22px;
    & > :global(.ant-avatar) {
      position: relative;
      top: 1px;
      width: 20px;
      height: 20px;
      margin-right: 8px;
      vertical-align: top;
    }
    & > em {
      margin-left: 16px;
      color: @disabled-color;
      font-style: normal;
    }
  }
}

@media screen and (max-width: @screen-xs) {
  .listContent {
    .extra {
      & > em {
        display: block;
        margin-top: 8px;
        margin-left: 0;
      }
    }
  }
}

</style>


