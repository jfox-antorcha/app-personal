import {createStackNavigator} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Tabs from './Tabs';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, cardStyle: {paddingTop: top}}}>
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
