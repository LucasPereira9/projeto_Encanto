import React, {FunctionComponent} from 'react';
import {View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {styles} from './styles';
import {ITopNavigatorProps} from './TopNavigator.structure';
import theme from '../../global/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs({TabScreens}: {TabScreens: any}) {
  const renderList = React.useMemo(() => {
    return TabScreens.map((item: ITopNavigatorProps, index: number) => (
      <Tab.Screen
        key={index}
        name={item.name}
        component={item.component as FunctionComponent<{}>}
      />
    ));
  }, [TabScreens]);

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarScrollEnabled: true,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.white,
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.primary,
          },
          tabBarStyle: {backgroundColor: theme.colors.black},
          // tabBarIcon: ({color}) => (
          //   <Icon name={'arrow-left'} size={20} color={color} />
          // ), just in case if want to add a icon into the tabs
          tabBarLabelStyle: {
            fontSize: 10,
          },
        })}>
        {renderList}
      </Tab.Navigator>
    </View>
  );
}
