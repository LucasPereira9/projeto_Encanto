import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {ICardProps} from './promotionCard.structure';

const PromotionCard = ({TabScreens}: {TabScreens: any}) => {
  const renderList = React.useMemo(() => {
    return TabScreens?.map((item: ICardProps, index: number) => (
      <TouchableOpacity
        onPress={item.buttonFunction}
        activeOpacity={0.8}
        key={index}
        style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    ));
  }, [TabScreens]);
  return <View>{renderList}</View>;
};

export default PromotionCard;
