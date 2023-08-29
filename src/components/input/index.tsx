import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import {IInput} from './input.Structure';
import theme from '../../global/theme';

export default function Input(props: IInput) {
  return (
    <View
      style={[
        styles.Container,
        {
          borderWidth: props.error ? 2 : 0,
          borderColor: props.error ? theme.colors.error : undefined,
        },
      ]}>
      <View style={styles.iconContainer}>
        <Icon name={props.icon} size={22} color={theme.colors.primary} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureText}
          value={props.value}
          onChangeText={text => props.setValue(text)}
          placeholder={props.placeholder}
          placeholderTextColor={theme.colors.easyWhite}
          style={styles.inputContainer}
        />
      </View>
      {props.secondIcon && (
        <TouchableOpacity onPress={props.pressed} style={styles.eyeContent}>
          <Icon
            name={props.secondIcon}
            size={25}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
