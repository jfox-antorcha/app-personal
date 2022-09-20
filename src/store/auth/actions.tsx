import { createAsyncThunk } from '@reduxjs/toolkit'
import { getTokenAccesso } from '../../api/token'
import { User } from '../../interfaces/auth'

interface Auth {
  user: string
  password: string
}

export const getUserData = createAsyncThunk('user/getUserData', async (auth: Auth) => {
  const { user, password } = auth
  const response = await getTokenAccesso(user, password)
  const userData: User = {
    id: response.children[0].getElementsByTagName('Id')[0].value,
    name: response.children[0].getElementsByTagName('Nombre')[0].value,
    lastName: response.children[0].getElementsByTagName('Apellidos')[0].value,
    email: response.children[0].getElementsByTagName('Email')[0].value,
    role: response.children[0].getElementsByTagName('Rol')[0].value,
    token: response.children[0].getElementsByTagName('Token')[0].value,
    employeeId: response.children[0].getElementsByTagName('IdEmpleado')[0].value,
    userId: response.children[0].getElementsByTagName('IdUsuario')[0].value,
    tokenExpiration: response.children[0].getElementsByTagName('FechaExpiracion')[0].value
  }
  return userData
})
