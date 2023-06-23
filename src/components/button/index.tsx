import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {IButton} from './button.Structure';

export default function Button({pressed, title}: IButton) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={pressed}
      style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
