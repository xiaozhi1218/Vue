<template>
  <div>
    <h2>{{categories}}</h2>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        categories: ''
      }
    },
    created () {
      axios({
        url: 'http://106.54.54.237:8000/api/v1/category'
      }).then(res => {
        this.categories = res;
      })
    },
  }
</script>

<style scoped>

</style>