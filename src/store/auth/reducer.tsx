import { createSlice } from '@reduxjs/toolkit'
import { User } from '../../interfaces/auth'
import { getUserData, logout } from './actions'

const initialState = {
  userData: {} as User,
  loading: false,
  error: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
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
    builder.addCase(logout, () => initialState)
  }
})

export default userSlice.reducer
