<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    v-model="collapsed"
    class="sider"
    width="265"
  >
    <div class="logo">
      <router-link to="/">
        <img :src="logo" alt="logo" />
        <h1>{{title}}</h1>
      </router-link>
    </div>
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="defaultSelectedKeys" :openKeys="openKeys" @openChange="handleOpenChange">
      <TreeMenu :menuData="menuData" />
    </a-menu>
  </a-layout-sider>
</template>


<script>
import TreeMenu from './TreeMenu.vue';
import menuData from '@/config/menu.config.js'

const rootKey = menuData.map(item => item.path)

export default {
  components: {
    TreeMenu
  },
  props: {
    collapsed: Boolean,
    menuData: Array,
    logo: String,
    title: String,
  },
  data() {
    return {
      rootKey: [],
      openKeys: [],
      defaultSelectedKeys: [],
    }
  },
  methods: {
    handleOpenChange: function(openKeys) {
      const lastestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootKey.indexOf(lastestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = lastestOpenKey ? [lastestOpenKey] :  []
      }
    },
    getRootKeys(menuData) {
      menuData.forEach(item => {
        if (item.children) {
          this.getRootKeys(item.children);
          this.rootKey.push(item.path);
        }
      });
    }
  },
  beforeMount() {
    this.defaultSelectedKeys = [this.$route.path];
    this.getRootKeys(menuData);
    this.openKeys = [];
    this.rootKey.forEach(item => {
      if(this.$route.path.indexOf(item) > -1) {
        this.openKeys.push(item);
      }
    });
    //this.openKeys = [this.$route.path];
  },
  mounted() {
    console.log(this.rootKey);
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';
@nav-header-height: @layout-header-height;

.logo {
  position: relative;
  height: @nav-header-height;
  padding-left: (@menu-collapsed-width - 32px) / 2;
  overflow: hidden;
  line-height: @nav-header-height;
  background: #002140;
  transition: all 0.3s;
  img {
    display: inline-block;
    height: 32px;
    vertical-align: middle;
  }
  h1 {
    display: inline-block;
    margin: 0 0 0 12px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
    vertical-align: middle;
  }
}
.sider {
  position: relative;
  z-index: 10;
  min-height: 100vh;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  &.fixSiderBar {
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
    :global {
      .ant-menu-root {
        height: ~'calc(100vh - @{nav-header-height})';
        overflow-y: auto;
      }
      .ant-menu-inline {
        border-right: 0;
        .ant-menu-item,
        .ant-menu-submenu-title {
          width: 100%;
        }
      }
    }
  }
  &.light {
    background-color: white;
    box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
    .logo {
      background: white;
      box-shadow: 1px 1px 0 0 @border-color-split;
      h1 {
        color: @primary-color;
      }
    }
    :global(.ant-menu-light) {
      border-right-color: transparent;
    }
  }
}

.icon {
  width: 14px;
  vertical-align: baseline;
}
a {
  color: #ffffff;
}

:global {
  .top-nav-menu li.ant-menu-item {
    height: @nav-header-height;
    line-height: @nav-header-height;
  }
  .drawer .drawer-content {
    background: #001529;
  }
  .ant-menu-inline-collapsed {
    & > .ant-menu-item .sider-menu-item-img + span,
    &
      > .ant-menu-item-group
      > .ant-menu-item-group-list
      > .ant-menu-item
      .sider-menu-item-img
      + span,
    & > .ant-menu-submenu > .ant-menu-submenu-title .sider-menu-item-img + span {
      display: inline-block;
      max-width: 0;
      opacity: 0;
    }
  }
  .ant-menu-item .sider-menu-item-img + span,
  .ant-menu-submenu-title .sider-menu-item-img + span {
    opacity: 1;
    transition: opacity 0.3s @ease-in-out, width 0.3s @ease-in-out;
  }
  .ant-drawer-left {
    .ant-drawer-body {
      padding: 0;
    }
  }
}
</style>

