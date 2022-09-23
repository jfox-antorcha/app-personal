import { createAsyncThunk } from '@reduxjs/toolkit'
import { getEmpleado } from '../../api/profile'
import { Empleado } from '../../interfaces/employee'

interface Props {
  token: string
  idEmpleado: number
}

export const getEmpleadoData = createAsyncThunk('profile/getEmpleadoData', async (props: Props) => {
  const { idEmpleado, token } = props
  const resp = await getEmpleado(token, idEmpleado)
  const empleadoData: Empleado = JSON.parse(resp.getElementsByTagName('GetEmpleadoResult')[0].childNodes[0].data)
  return empleadoData
})
