import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './src/navigation'
import { useFonts } from 'expo-font'

const App = () => {
  const [fontsLoaded] = useFonts({
    'Lato-Bold': require('./src/assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./src/assets/fonts/Lato-Light.ttf'),
    'Lato-Regular': require('./src/assets/fonts/Lato-Regular.ttf')
  })

  if (!fontsLoaded) return null

  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
}

export default App
