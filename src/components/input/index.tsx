import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import {IInput} from './input.Structure';
import theme from '../../global/theme';

export default function Input({
  icon,
  placeholder,
  value,
  setValue,
  secureText,
  keyboardType,
  pressed,
  secondIcon,
}: IInput) {
  return (
    <View style={styles.Container}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={22} color="#F99779" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType={keyboardType}
          secureTextEntry={secureText}
          value={value}
          onChangeText={text => setValue(text)}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.easyWhite}
          style={styles.inputContainer}
        />
      </View>
      {secondIcon && (
        <TouchableOpacity onPress={pressed} style={styles.eyeContent}>
          <Icon name={secondIcon} size={25} color="#F99779" />
        </TouchableOpacity>
      )}
    </View>
  );
}
