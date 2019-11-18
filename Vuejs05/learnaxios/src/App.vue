<template>
  <div id="app">
    <div>{{result}}</div>
    <h2>----------------------------------</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      result: ''
    }
  },
  created () {
    axios({
      url: 'http://106.54.54.237:8000/api/v1/home/multidata',
    }).then(res => {
      // console.log(res);
      this.result = res
    })
  },
}
</script>

<style>
</style>
