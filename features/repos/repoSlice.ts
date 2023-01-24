import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RepoItem } from "@/lib/repo";

export interface RepoState {
  data: RepoItem[]
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
    fetchSucceed: (state, action: PayloadAction<RepoItem[]>) => {
      state.status = 'success'
      state.data = action.payload
    },
    fetchFailed: (state) => {
      state.status = 'failed'
      state.data = []
    }
  }
})

export const { fetchStart, fetchSucceed, fetchFailed } = repoSlice.actions

export default repoSlice.reducer
