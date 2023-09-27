import React from 'react';
import {ScrollView, View} from 'react-native';
import AnimatedCarousel from '../../../../components/animatedCarousel';
import {defaultStyles} from '../../../../global/defaultStyles';
import PromotionCard from '../../../../components/promotionCard';
import {useNavigation} from '@react-navigation/native';

export default function PromotionsPage() {
  const navigation = useNavigation();
  const mockedArray = [
    {
      title: 'Oferta',
      description: 'ola',
      buttonFunction: () => console.log('ola 1'),
    },
    {
      title: 'giro da sorte',
      description: 'ja girou a roleta após sua última compra?',
      buttonFunction: () => navigation.navigate('well'),
    },
    {title: 'Oferta', description: 'ola3'},
  ];
  return (
    <View style={defaultStyles.Container}>
      <AnimatedCarousel />
      <ScrollView>
        <PromotionCard TabScreens={mockedArray} />
      </ScrollView>
    </View>
  );
}
