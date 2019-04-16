<template>
  <div class="avatarList">
    <ul>
      <li 
        :class="{
          avatarItem: true, 
          avatarItemLarge: size === 'large',
          avatarItemSmall: size === 'small',
          avatarItemMini: size === 'mini'
        }"
        v-for="item in avatarList.slice(0, numToShow)"
        :key="item.src"
      >
        <a-tooltip v-if="item.tips"  :title="item.tips">
          <a-avatar :src="item.src"  :style="{ cursor: 'pointer' }" />
        </a-tooltip>
        <a-avatar v-else :src="item.src"  />
      </li>
      <li 
        v-show="numToShow < numOfChildren"
        key="exceed"         
        :class="{
          avatarItem: true, 
          avatarItemLarge: size === 'large',
          avatarItemSmall: size === 'small',
          avatarItemMini: size === 'mini'
        }"
      >
        <a-avatar >{{`+${numOfChildren - maxLength}`}}</a-avatar>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AvatarList',
  props: {
    size: String, // 'large' | 'small' | 'mini' | 'default'
    maxLength: Number,
    avatarList: Array, // [{src size tips}]
  },
  computed: {
    numOfChildren() {
      return this.avatarList.length;
    },
    numToShow() {
      const {maxLength, numOfChildren} = this;
      return maxLength >= numOfChildren ? numOfChildren : maxLength;
    }
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

.avatarList {
  display: inline-block;
  ul {
    display: inline-block;
    margin-left: 8px;
    font-size: 0;
  }
}

.avatarItem {
  display: inline-block;
  width: @avatar-size-base;
  height: @avatar-size-base;
  margin-left: -8px;
  font-size: @font-size-base;
  :global {
    .ant-avatar {
      border: 1px solid #fff;
    }
  }
}

.avatarItemLarge {
  width: @avatar-size-lg;
  height: @avatar-size-lg;
}

.avatarItemSmall {
  width: @avatar-size-sm;
  height: @avatar-size-sm;
}

.avatarItemMini {
  width: 20px;
  height: 20px;
  :global {
    .ant-avatar {
      width: 20px;
      height: 20px;
      line-height: 20px;

      .ant-avatar-string {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
</style>

