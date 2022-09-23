import { createSlice } from '@reduxjs/toolkit'
import { Empleado } from '../../interfaces/employee'
import { getEmpleadoData } from './actions'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    data: {} as Empleado,
    loading: false,
    error: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmpleadoData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getEmpleadoData.fulfilled, (state, action) => {
      ;(state.data = action.payload), (state.loading = false), (state.error = false)
    })
    builder.addCase(getEmpleadoData.rejected, (state) => {
      ;(state.loading = false), (state.error = true)
    })
  }
})

export default profileSlice.reducer
