<template>
  <exception
    type="403"
    desc="抱歉，你无权访问该页面"
    backText="返回首页"
  />
</template>

<script>
import Exception from '@/components/Exception'

export default {
  name: 'Excetion-403',
  components: {
    Exception,
  }
}
</script>
