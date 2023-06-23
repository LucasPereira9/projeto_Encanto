import React from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../global/theme';
import {defaultStyles} from '../../global/defaultStyles';

export default function Register() {
  return (
    <View style={defaultStyles.Container}>
      <LinearGradient
        colors={['transparent', theme.colors.primary]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1.8}}
        style={defaultStyles.gradient}
      />
    </View>
  );
}
