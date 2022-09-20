import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../interfaces/auth'
import { getUserData } from './actions'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: {} as User,
    loading: false,
    error: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getUserData.fulfilled, (state, action) => {
      ;(state.userData = action.payload), (state.loading = false), (state.error = false)
    })
    builder.addCase(getUserData.rejected, (state) => {
      ;(state.loading = false), (state.error = true)
    })
  }
})

export default userSlice.reducer
