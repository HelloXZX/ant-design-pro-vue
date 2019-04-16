<template>
  <div class="coverCardList">
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
    <div class="cardList">
      <a-list
        rowKey="id"
        :dataSource="list"
        :grid="{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }"
      >
        <a-list-item slot="renderItem" slot-scope="item">

          <a-card
            class="card"
            hoverable
          >
            <img slot="cover" :alt="item.title" :src="item.cover" />
            <a-card-meta>
              <a slot="title">{{item.title}}</a>
              <div class="description" slot="description">{{item.subDescription}}</div>
            </a-card-meta>
            <div class="cardItemContent">
              <span>{{moment(item.updatedAt).fromNow()}}</span>
              <div class="avatarList">
                <avatar-list 
                  size="mini" 
                  :maxLength="4" 
                  :avatarList="
                    item.members.map((member, i) => (
                      {
                        key: `${item.id}-avatar-${i}`,
                        src: member.avatar,
                        tips: member.name,
                      }
                    ))
                  "
                />
              </div>
            </div>
          </a-card>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import StandardFormRow from '@/components/StandardFormRow'
import TagSelect from '@/components/TagSelect'
import AvatarList from '@/components/AvatarList'
import moment from 'moment'
const {mapState} = createNamespacedHelpers('list')

export default {
  name: 'Articles',
  components: {
    StandardFormRow,
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
  }
}
</script>

<style lang="less">
@import '~ant-design-vue/lib/style/themes/default.less';
@import '~@/utils/utils.less';

.coverCardList {
  margin-bottom: -24px;

  .card {
    :global {
      .ant-card-meta-title {
        margin-bottom: 4px;
        & > a {
          display: inline-block;
          max-width: 100%;
          color: @heading-color;
        }
      }
      .ant-card-meta-description {
        height: 44px;
        overflow: hidden;
        line-height: 22px;
      }
    }

    &:hover {
      :global {
        .ant-card-meta-title > a {
          color: @primary-color;
        }
      }
    }
  }

  .description {
    height: 44px;
    line-height: 22px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
        position: relative;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cardItemContent {
    display: flex;
    height: 20px;
    margin-top: 16px;
    margin-bottom: -4px;
    line-height: 20px;
    & > span {
      flex: 1;
      color: @text-color-secondary;
      font-size: 12px;
    }
    .avatarList {
      flex: 0 1 auto;
    }
  }
  .cardList {
    margin-top: 24px;
  }

  :global {
    .ant-list .ant-list-item-content-single {
      max-width: 100%;
    }
  }
}


</style>