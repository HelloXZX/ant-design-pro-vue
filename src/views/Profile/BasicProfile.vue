<template>
  <div>
    <page-header 
      :breadcrumbList="breadcrumbList"
      :style="{ margin: '-20px -24px 0' }"
      title="基础详情页"
    />
    <a-card :bordered="false" :style="{marginTop: '24px'}">
      <description-list size="large" title="退款申请" :style="{mariginBotton: '32px'}">
        <description term="取货单号">{{data.application.id}}</description>
        <description term="状态">{{data.application.status}}</description>
        <description term="销售单号">{{data.application.orderNo}}</description>
        <description term="子订单">{{data.application.childOrderNo}}</description>
      </description-list>
      <a-divider :style="{ marginBottom: '32px' }" />
      <description-list size="large" title="用户信息" :style="{mariginBotton: '32px'}">
        <description term="用户姓名">{{data.userInfo.name}}</description>
        <description term="联系电话">{{data.userInfo.tel}}</description>
        <description term="常用快递">{{data.userInfo.delivery}}</description>
        <description term="取货地址">{{data.userInfo.addr}}</description>
        <description term="备注">{{data.userInfo.remark}}</description>
      </description-list>
      <a-divider :style="{ marginBottom: '32px' }" />
      <div class="title">退货商品</div>
      <a-table
        :style="{ marginBottom: '24px' }"
        :loading="loading"
        :dataSource="goodsData"
        :columns="goodsColumns"
        :pagination="false"
        :rowKey="record => record.id"
      />
      <div class="title">退货进度</div>
      <a-table
        :style="{ marginBottom: '16px' }"
        :loading="loading"
        :dataSource="data.basicProgress"
        :columns="progressColumns"
        :pagination="false"
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
  name: 'BasicProfile',
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
        {title: '基础详情页'},
      ],
      goodsColumns: [
        {
          title: '商品编号',
          dataIndex: 'id',
          key: 'id',
          customRender: (text, row, index) => {
            if (index < this.data.basicGoods.length) {
              return <a href="">{text}</a>
            }
            return {
              children: <span style={{ fontWeight: 600 }}>总计</span>,
              props: {
                colSpan: 4,
              },
            };
          }
        },
        {
          title: '商品名称',
          dataIndex: 'name',
          key: 'name',
          customRender: this.renderContent,
        },
        {
          title: '商品条码',
          dataIndex: 'barcode',
          key: 'barcode',
          customRender: this.renderContent,
        },
        {
          title: '单价',
          dataIndex: 'price',
          key: 'price',
          align: 'right',
          customRender: this.renderContent,
        },
        {
          title: '数量（件）',
          dataIndex: 'num',
          key: 'num',
          align: 'right',
          customRender: (text, row, index) => {
            if (index < this.data.basicGoods.length) {
              return text;
            }
            return <span style={{ fontWeight: 600 }}>{text}</span>;
          },
        },
        {
          title: '金额',
          dataIndex: 'amount',
          key: 'amount',
          align: 'right',
          customRender: (text, row, index) => {
            if (index < this.data.basicGoods.length) {
              return text;
            }
            return <span style={{ fontWeight: 600 }}>{text}</span>;
          },
        },
      ],
      progressColumns: [
        {
          title: '时间',
          dataIndex: 'time',
          key: 'time',
        },
        {
          title: '当前进度',
          dataIndex: 'rate',
          key: 'rate',
        },
        {
          title: '状态',
          dataIndex: 'status',
          key: 'status',
          customRender: text =>
            text === 'success' ? (
              <a-badge status="success" text="成功" />
            ) : (
              <a-badge status="processing" text="进行中" />
            ),
        },
        {
          title: '操作员ID',
          dataIndex: 'operator',
          key: 'operator',
        },
        {
          title: '耗时',
          dataIndex: 'cost',
          key: 'cost',
        },  
      ]
    }
  },
  methods: {
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
    this.$store.dispatch('profile/fetchBasic', '1000000000');
  },

}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

.title {
  margin-bottom: 16px;
  color: @heading-color;
  font-weight: 500;
  font-size: 16px;
}
</style>


