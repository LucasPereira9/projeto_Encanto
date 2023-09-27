import React from 'react';
import {View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {defaultStyles} from '../../../global/defaultStyles';
import MyTabs from '../../../components/TopNavigator';
import Settings from '../settings';
import PromotionsPage from './Promotions';

export default function Home() {
  const navigation = useNavigation();
  const width = Dimensions.get('window').width;
  console.log(auth().currentUser);

  const screens = [
    {name: 'Novidades', component: PromotionsPage},
    {name: 'Lingerie', component: Settings},
    {name: 'penes', component: Settings},
    {name: 'suco ', component: Settings},
  ];
  return (
    <View style={defaultStyles.Container}>
      <MyTabs TabScreens={screens} />
    </View>
  );
}
