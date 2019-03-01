<template>
<div>
  <introduce-row />
  <sales-card />
</div>

</template>

<script>
import IntroduceRow from './IntroduceRow'
import SalesCard from './SalesCard'
import numeral from 'numeral';
export default {
  name: 'Analysis',
  components: {
    IntroduceRow,
    SalesCard
  },
  methods: {
    numeral,
  },
  
}
</script>