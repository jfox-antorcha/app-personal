import AsyncStorage from '@react-native-community/async-storage'
import { useTheme } from '@react-navigation/native'
import React from 'react'
import { StyledButton, StyledIcon } from '../../../../components'
import icons from '../../../../constants/icons'
import { logout } from '../../../../store/auth/actions'
import { useAppDispatch } from '../../../../store/index'

const Logout = () => {
  const { colors } = useTheme()
  const dispatch = useAppDispatch()

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('@user')
      dispatch(logout())
    } catch (error) {}
  }

  return (
    <StyledButton borderless onPress={() => handleLogout()} style={{ top: 2 }}>
      <StyledIcon source={icons.logout} size={30} rounded color={colors.alert} />
    </StyledButton>
  )
}

export default Logout
