import Vue from 'vue'
import Vuex from 'vuex'
import gem from './gem'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    gem
  }
})

Vue.store = store

export default store
