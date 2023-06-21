import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {signIn, signUp} from '../../hooks/Auth';
import {useNavigation} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>allal</Text>
      <TouchableOpacity
        onPress={() =>
          signUp({
            email: 'camila@gmail.com.br',
            password: '12345678',
            name: 'camila rufino',
          })
        }>
        <Text>cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          signIn({
            email: 'camila@gmail.com.br',
            password: '12345678',
            NextStep: () => navigation.navigate('Home'),
          });
        }}>
        <Text>logar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>teste</Text>
      </TouchableOpacity>
    </View>
  );
}
