<template>
  <div>
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
        <standard-form-row title="owner" grid>
          <a-form-item
            :wrapper-col="{xs: {span: 24}, sm: {span: 24}, md: {span: 12}}"
          >
            <a-select
              mode="multiple"
              :style="{ maxWidth: '286px', width: '100%' }"
              placeholder="选择 owner"
              v-decorator="[
                'owner',
                {initialValue: ['zzr', 'zm']}
              ]"
            >
              <a-select-option v-for="item in owers" :key="item.id" :value="item.id">
                {{item.name}}
              </a-select-option>
            </a-select>
            <a class="selfTrigger" @click="setOwner">
                只看自己的
            </a>
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
                </a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </standard-form-row>
      </a-form>
    </a-card>
    <a-card
      :style="{ marginTop: 24 }"
      :bordered="false"
      :bodyStyle="{ padding: '8px 32px 32px 32px' }"
    ></a-card>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
import StandardFormRow from '@/components/StandardFormRow'
import TagSelect from '@/components/TagSelect'
const {mapState} = createNamespacedHelpers('list')

export default {
  name: 'Articles',
  components: {
    StandardFormRow,
    TagSelect
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
    this.$store.dispatch('list/fetch', {count: 5})
  },
  methods: {
    setOwner() {
      this.form.setFieldsValue({
        owner: ['xzx'],
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import '~ant-design-vue/lib/style/themes/default.less';

a.listItemMetaTitle {
  color: @heading-color;
}
.listItemExtra {
  width: 272px;
  height: 1px;
}
.selfTrigger {
  margin-left: 12px;
}

@media screen and (max-width: @screen-xs) {
  .selfTrigger {
    display: block;
    margin-left: 0;
  }
}
@media screen and (max-width: @screen-md) {
  .selfTrigger {
    display: block;
    margin-left: 0;
  }
}
@media screen and (max-width: @screen-lg) {
  .listItemExtra {
    width: 0;
    height: 1px;
  }
}

</style>