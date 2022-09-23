import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { StyledButton, StyledIcon } from '../../../../components'
import icons from '../../../../constants/icons'

const Logout = () => {
  const { colors } = useTheme()
  return (
    <StyledButton borderless onPress={() => {}} style={{ top: 2 }}>
      <StyledIcon source={icons.logout} size={30} rounded color={colors.alert} />
    </StyledButton>
  )
}

export default Logout
