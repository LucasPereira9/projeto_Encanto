import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Settings from './settings';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../global/theme';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {defaultStyles} from '../../global/defaultStyles';

const Tab = createBottomTabNavigator();

export default function AuthPages() {
  return (
    <View style={defaultStyles.Container}>
      <View style={styles.topBar}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../../assets/encantoLogo.jpg')}
          />
        </View>
        <View style={styles.cartContainer}>
          <Icon name={'shopping-cart'} size={24} color={theme.colors.primary} />
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.white,
          tabBarStyle: {
            height: 60,
            backgroundColor: theme.colors.black,
            borderTopColor: 'transparent',
          },

          tabBarLabelStyle: {
            fontSize: 11,
            marginBottom: 6,
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
          name="well"
          component={Settings}
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
    </View>
  );
}
