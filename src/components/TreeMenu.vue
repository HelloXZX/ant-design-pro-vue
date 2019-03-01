<script>
export default {
  name: 'TreeMenu',
  functional: true,
  componentName: 'TreeMenu',
  props: {
    menuData: Array,
    default: [],
  },
  render(h, context) {
    const {menuData} = context.props;
    const renderParentMenu = item => {
      return (
        <a-menu-item key={item.path}>
          <router-link to={item.path}>
            <a-icon type={item.icon} />
            <span>{item.name}</span>
          </router-link>
        </a-menu-item>
      )
    }
    const renderSubMenu = item => {
      return (
        <a-sub-menu key={item.path}>
          <span slot="title">
            <router-link to={item.path}>
              <a-icon type={item.icon} />
              <span>{item.name}</span>
            </router-link>
          </span>
          {renderMenu(item.children)}
        </a-sub-menu>
      )
    }
    const renderMenu = items => {
      return items.map(item => {
        if (item.children) {
          return renderSubMenu(item)
          //return renderParentMenu(item)
        } else {
          return renderParentMenu(item)
        }
      })
    }
    return renderMenu(menuData);
  }
}
</script>