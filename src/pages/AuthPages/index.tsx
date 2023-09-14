import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Settings from './settings';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../global/theme';
import {View, Image} from 'react-native';
import {styles} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {defaultStyles} from '../../global/defaultStyles';

const Tab = createBottomTabNavigator();

export default function AuthPages() {
  return (
    <>
      <View style={styles.topBar}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            style={{width: '100%', height: '100%'}}
            source={require('../../assets/encantoLogo.jpg')}
          />
        </View>
        <View style={styles.cartContainer}>
          <Icon name={'shopping-cart'} size={24} color={theme.colors.primary} />
        </View>
        <LinearGradient
          colors={['transparent', theme.colors.primary]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1.8}}
          style={defaultStyles.gradient}
        />
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
