<template>
  <div class="pageHeader">
    <div :class="{wide: !!wide}" >
        <bread-crumb v-show="!hiddenBreadcrumb" :breadcrumbList="breadcrumbList" breadcrumbSeparator="/" ></bread-crumb>
        <!-- {hiddenBreadcrumb ? null : <BreadcrumbView {...this.props} />} -->
        <div class="detail">
          <div v-show="$slots.logo" class="logo">
            <slot name="logo"></slot>
          </div>
          <div class="main">
            <div class="row">
              <h1 class="title">{{title}}</h1>
              <div v-show="$slots.action" class="action">
                <slot name="action"></slot>
              </div>
            </div>
            <div class="row">
              <div v-show="$slots.content" class="content">
                <slot name="content"></slot>
              </div>
              <div v-show="$slots.content" class="extraContent">
                <slot name="extraContent"></slot>
              </div>
            </div>
          </div>
        </div>
        
        <!-- {tabList && tabList.length ? (
          <Tabs
            className={styles.tabs}
            {...activeKeyProps}
            onChange={this.onChange}
            tabBarExtraContent={tabBarExtraContent}
          >
            {tabList.map(item => (
              <TabPane tab={item.tab} key={item.key} />
            ))}
          </Tabs>
        ) : null} -->
    </div>
  </div>
</template>

<script>
import BreadCrumb from './BreadCrumb';
export default {
  name: 'PageHeader',
  props: {
    title: String,
    logo: String,
    action:  String,
    routes: Array,
    breadcrumbList: Array,
    tabList: Array,
    tabActiveKey: String,
    tabDefaultActiveKey: String,
    tabBarExtraContent: String,
    wide: Boolean,
    hiddenBreadcrumb: Boolean,
  },
  components: {
    BreadCrumb,
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

.pageHeader {
  padding: 16px 32px 0 32px;
  background: @component-background;
  border-bottom: @border-width-base @border-style-base @border-color-split;
  .wide {
    max-width: 1200px;
    margin: auto;
  }
  .detail {
    display: flex;
  }

  .row {
    display: flex;
    width: 100%;
  }

  .breadcrumb {
    margin-bottom: 16px;
  }

  .tabs {
    margin: 0 0 0 -8px;

    :global {
      // 1px 可以让选中效果显示完成
      .ant-tabs-bar {
        margin-bottom: 1px;
        border-bottom: none;
      }
    }
  }

  .logo {
    flex: 0 1 auto;
    margin-right: 16px;
    padding-top: 1px;
    > img {
      display: block;
      width: 28px;
      height: 28px;
      border-radius: @border-radius-base;
    }
  }

  .title {
    color: @heading-color;
    font-weight: 500;
    font-size: 20px;
  }

  .action {
    min-width: 266px;
    margin-left: 56px;

    :global {
      .ant-btn-group:not(:last-child),
      .ant-btn:not(:last-child) {
        margin-right: 8px;
      }

      .ant-btn-group > .ant-btn {
        margin-right: 0;
      }
    }
  }

  .title,
  .content {
    flex: auto;
  }

  .action,
  .extraContent,
  .main {
    flex: 0 1 auto;
  }

  .main {
    width: 100%;
  }

  .title,
  .action {
    margin-bottom: 16px;
  }

  .logo,
  .content,
  .extraContent {
    margin-bottom: 16px;
  }

  .action,
  .extraContent {
    text-align: right;
  }

  .extraContent {
    min-width: 242px;
    margin-left: 88px;
  }
}

@media screen and (max-width: @screen-xl) {
  .pageHeader {
    .extraContent {
      margin-left: 44px;
    }
  }
}

@media screen and (max-width: @screen-lg) {
  .pageHeader {
    .extraContent {
      margin-left: 20px;
    }
  }
}

@media screen and (max-width: @screen-md) {
  .pageHeader {
    .row {
      display: block;
    }

    .action,
    .extraContent {
      margin-left: 0;
      text-align: left;
    }
  }
}

@media screen and (max-width: @screen-sm) {
  .pageHeader {
    .detail {
      display: block;
    }
  }
}

@media screen and (max-width: @screen-xs) {
  .pageHeader {
    .action {
      :global {
        .ant-btn-group,
        .ant-btn {
          display: block;
          margin-bottom: 8px;
        }
        .ant-btn-group > .ant-btn {
          display: inline-block;
          margin-bottom: 0;
        }
      }
    }
  }
}

</style>


