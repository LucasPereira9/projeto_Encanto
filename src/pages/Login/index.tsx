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
import {signIn} from '../../hooks/Auth';
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
import {Modal} from '../../components/modal';
import ForgotPassword from './forgotPassword';

export default function Login() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({mode: 'onChange'});

  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = React.useState(false as boolean);
  const [invalidEmailModal, setInvalidEmailModal] = React.useState(
    false as boolean,
  );
  const [forgotPasswordModal, setForgotPasswordModal] = React.useState(
    false as boolean,
  );
  const [userNotFoundmodal, setUserNotFoundModal] = React.useState(
    false as boolean,
  );
  const [wrongPasswordModal, setWrongPasswordModal] = React.useState(
    false as boolean,
  );
  const [emailError, setEmailError] = React.useState(false as boolean);
  const [passwordError, setPasswordError] = React.useState(false as boolean);

  const moveAnim = useRef(new Animated.Value(0)).current;
  const topAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const Show = useRef(new Animated.Value(0)).current;

  function TurnOffErrors() {
    setEmailError(false);
    setPasswordError(false);
  }

  const onSubmit: SubmitHandler<ILoginData> = async (data: ILoginData) => {
    TurnOffErrors();
    setLoading(true);
    const response = await signIn({
      email: data.email,
      password: data.password,
      NextStep: () => {
        navigation.navigate('Home');
      },
    });
    switch (response) {
      case 'INVALID_EMAIL':
        setInvalidEmailModal(true);
        setEmailError(true);
        break;
      case 'USER_NOT_FOUND':
        setUserNotFoundModal(true);
        setEmailError(true);
        break;
      case 'WRONG_PASSWORD':
        setWrongPasswordModal(true);
        setPasswordError(true);
        break;
    }
    setLoading(false);
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
  }, [Show, fadeAnim, moveAnim, topAnim]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setForgotPasswordModal(false);
        Keyboard.dismiss();
      }}>
      <View style={[defaultStyles.Container, {paddingBottom: 140}]}>
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
          <View>
            <Controller
              control={control}
              rules={{required: true}}
              render={({field: {onChange, value}}) => (
                <Input
                  error={emailError}
                  keyboardType={'email-address'}
                  icon="envelope"
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
                  error={passwordError}
                  keyboardType={'numeric'}
                  icon="lock"
                  placeholder="Digite sua senha"
                  value={value}
                  setValue={onChange}
                  secureText={showPassword}
                  secondIcon={showPassword ? 'eye-slash' : 'eye'}
                  pressed={() => setShowPassword(!showPassword)}
                />
              )}
              name="password"
              defaultValue=""
            />
          </View>

          <View style={styles.content}>
            <TouchableOpacity
              onPress={() => setForgotPasswordModal(true)}
              activeOpacity={0.6}>
              <Text style={styles.forgotPass}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <View style={{margin: 16}}>
              <Button
                loading={loading}
                isDisabled={!isValid}
                pressed={handleSubmit(onSubmit)}
                title="LOGAR"
              />
            </View>
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
        <Modal
          title="Email inválido"
          subtitle="Ajuste o email e tente novamente"
          opened={invalidEmailModal}
          buttonTitle="entendido"
          buttonFunction={() => {
            setInvalidEmailModal(false);
          }}
        />
        <Modal
          title="Usuário não encontrado"
          subtitle="tente novamente ou crie uma conta"
          opened={userNotFoundmodal}
          secondButton={true}
          secondButtonFunction={() => setUserNotFoundModal(false)}
          buttonTitle="Criar uma conta"
          buttonFunction={() => {
            setUserNotFoundModal(false);
            navigation.navigate('Register');
          }}
        />
        <Modal
          title="Senha incorreta"
          subtitle="Verifique a senha e tente novamente"
          opened={wrongPasswordModal}
          buttonTitle="entendido"
          buttonFunction={() => {
            setWrongPasswordModal(false);
          }}
        />
        <Modal
          opened={forgotPasswordModal}
          content={
            <ForgotPassword onPress={() => setForgotPasswordModal(false)} />
          }
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
