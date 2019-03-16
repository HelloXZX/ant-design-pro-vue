import Vue from 'vue'
import VueResizeText from 'vue-resize-text'

import {
  Button, 
  Layout, 
  Menu, 
  Icon, 
  Card,
  Tooltip,
  Row,
  Col,
  Tabs,
  DatePicker,
  Dropdown,
  Table,
  Pagination,
  Divider,
  Breadcrumb,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  
} from 'ant-design-vue'
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
Vue.component(Tooltip.name, Tooltip);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Tabs.name, Tabs);
Vue.component(Tabs.TabPane.name, Tabs.TabPane);
Vue.component(DatePicker.name, DatePicker);
Vue.component(DatePicker.RangePicker.name, DatePicker.RangePicker);
Vue.component(Dropdown.name, Dropdown);
Vue.component(Table.name, Table);
Vue.component(Table.Column.name, Table.Column);
Vue.component(Pagination.name, Pagination);
Vue.component(Divider.name, Divider);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item);
Vue.component(Form.name, Form);
Vue.component(Form.Item.name, Form.Item);
Vue.component(Input.name, Input);
Vue.component(Input.TextArea.name, Input.TextArea);
Vue.component(Radio.name, Radio);
Vue.component(Radio.Group.name, Radio.Group);


Vue.use(VueResizeText)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
