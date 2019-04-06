<template>
  <div class="filterCardList">
    <a-card :style="{marginTop: '24px'}">
      <a-form
        layout="inline"
        :form="form"
      >
        <standard-form-row title="所属类目" block :style="{ paddingBottom: '11px' }">
          <a-form-item>
            <tag-select
              v-decorator="[
                'category'
              ]"
              :tagList="tagList"
              expandable
            ></tag-select>
          </a-form-item>
        </standard-form-row>
        <standard-form-row title="其它选项" grid last>
          <a-row :gutter="16">
            <a-col :xl="8" :lg="10" :md="12" :sm="24" :xs="24">
              <a-form-item
                :wrapper-col="{xs: {span: 24}, sm: {span: 24}, md: {span: 12}}"
                label="活跃用户"
              >
                <a-select
                  v-decorator="[
                    'user',
                    {}
                  ]"
                  placeholder="不限" 
                  :style="{ maxWidth: '200px', width: '100%' }"
                >
                  <a-select-option value="xzx">XZX</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :xl="8" :lg="10" :md="12" :sm="24" :xs="24">
              <a-form-item
                :wrapper-col="{xs: {span: 24}, sm: {span: 24}, md: {span: 12}}"
                label="好评度"

              >
                <a-select
                  v-decorator="[
                    'rate',
                    {}
                  ]"
                  placeholder="不限" 
                  :style="{ maxWidth: '200px', width: '100%' }"
                >
                  <a-select-option value="good">优秀</a-select-option>
                  <a-select-option value="normal">普通</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </standard-form-row>
      </a-form>
    </a-card>
    <a-list
      :style="{marginTop: '24px'}"
      rowKey="id"
      :dataSource="list"
      :grid="{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }"
    >
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-card
          class="card"
          hoverable
        >
          <a-tooltip slot="actions" title="下载">
            <a-icon type="download" />
          </a-tooltip>
          <a-tooltip slot="actions" title="编辑">
            <a-icon type="edit" />
          </a-tooltip>
          <a-tooltip slot="actions" title="分享">
            <a-icon type="share-alt" />
          </a-tooltip>
          <a-dropdown slot="actions">
            <a-menu slot="overlay">
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.alipay.com/">
                  1st menu item
                </a>
              </a-menu-item>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.taobao.com/">
                  2nd menu item
                </a>
              </a-menu-item>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.tmall.com/">
                  3d menu item
                </a>
              </a-menu-item>
            </a-menu>
            <a-icon type="ellipsis" />
          </a-dropdown>
          <a-card-meta>
            <a-avatar slot="avatar" size="small" :src="item.avatar" />
            <a slot="title">{{item.title}}</a>
          </a-card-meta>
          <div class="cardItemContent">
            <div class="cardInfo">
              <div>
                <p>活跃用户</p>
                <p>
                  <span v-if="item.activeUser>1000">
                    {{Math.floor(item.activeUser / 10000)}}
                    <span
                      :style="{
                        position: 'relative',
                        top: '-2px',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        marginLeft: '2px',
                      }"
                    >
                      万
                    </span>
                  </span>
                  <span v-else>
                    {{item.activeUser}}
                  </span>
                </p>
              </div>
              <div>
                <p>新增用户</p>
                <p>{{numeral(item.newUser).format('0,0')}}</p>
              </div>
            </div>
          </div>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import Vue from 'vue'
import {createNamespacedHelpers} from 'vuex'
import StandardFormRow from '@/components/StandardFormRow'
import ArticleListContent from '@/components/ArticleListContent'
import TagSelect from '@/components/TagSelect'
import AvatarList from '@/components/AvatarList'
import moment from 'moment'
import numeral from 'numeral';


const {mapState} = createNamespacedHelpers('list')


export default {
  name: 'Applications',
  components: {
    StandardFormRow,
    ArticleListContent,
    TagSelect,
    AvatarList
  },
  data() {
    return {
      form: this.$form.createForm(this),
      tagList: [
        {
          tag: 'cat1',
          name: '科目一'
        },
        {
          tag: 'cat2',
          name: '科目二'
        },
        {
          tag: 'cat3',
          name: '科目三'
        },
        {
          tag: 'cat4',
          name: '科目四'
        },
        {
          tag: 'cat5',
          name: '科目五'
        },
        {
          tag: 'cat6',
          name: '科目六'
        },
        {
          tag: 'cat7',
          name: '科目七'
        },
        {
          tag: 'cat8',
          name: '科目二'
        },
        {
          tag: 'cat9',
          name: '科目三'
        },
        {
          tag: 'cat10',
          name: '科目四'
        },
        {
          tag: 'cat11',
          name: '科目五'
        },
        {
          tag: 'cat12',
          name: '科目六'
        },
        {
          tag: 'cat13',
          name: '科目七'
        },
      ],
      owers: [
        {
          id: 'xzx',
          name: '我自己',
        },
        {
          id: 'zm',
          name: '赵敏',
        },
        {
          id: 'zzr',
          name: '周芷若',
        },
        {
          id: 'xz',
          name: '小昭',
        },
      ]
    }
  },
  computed: {
    ...mapState(['list', 'loading'])
  },
  mounted() {
    this.$store.dispatch('list/fetch', {count: 8})
  },
  methods: {
    moment,
    numeral,
  }
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';
@import '~@/utils/utils.less';

.filterCardList {
  margin-bottom: -24px;
  :global {
    .ant-card-meta-content {
      margin-top: 0;
    }
    // disabled white space
    .ant-card-meta-avatar {
      font-size: 0;
    }
    .ant-card-actions {
      background: #f7f9fa;
    }
    .ant-list .ant-list-item-content-single {
      max-width: 100%;
    }
  }
  .cardInfo {
    .clearfix();

    margin-top: 16px;
    margin-left: 40px;
    & > div {
      position: relative;
      float: left;
      width: 50%;
      text-align: left;
      p {
        margin: 0;
        font-size: 24px;
        line-height: 32px;
      }
      p:first-child {
        margin-bottom: 4px;
        color: @text-color-secondary;
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}

</style>