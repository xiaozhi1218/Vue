import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutations-types'

// 1. 安装插件
Vue.use(Vuex)

// 2. 创建对象
const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + '111'
    },
    fullName2(state, getters) {
      return getters.fullName + '2222'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  },
  actions: {
    aUpdateName(context) {
      console.log(context);
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      }, 1000);
      
    }
  }
}

const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [{
        id: 110,
        name: 'cyz',
        age: 18
      },
      {
        id: 111,
        name: 'kobe',
        age: 23
      },
      {
        id: 112,
        name: 'james',
        age: 30
      },
      {
        id: 113,
        name: 'curry',
        age: 10
      }
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    // 方法
    // increment(state) {
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementCount(state, payload) {
      // state.counter += count
      // console.log(count);
      state.counter += payload.count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      state.info.name = 'cyz'

      // 错误代码：不能在这里进行异步操作
      // setInterval(() => {
      //   state.info.name = 'cyz'
      // }, 1000);

      // state.info['address'] = '洛杉矶'
      // Vue.set(state.info, 'address', '洛杉矶')

      // 该方式做不到响应式
      // delete state.info.age
      // Vue.delete(state.info, 'age')
    }
  },
  actions: {
    // context：上下文
    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     // console.log(payload);
    //     console.log(payload.message);
    //     payload.success()
    //   }, 1000);
    // },

    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(context);
          context.commit('updateInfo')
          console.log(payload);

          resolve('1111')
        }, 1000);
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgestu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a: moduleA
  }
})

// 3.导出store对象
export default store

// 对象的解构
const obj = {
  name: 'cyz',
  age: 18,
  height: 1.88
}

const {name, height, age} = obj


