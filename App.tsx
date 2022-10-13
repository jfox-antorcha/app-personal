import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import Navigation from './src/navigation'
import BootSplash from './src/screens/BootSplash'
import store from './src/store'

const App = () => {
  const [userStatus, setUserStatus] = React.useState(false)
  return (
    <SafeAreaProvider>
      <Provider store={store}>{userStatus ? <Navigation /> : <BootSplash setUserStatus={setUserStatus} />}</Provider>
    </SafeAreaProvider>
  )
}

export default App
