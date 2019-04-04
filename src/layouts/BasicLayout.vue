<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <sider-menu :collapsed='collapsed' :menuData='menuData' />
    <a-layout style="min-height: 100vh">
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', minHeight: '280px' }">
        <router-view />
      </a-layout-content>
      <basic-footer />
    </a-layout>
  </a-layout>
</template>
<script>
import BasicFooter from './BasicFooter.vue'
import SiderMenu from '../components/SiderMenu.vue'
import menuData from '../config/menu.config.js'
export default {
  components: {
    BasicFooter,
    SiderMenu
  },
  data(){
    return {
      collapsed: false,
      menuData: menuData,
    }
  },
}
</script>
<style scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>