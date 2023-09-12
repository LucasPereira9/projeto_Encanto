import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Settings from './settings';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../global/theme';
import {View, Text} from 'react-native';

const Tab = createBottomTabNavigator();

export default function AuthPages() {
  return (
    <>
      <View>
        <Text>lalalal</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.black,
          tabBarStyle: {
            height: 60,
            backgroundColor: theme.colors.white,
          },

          tabBarLabelStyle: {
            fontSize: 14,
            fontFamily: 'Roboto-Bold',
          },
        }}
        initialRouteName={'Home'}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="home" size={30} color={color} />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="gear" size={30} color={color} />
            ),
          }}
          name="Settings"
          component={Settings}
        />
      </Tab.Navigator>
    </>
  );
}
