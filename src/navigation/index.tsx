import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { useColorScheme } from 'react-native'
import COLORS from '../constants/colors'
import AppNavigator from './App'
import AuthNavigator from './Auth'

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
  return (
    <NavigationContainer theme={scheme === 'dark' ? themes.dark : themes.light}>
      <AuthNavigator />
      {/* <AppNavigator /> */}
    </NavigationContainer>
  )
}

export default Navigation
