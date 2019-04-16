<template>
  <div :class="{tagSelect: true, hasExpandTag: expandable, expanded: expand}">
    <a-checkable-tag
      key="all"
      :checked="isCheckAll"
      @change="handleSelectAll"
    >
      全部
    </a-checkable-tag>
    <a-checkable-tag
      v-for="item in tagList"
      :key="item.tag"
      :checked="selectedTags.indexOf(item.tag) > -1"
      @change="(checked) => handleChange(item.tag, checked)"
    >
      {{item.name}}
    </a-checkable-tag>
    <a v-show="expandable" class="trigger" @click="handleExpand">
      {{expand ? '收起' : '展开'}} <a-icon :type="expand ? 'up' : 'down'" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'TagSelect',
  data() {
    return {
      expand: false,
      selectedTags: [],
      isCheckAll: false,
    }
  },
  props: {
    tagList: Array,
    expandable: Boolean,
  },
  methods: {
    handleChange (tag, checked) {
      const { selectedTags } = this
      const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter(t => t !== tag)
      this.selectedTags = nextSelectedTags
      this.$emit('change', nextSelectedTags);
    },
    handleSelectAll() {
      if (!this.isCheckAll) {
        const nextSelectedTags = this.tagList.map(item => item.tag);
        this.selectedTags = nextSelectedTags;
        this.$emit('change', nextSelectedTags);
      } else {
        const nextSelectedTags = [];
        this.selectedTags = [];
        this.$emit('change', nextSelectedTags);
      }
      this.isCheckAll = !this.isCheckAll;
      
    },
    handleExpand() {
      this.expand = !this.expand;
    }
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

.tagSelect {
  position: relative;
  max-height: 32px;
  margin-left: -8px;
  overflow: hidden;
  line-height: 32px;
  transition: all 0.3s;
  user-select: none;
  :global {
    .ant-tag {
      margin-right: 24px;
      padding: 0 8px;
      font-size: @font-size-base;
    }
  }
  &.expanded {
    max-height: 200px;
    transition: all 0.3s;
  }
  .trigger {
    position: absolute;
    top: 0;
    right: 0;
    i {
      font-size: 12px;
    }
  }
  &.hasExpandTag {
    padding-right: 50px;
  }
}
</style>

