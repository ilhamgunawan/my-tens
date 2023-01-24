import { configureStore } from '@reduxjs/toolkit'
import repoReducer from '@/features/repos/repoSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      repo: repoReducer
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
