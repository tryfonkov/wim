import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { common } from './modules/common'

Vue.use(Vuex)

export interface RootState {
  version: string
}

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0',
  },
  mutations: {},
  actions: {},
  modules: {
    common,
  },
}

export default new Vuex.Store<RootState>(store)
