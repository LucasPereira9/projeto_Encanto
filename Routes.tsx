import * as React from 'react';
import 'react-native-gesture-handler';
import {CheckpointProvider} from './src/hooks/Checkpoint';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import {ThemeProvider} from 'styled-components';

import Register from './src/pages/Register';
import theme from './src/global/theme';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}
