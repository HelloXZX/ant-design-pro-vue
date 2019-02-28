import Vue from 'vue'
import {Button, Layout, Menu, Icon, Card} from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.component(Button.name, Button);
Vue.component(Layout.name, Layout);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Menu.SubMenu.name, Menu.SubMenu);
Vue.component(Icon.name, Icon);
Vue.component(Card.name, Card);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
