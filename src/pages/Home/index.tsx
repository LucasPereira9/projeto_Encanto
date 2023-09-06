import React from 'react';
import {View, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {defaultStyles} from '../../global/defaultStyles';
import AnimatedCarousel from '../../components/animatedCarousel';

export default function Home() {
  const navigation = useNavigation();
  const width = Dimensions.get('window').width;
  console.log(auth().currentUser);
  return (
    <View style={defaultStyles.Container}>
      <AnimatedCarousel />
    </View>
  );
}
