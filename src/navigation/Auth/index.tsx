import { useTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Auth from '../../screens/Auth'

const Stack = createStackNavigator()

const AuthNavigator = () => {
  const { colors } = useTheme()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: colors.lightPrimary } }}>
      <Stack.Screen name='Auth' component={Auth} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
