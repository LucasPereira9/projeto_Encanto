import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {IButton} from './button.Structure';
import theme from '../../global/theme';

export default function Button(props: IButton) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.isDisabled ? undefined : props.pressed}
      style={[
        styles.container,
        {
          backgroundColor: props.isDisabled
            ? theme.colors.gray
            : theme.colors.primary,
        },
      ]}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}
