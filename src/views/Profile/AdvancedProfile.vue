<template>
  <div>
    <page-header 
      :breadcrumbList="breadcrumbList"
      :style="{ margin: '-20px -24px 0' }"
      title="单号：234231029431"
      :tabList="tabList"
      @tabChange="tabChange"
      :tabActiveKey="tabActiveKey"
    >
      <img slot="logo" alt="" src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png" />
      <div slot="action">
        <a-button-group>
          <a-button>操作</a-button>
          <a-button>操作</a-button>
          <a-dropdown placement="bottomRight">
            <a-menu slot="overlay">
              <a-menu-item key="1">选项一</a-menu-item>
              <a-menu-item key="2">选项二</a-menu-item>
              <a-menu-item key="3">选项三</a-menu-item>
            </a-menu>
            <a-button>
              <a-icon type="ellipsis" />
            </a-button>
          </a-dropdown>
        </a-button-group>
        <a-button type="primary">主操作</a-button>
      </div>
      <description-list slot="content" class="headerList" size="small" col="2">
        <description :col="2" term="创建人">曲丽丽</description>
        <description :col="2" term="订购产品">XX 服务</description>
        <description :col="2" term="创建时间">2017-07-07</description>
        <description :col="2" term="关联单据">
          <a href="">12421</a>
        </description>
        <description :col="2" term="生效日期">2017-07-07 ~ 2017-08-08</description>
        <description :col="2" term="备注">请于两个工作日内确认</description>
      </description-list>
      <a-row slot="extraContent">
        <a-col :xs="24" :sm="12">
          <div class="textSecondary">状态</div>
          <div class="heading">待审批</div>
        </a-col>
        <a-col :xs="24" :sm="12">
          <div class="textSecondary">订单金额</div>
          <div class="heading">¥ 568.08</div>
        </a-col>
      </a-row>
    </page-header>
    <a-card title="流程进度" :style="{ marginBottom: '24px', marginTop: '24px' }" :bordered="false">
      <a-steps direction="horizontal" :current="1">
        <!-- <div 
          slot="progressDot" 
          slot-scope="{index, status, title, description, prefixCls}" 
        > -->
          <a-popover slot="progressDot" slot-scope="{index, status, title, description, prefixCls}" v-if="status === 'process'" >
            <div slot="content"  :style="{ width: '160px' }">
              吴加号
              <span class="textSecondary" :style="{ float: 'right' }">
                <a-badge status="default">
                  <span slot="text" :style="{ color: 'rgba(0, 0, 0, 0.45)' }">未响应</span>
                </a-badge>
              </span>
              <div class="textSecondary" :style="{ marginTop: '4px' }">
                耗时：2小时25分钟
              </div>
            </div>
            <span :class="`${prefixCls}-icon-dot`"></span>
          </a-popover>
          <span v-else slot="progressDot" slot-scope="{index, status, title, description, prefixCls}" :class="`${prefixCls}-icon-dot`"></span>
        
        <a-step title="创建项目">
          <div slot="description" :class="{textSecondary: true, stepDescription: true}">
            <div>
              曲丽丽
              <a-icon type="dingding-o" style="{ marginLeft: '8px' }" />
            </div>
            <div>2016-12-12 12:32</div>
          </div>
        </a-step>
        <a-step title="部门初审">
          <div slot="description" class="stepDescription">
            <div>
              周毛毛
              <a-icon type="dingding-o" :style="{ color: '#4fc08d', marginLeft: '8px' }" />
            </div>
            <div>
              <a href="">催一下</a>
            </div>
          </div>
        </a-step>
        <a-step title="财务复核" />
        <a-step title="完成" />
      </a-steps>
    </a-card>

    <a-card title="用户信息" :style="{ marginBottom: '24px' }" :bordered="false">
      <description-list :style="{ marginBottom: '24px' }">
        <description term="用户姓名">付小小</description>
        <description term="会员卡号">32943898021309809423</description>
        <description term="身份证">3321944288191034921</description>
        <description term="联系方式">18112345678</description>
        <description term="联系地址">
          曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口
        </description>
      </description-list>
      <description-list :style="{ marginBottom: '24px' }" title="信息组">
        <description term="某某数据">725</description>
        <description term="该数据更新时间">2017-08-08</description>
        <description>&nbsp;</description>
        <description>
          <span slot="term">
            某某数据
            <a-tooltip title="数据说明">
              <a-icon
                :style="{ color: 'rgba(0, 0, 0, 0.43)', marginLeft: 4 }"
                type="info-circle-o"
              />
            </a-tooltip>
          </span>
          725
        </description>
        <description term="该数据更新时间">2017-08-08</description>
      </description-list>
      <h4 :style="{ marginBottom: '16px' }">信息组</h4>
      <a-card type="inner" title="多层级信息组">
        <description-list size="small" :style="{ marginBottom: '16px' }" title="组名称">
          <description term="负责人">林东东</description>
          <description term="角色码">1234567</description>
          <description term="所属部门">XX公司 - YY部</description>
          <description term="过期时间">2017-08-08</description>
          <description term="描述">
            这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...
          </description>
        </description-list>
        <a-divider :style="{ margin: '16px 0' }" />
        <description-list size="small" :style="{ marginBottom: '16px' }" title="组名称" col="1">
          <description :col="1" term="学名">
            Citrullus lanatus (Thunb.) Matsum. et
            Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..
          </description>
        </description-list>
        <a-divider :style="{ margin: '16px 0' }" />
        <description-list size="small" title="组名称">
          <description term="负责人">付小小</description>
          <description term="角色码">1234568</description>
        </description-list>
      </a-card>
    </a-card>

    <a-card title="用户近半年来电记录" :style="{ marginBottom: '24px' }" :bordered="false">
      <div class="noData">
        <a-icon type="frown-o" />
        暂无数据
      </div>
    </a-card>

    <a-card
      class="tabsCard"
      :bordered="false"
      :tabList="tabCardList"
      :activeTabKey="key"
      @tabChange="key => onTabChange(key, 'key')"
    >
      <a-table
        v-if="key === 'tab1'"
        :pagination="false"
        :loading="loading"
        :dataSource="data.advancedOperation1"
        :columns="columns"
      />
      <a-table
        v-else-if="key === 'tab2'"
        :pagination="false"
        :loading="loading"
        :dataSource="data.advancedOperation2"
        :columns="columns"
      />
      <a-table
        v-else-if="key === 'tab3'"
        :pagination="false"
        :loading="loading"
        :dataSource="data.advancedOperation3"
        :columns="columns"
      />
    </a-card>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import DescriptionList from '@/components/DescriptionList/DescriptionList'
