import { createSlice } from "@reduxjs/toolkit";

export interface RepoState {
  data: any[]
  status: 'idle' | 'loading' | 'success' | 'failed'
}

const initialState: RepoState = {
  data: [],
  status: 'idle',
}

export const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.status = 'loading'
    },
    fetchSucceed: (state, action) => {
      state.status = 'success'
      // Todo: replace data with action payload
    },
    fetchFailed: (state) => {
      state.status = 'failed'
      state.data = []
    }
  }
})

export const { fetchStart, fetchSucceed, fetchFailed } = repoSlice.actions

export default repoSlice.reducer
