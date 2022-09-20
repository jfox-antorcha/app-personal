import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native'
import { useSelector } from 'react-redux'
import COLORS from '../constants/colors'
import AppNavigator from './App'
import AuthNavigator from './Auth'
import { RootState } from '../store/index'

const themes = {
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...COLORS.dark
    }
  },
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...COLORS.light
    }
  }
}

const Navigation = () => {
  const scheme = useColorScheme()
  const user = useSelector((state: RootState) => state.user)

  return (
    <NavigationContainer theme={scheme === 'dark' ? themes.dark : themes.light}>
      {user.error || !user.userData.token ? <AuthNavigator /> : <AppNavigator />}
    </NavigationContainer>
  )
}

export default Navigation
