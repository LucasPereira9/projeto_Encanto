import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import {signIn, signUp} from '../../hooks/Auth';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

export default function Login() {
  const navigation = useNavigation();

  const moveAnim = useRef(new Animated.Value(0)).current;
  const topAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2100,
        toValue: Dimensions.get('window').width / 4.8,
        delay: 2200,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.sequence([
      Animated.timing(topAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').height / 5,
        delay: 2200,
        useNativeDriver: false,
      }),
    ]).start();
  }, [moveAnim, topAnim]);
  useEffect(() => {
    Animated.timing(fadeAnim, {
      duration: 3000,
      toValue: 0,
      delay: 800,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

  return (
    <View style={styles.Container}>
      <View style={styles.heartContainer}>
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
      <LinearGradient
        colors={['transparent', '#F99779']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </View>
  );
}
