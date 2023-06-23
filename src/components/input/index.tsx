import React from 'react';
import {View, TextInput} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {IInput} from './input.Structure';

export default function Input({
  icon,
  placeholder,
  value,
  setValue,
  secureText,
}: IInput) {
  return (
    <View style={styles.Container}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={28} color="#F99779" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={secureText}
          value={value}
          onChangeText={text => setValue(text)}
          placeholder={placeholder}
          placeholderTextColor={'#D8D6D6'}
          style={styles.inputContainer}
        />
      </View>
    </View>
  );
}
