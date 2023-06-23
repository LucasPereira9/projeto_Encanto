import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import {signIn, signUp} from '../../hooks/Auth';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import Input from '../../components/input';
import {Keyboard} from 'react-native';

export default function Login() {
  const navigation = useNavigation();

  const moveAnim = useRef(new Animated.Value(0)).current;
  const topAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const Show = useRef(new Animated.Value(0)).current;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2100,
        toValue: Dimensions.get('window').width / 4.8,
        delay: 1200,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.sequence([
      Animated.timing(topAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').height / 5.2,
        delay: 1200,
        useNativeDriver: false,
      }),
    ]).start();
  }, [moveAnim, topAnim]);
  useEffect(() => {
    Animated.timing(fadeAnim, {
      duration: 3000,
      toValue: 0,
      delay: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(Show, {
      duration: 3000,
      toValue: 1,
      delay: 1500,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim, Show]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.Container}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent
        />
        <View style={styles.logoContainer}>
          <Animated.View
            style={{
              left: moveAnim,
              bottom: topAnim,
            }}>
            <Image
              resizeMode="contain"
              style={styles.heartImage}
              source={require('../../assets/heartLogo.png')}
            />
          </Animated.View>
          <Animated.View style={{opacity: fadeAnim}}>
            <Image
              resizeMode="contain"
              style={styles.stringImage}
              source={require('../../assets/encantoStringLogo.png')}
            />
          </Animated.View>
        </View>

        <Animated.View style={{opacity: Show}}>
          <Input
            icon="mail"
            placeholder="escreva seu email"
            value={email}
            setValue={setEmail}
          />
          <Input
            icon="lock"
            placeholder="escreva sua senha"
            value={password}
            setValue={setPassword}
            secureText={true}
          />
        </Animated.View>

        <LinearGradient
          colors={['transparent', '#F99779']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1.8}}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
