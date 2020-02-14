import { Module } from 'vuex'
import { RootState } from '../../'

interface DrawerState {
  show: boolean
}

interface CommonState {
  drawer: DrawerState
}

const namespaced = true

export const state: CommonState = {
  drawer: {
    show: true,
  },
}

export const common: Module<CommonState, RootState> = {
  namespaced,
  state,
}
