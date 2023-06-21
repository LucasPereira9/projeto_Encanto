import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import theme from '../../global/theme';

export default function Home() {
  const navigation = useNavigation();
  console.log(auth().currentUser, theme);
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>sdijasidsaidsa {auth().currentUser?.displayName}</Text>
      </TouchableOpacity>
    </View>
  );
}
