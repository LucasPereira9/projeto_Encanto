import React from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Register() {
  return (
    <View>
      <Text>{auth().currentUser?.displayName}</Text>
    </View>
  );
}
