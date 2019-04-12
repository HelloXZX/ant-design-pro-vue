<template>
  <div :class="{right: true}">
    <a-tooltip title="GitHub" placement="bottom">
      <a
        target="_blank"
        href="https://github.com/HelloXZX/ant-design-pro-vue"
        class="action"
      >
        <a-icon type="github" />
      </a>
    </a-tooltip>
    <span :class="{action: true, account: true}">
      <a-avatar
        size="small"
        class="avatar"
        :src="currentUser.avatar"
        alt="avatar"
      />
      <span class="name">{{currentUser.name}}</span>
    </span>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const userMapState = createNamespacedHelpers('user').mapState


export default {
  name: 'RightContent',
  computed: {
    ...userMapState(['currentUser']),
  },
  methods: {
    toggle() {
      this.$emit('collapse');
    }
  },
  mounted() {
    this.$store.dispatch('user/fetchCurrent');
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

@pro-header-hover-bg: rgba(0, 0, 0, 0.025);

.header {
  position: relative;
  height: @layout-header-height;
  padding: 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.logo {
  display: inline-block;
  height: @layout-header-height;
  padding: 0 0 0 24px;
  font-size: 20px;
  line-height: @layout-header-height;
  vertical-align: top;
  cursor: pointer;
  img {
    display: inline-block;
    vertical-align: middle;
  }
}

.menu {
  :global(.anticon) {
    margin-right: 8px;
  }
  :global(.ant-dropdown-menu-item) {
    min-width: 160px;
  }
}

.trigger {
  height: @layout-header-height;
  padding: ~'calc((@{layout-header-height} - 20px) / 2)' 24px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s, padding 0s;
  &:hover {
    background: @pro-header-hover-bg;
  }
}

.right {
  float: right;
  height: 100%;
  overflow: hidden;
  .action {
    display: inline-block;
    height: 100%;
    padding: 0 12px;
    cursor: pointer;
    transition: all 0.3s;
    > i {
      color: @text-color;
      vertical-align: middle;
    }
    &:hover {
      background: @pro-header-hover-bg;
    }
    &:global(.opened) {
      background: @pro-header-hover-bg;
    }
  }
  .search {
    padding: 0 12px;
    &:hover {
      background: transparent;
    }
  }
  .account {
    .avatar {
      margin: ~'calc((@{layout-header-height} - 24px) / 2)' 0;
      margin-right: 8px;
      color: @primary-color;
      vertical-align: top;
      background: rgba(255, 255, 255, 0.85);
    }
  }
}

.dark {
  height: @layout-header-height;
  .action {
    color: rgba(255, 255, 255, 0.85);
    > i {
      color: rgba(255, 255, 255, 0.85);
    }
    &:hover,
    &:global(.opened) {
      background: @primary-color;
    }
    :global(.ant-badge) {
      color: rgba(255, 255, 255, 0.85);
    }
  }
}

@media only screen and (max-width: @screen-md) {
  .header {
    :global(.ant-divider-vertical) {
      vertical-align: unset;
    }
    .name {
      display: none;
    }
    i.trigger {
      padding: 22px 12px;
    }
    .logo {
      position: relative;
      padding-right: 12px;
      padding-left: 12px;
    }
    .right {
      position: absolute;
      top: 0;
      right: 12px;
      background: #fff;
      .account {
        .avatar {
          margin-right: 0;
        }
      }
    }
  }
}

</style>

