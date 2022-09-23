import { createStackNavigator } from '@react-navigation/stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import App from '../../screens/App'

const Stack = createStackNavigator()

const AppNavigator = () => {
  const { top } = useSafeAreaInsets()
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { paddingTop: top } }}>
      <Stack.Screen name='Home' component={App} />
    </Stack.Navigator>
  )
}

export default AppNavigator
