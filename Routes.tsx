import * as React from 'react';
import 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/pages/Login';
import {CheckpointProvider} from './src/hooks/Checkpoint';
import Register from './src/pages/Register';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <CheckpointProvider>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'Login'}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </CheckpointProvider>
    </NavigationContainer>
  );
}
