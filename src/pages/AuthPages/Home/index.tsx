import React from 'react';
import {View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {defaultStyles} from '../../../global/defaultStyles';
import AnimatedCarousel from '../../../components/animatedCarousel';
import MyTabs from '../../../components/TopNavigator';
import Settings from '../settings';

export default function Home() {
  const navigation = useNavigation();
  const width = Dimensions.get('window').width;
  console.log(auth().currentUser);

  const screens = [
    {name: 'Descontos', component: Settings},
    {name: 'Camisas', component: Settings},
    {name: 'Shorts', component: Settings},
    {name: 'Pijamas', component: Settings},
  ];
  return (
    <View style={defaultStyles.Container}>
      <MyTabs TabScreens={screens} />
    </View>
  );
}
