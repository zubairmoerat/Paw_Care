import { createStore } from 'vuex'
// import axios from 'axios'
// import sweet from 'sweetalert'
// import {useCookies} from 'vue3-cookies'
// const {cookies} = useCookies()
// import router from '@/router'
// const pawURL = ''

export default createStore({
  state: { //allows us access to everything
    user:null,
    users:null,
    product:null,
    products:null
  },
  getters: {
  },
  mutations: { // allows us to update the state
    setUser(state, value) {
      state.User = value
    },
    setUsers(state, value) {
      state.Users = value
    },
    setProduct(state, value) {
      state.Product = value
    },
    setProducts(state, value) {
      state.Products = value
    }
  },
  actions: { //fetching de data


  },
  modules: {
  }
})
