import { getNavData } from '../plugins/axios'

export const state = () => ({
  events: []
})
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  }
}
export const actions = {
  fetchEvents({ commit }) {
    return getNavData(0).then(res => {
      commit('SET_EVENTS', res.data.hot.list)
    })
  }
}

// const stroe =new Vuex.Store({
//   state:{

//   },
//   actions: {

//   },
//   mutations:{

//   },
//   getters: {

//   },
//   modules: {

//   }
// })