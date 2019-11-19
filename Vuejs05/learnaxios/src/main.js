import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


// 1.axios的基本使用
// axios({
//   url: 'http://106.54.54.237:8000/api/v1/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url: 'http://106.54.54.237:8000/api/v1/home/data',
//   // 专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// 2.axios发送并发请求
// axios.all([axios({
//   url: 'http://106.54.54.237:8000/api/v1/home/multidata'
// }), axios({
//   url: 'http://106.54.54.237:8000/api/v1/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(results => {
//   console.log(results);
//   console.log(results[0]);
//   console.log(results[1]);
// })


// 3. 使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://106.54.54.237:8000/api/v1'
// axios.defaults.timeout = 5000

// axios.all([axios({
//   url: '/home/multidata'
// }), axios({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


// axios.defaults.baseURL = 'http://222.33.533.237:8000/api/v1'
// axios.defaults.timeout = 10000

// axios({
//   url: '/category'
// })

// 4.创建对应的axios的实例
// const instance1 = axios.create({
//   baseURL: 'http://106.54.54.237:8000/api/v1',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// const instance2 = axios.create({
//   baseURL: '',
//   timeout: 10000,
//   // headers: {}
// })

// 5. 封装request模块
import { request } from "./network/request";

// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// request({
//   baseConfig: {

//   },
//   success: function (res) {

//   },
//   failure: function (err) {

//   }
// })

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  // console.log(err);
})