import Description from '@/components/DescriptionList/Description'
import {createNamespacedHelpers} from 'vuex'
const {mapState} = createNamespacedHelpers('profile')

export default {
  name: 'AdvancedProfile',
  components: {
    PageHeader,
    DescriptionList,
    Description,
  },
  computed: {
    ...mapState(['data', 'loading']),
    goodsData() {
      let num = 0;
      let amount = 0;
      this.data.basicGoods.forEach(item => {
        num += Number(item.num);
        amount += Number(item.amount);
      });
      return this.data.basicGoods.concat({
        id: '总计',
        num,
        amount,
      });
    }
  },
  data() {
    return {
      breadcrumbList: [
        {title: '首页'},
        {title: '详情页'},
        {title: '高级详情页'},
      ],
      tabList: [
        {
          key: 'detail',
          tab: '详情',
        },
        {
          key: 'rule',
          tab: '规则',
        },
      ],
      tabActiveKey: 'detail',
      tabCardList: [
        {
          key: 'tab1',
          tab: '操作日志一',
        },
        {
          key: 'tab2',
          tab: '操作日志二',
        },
        {
          key: 'tab3',
          tab: '操作日志三',
        },
      ],
      key: 'tab1',
      columns: [
        {
          title: '操作类型',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '操作人',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '执行结果',
          dataIndex: 'status',
          key: 'status',
          customRender: text =>
            text === 'agree' ? (
              <a-badge status="success" text="成功" />
            ) : (
              <a-badge status="error" text="驳回" />
            ),
        },
        {
          title: '操作时间',
          dataIndex: 'updatedAt',
          key: 'updatedAt',
        },
        {
          title: '备注',
          dataIndex: 'memo',
          key: 'memo',
        },
      ]
    }
  },
  methods: {
    tabChange: function(key) {
      this.tabActiveKey = key
    },
    onTabChange: function(key) {
      this.key = key;
    },
    renderContent: function(value, row, index) {
      const obj = {
        children: value,
        props: {},
      };
      if (index === this.data.basicGoods.length) {
        obj.props.colSpan = 0;
      }
      return obj;
    }
  },

  mounted() {
    this.$store.dispatch('profile/fetchAdvanced');
  },

}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';

.headerList {
  margin-bottom: 4px;
}

.tabsCard {
  :global {
    .ant-card-head {
      padding: 0 16px;
    }
  }
}

.noData {
  color: @disabled-color;
  font-size: 16px;
  line-height: 64px;
  text-align: center;
  i {
    position: relative;
    top: 3px;
    margin-right: 16px;
    font-size: 24px;
  }
}

.heading {
  color: @heading-color;
  font-size: 20px;
}

.stepDescription {
  position: relative;
  left: 38px;
  padding-top: 8px;
  font-size: 14px;
  text-align: left;

  > div {
    margin-top: 8px;
    margin-bottom: 4px;
  }
}

.textSecondary {
  color: @text-color-secondary;
}

@media screen and (max-width: @screen-sm) {
  .stepDescription {
    left: 8px;
  }
}

</style>



