<template>
  <exception
    type="404"
    desc="抱歉，你访问的页面不存在"
    backText="返回首页"
  />
</template>

<script>
import Exception from '@/components/Exception'

export default {
  name: 'Excetion-404',
  components: {
    Exception,
  }
}
</script>