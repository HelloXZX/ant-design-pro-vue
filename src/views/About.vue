<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{count}}</h2>
    <a-button>AntDesign</a-button>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  computed: {
    count() {
      return this.$store.state.count;
    } 
  },
  mounted() {
    axios.get('/api/activities').then(function(res) {
      console.log(res);
    })
  }
}
</script>

