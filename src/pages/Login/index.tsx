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
  Alert,
} from 'react-native';
import {signIn, signUp} from '../../hooks/Auth';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import Input from '../../components/input';
import {Keyboard} from 'react-native';
import theme from '../../global/theme';
import Button from '../../components/button';
import {defaultStyles} from '../../global/defaultStyles';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {ILoginData} from './loginData.structure';

export default function Login() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {isValid},
    watch,
  } = useForm({mode: 'onChange'});

  const moveAnim = useRef(new Animated.Value(0)).current;
  const topAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const Show = useRef(new Animated.Value(0)).current;

  const onSubmit: SubmitHandler<ILoginData> = (data: ILoginData) => {
    signIn({
      email: data.email,
      password: data.password,
      NextStep: () => {
        console.log(data);
        Alert.alert('TA LIBERADA MADAME');
      },
    });
  };

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
      <View style={defaultStyles.Container}>
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
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, value}}) => (
              <Input
                keyboardType={'email-address'}
                icon="mail"
                placeholder="Digite seu email"
                value={value}
                setValue={onChange}
              />
            )}
            name="email"
            defaultValue=""
          />
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, value}}) => (
              <Input
                keyboardType={'numeric'}
                icon="lock"
                placeholder="Digite sua senha"
                value={value}
                setValue={onChange}
                secureText={true}
              />
            )}
            name="password"
            defaultValue=""
          />

          <View style={styles.content}>
            <Text style={styles.forgotPass}>Esqueceu sua senha?</Text>
            <Button pressed={handleSubmit(onSubmit)} title="LOGAR" />
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
                style={styles.bottomButton}
                activeOpacity={0.7}>
                <Text style={styles.registerText}> É nova por aqui? </Text>
                <Text style={styles.forgotPass}>Crie sua conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

        <LinearGradient
          colors={['transparent', theme.colors.primary]}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1.8}}
          style={defaultStyles.gradient}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
