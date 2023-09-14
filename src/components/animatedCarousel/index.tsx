import React from 'react';
import {View, useWindowDimensions, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import theme from '../../global/theme';

export default function AnimatedCarousel() {
  const windowHeight = useWindowDimensions().height / 4.4;

  const mockedImages = [
    {
      image:
        'https://media.cnn.com/api/v1/images/stellar/prod/230905085829-lionel-messi-0903.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp',
      age: 32,
    },
    {
      image:
        'https://s2-ge.glbimg.com/RXSe8Nb11rThbNZeQHECoTIYkWQ=/0x0:3695x2578/1008x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2019/11/26/2019-11-26t134020z_1059912461_rc21jd95qt0l_rtrmadp_3_soccer-environment.jpg',
      age: 52,
    },
    {
      image:
        'https://www.hojeemdia.com.br/image/policy:1.340234.1628466597:1628466597/image.jpg?f=2x1&w=1200&',
      age: 22,
    },
  ];

  const renderImages = React.useMemo(() => {
    return mockedImages.map((item: any, index: number) => {
      return (
        <View key={index}>
          <Image
            resizeMode="stretch"
            style={{width: '100%', height: windowHeight}}
            source={{
              uri: `${item.image}`,
            }}
          />
        </View>
      );
    });
  }, []);

  return (
    <View style={{width: '100%', height: windowHeight}}>
      <Swiper
        bounces={true}
        dotColor={theme.colors.gray}
        activeDotColor={theme.colors.primary}
        autoplay={true}
        autoplayTimeout={3}>
        {renderImages}
      </Swiper>
    </View>
  );
}
