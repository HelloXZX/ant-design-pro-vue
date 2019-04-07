<template>
  <div>
    <page-header 
      :breadcrumbList="breadcrumbList"
      :style="{ margin: '-20px -24px 0' }"
    />
    <a-card :style="{marginTop: '24px'}" :bordered="false">
      <result
        type="success"
        title="提交成功"
      >
        <span slot="description">提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。</span>
        <div slot="extra">
          <div
            :style="{
              fontSize: '16px',
              color: 'rgba(0, 0, 0, 0.85)',
              fontWeight: '500',
              marginBottom: '20px',
            }"
          >
            项目名称
          </div>
          <a-row :style="{ marginBottom: '16px' }">
            <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
              <span :style="{ color: 'rgba(0, 0, 0, 0.85)' }">
                项目 ID：
              </span>
              23421
            </a-col>
            <a-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
              <span :style="{ color: 'rgba(0, 0, 0, 0.85)' }">
                负责人：
              </span>
              乔峰
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
              <span :style="{ color: 'rgba(0, 0, 0, 0.85)' }">
                生效时间：
              </span>
              2016-12-12 ~ 2017-12-12
            </a-col>
          </a-row>
          <a-steps :style="{ marginLeft: '-42px', width: 'calc(100% + 84px)' }" progressDot :current="1">
            <a-step>
              <span slot="title" :style="{ fontSize: '14px' }">
                创建项目
              </span>
              <div
                slot="description"
                :style="{
                  fontSize: '12px',
                  color: 'rgba(0, 0, 0, 0.45)',
                  position: 'relative',
                  left: '42px',
                  textAlign: 'left',
                }"
              >
                <div :style="{ margin: '8px 0 4px' }">
                  段誉
                  <a-icon :style="{ marginLeft: '8px' }" type="dingding-o" />
                </div>
                <div>2016-12-12 12:32</div>
              </div>
            </a-step>
            <a-step>
              <span slot="title" :style="{ fontSize: '14px' }">
                部门初审
              </span>
              <div
                slot="description"
                :style="{
                  fontSize: '12px',
                  color: 'rgba(0, 0, 0, 0.45)',
                  position: 'relative',
                  left: '42px',
                  textAlign: 'left',
                }"
              >
                <div :style="{ margin: '8px 0 4px' }">
                  扫地僧
                  <a-icon :style="{ color: '#4fc08d', marginLeft: '8px' }" type="dingding-o" />
                </div>
                <div>
                  <a href="">
                    催一下
                  </a>
                </div>
              </div>
            </a-step>
            <a-step>
              <span slot="title" :style="{ fontSize: '14px' }">
                财务复核
              </span>
            </a-step>
            <a-step>
              <span slot="title" :style="{ fontSize: '14px' }">
                完成
              </span>
            </a-step>
          </a-steps>
        </div>
        <a-button slot="actions" type="primary">
          返回列表
        </a-button>
        <a-button slot="actions" >
          查看项目
        </a-button>
        <a-button slot="actions" >
          打印
        </a-button>
      </result>
    </a-card>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import Result from '@/components/Result'

export default {
  name: 'Success',
  components: {
    PageHeader,
    Result,
  },
  data() {
    return {
      breadcrumbList: [
        {title: '首页'},
        {title: '结果页'},
        {title: '成功页'},
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>