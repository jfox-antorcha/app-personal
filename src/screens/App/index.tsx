import React from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store'
import { getEmpleadoData } from '../../store/profile/actions'
import Tabs from '../../navigation/App/Tabs'

const App = () => {
  const dispatch = useAppDispatch()
  const user = useSelector((state: RootState) => state.user)

  React.useEffect(() => {
    ;(async () => {
      dispatch(getEmpleadoData({ token: user.userData.token, idEmpleado: user.userData.employeeId }))
    })()
  }, [])

  return <Tabs />
}

export default App
