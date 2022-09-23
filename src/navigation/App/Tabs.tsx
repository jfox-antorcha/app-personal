import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Platform, StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import icons from '../../constants/icons'
import sizes from '../../constants/sizes'

import Feeds from '../../screens/App/Feeds'
import Messages from '../../screens/App/Messages'
import Salaries from '../../screens/App/Salaries'
import Profile from '../../screens/App/Profile'

const Tab = createBottomTabNavigator()

export default () => {
  const { colors } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab, backgroundColor: colors.lightPrimary }
      }}
      initialRouteName='Feed'>
      <Tab.Screen
        name='Feed'
        component={Feeds}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIcon}>
              <Image source={icons.notifications} resizeMode='cover' style={{ tintColor: color, width: 30, height: 30 }} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name='Messages'
        component={Messages}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIcon}>
              <Image source={icons.chat} resizeMode='cover' style={{ tintColor: color, width: 30, height: 30, top: 2 }} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name='Salaries'
        component={Salaries}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIcon}>
              <Image source={icons.report} resizeMode='cover' style={{ tintColor: color, width: 30, height: 30 }} />
            </View>
          )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.tabIcon}>
              <Image source={icons.profile} resizeMode='cover' style={{ tintColor: color, width: 35, height: 35 }} />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tab: {
    position: 'absolute',
    marginHorizontal: sizes.padding,
    marginVertical: sizes.padding * 3,
    paddingHorizontal: sizes.padding,
    height: 60,
    borderRadius: sizes.radius
  },
  tabIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? sizes.padding * 2.5 : 0,
    height: 50
  },
  tabIconLabel: {
    paddingHorizontal: sizes.padding,
    paddingVertical: sizes.padding * 0.5,
    borderRadius: sizes.radius
  }
})
