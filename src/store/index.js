import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '',
    pictureList: [],
    currentPicture: '',
    savePath: '',
    id: ''
  },
  mutations: {
    setTitle(state, preload) {
      state.title = preload.title
    },
    setID(state, preload) {
      state.id = preload.id
    },
    setPictureList(state, payload) {
      state.pictureList = []
      // get all first images
      for (let item of payload.pictureList['data']) {
        if (item['entities'] !== undefined) {
          for (let info of item['entities']) {
            state.pictureList.push(info)
          }
        }
      }
    },
    setCurrentPicture(state, payload) {
      state.currentPicture = payload.currentPicture.picArr
    },
    setPath(state, payload) {
      state.savePath = payload.savePath
    }
  },
  actions: {
  },
  modules: {
  }
})
