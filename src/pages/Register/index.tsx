import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Animated,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {signUp} from '../../hooks/Auth';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../global/theme';
import {defaultStyles} from '../../global/defaultStyles';
import Input from '../../components/input';
import {styles} from './styles';
import Button from '../../components/button';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {IRegisterData} from './registerData.structure';

export default function Register() {
  const Show = useRef(new Animated.Value(0)).current;
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({mode: 'onChange'});
  const [showPassword, setShowPassword] = useState(true);
  const [ShowConfirmPassword, setShowConfirmPassword] = useState(true);

  const onSubmit: SubmitHandler<IRegisterData> = (data: IRegisterData) => {
    signUp({
      email: data.email,
      password: data.password,
      NextStep: () => {
        auth().currentUser?.updateProfile({
          displayName: data.userName,
        });
        Alert.alert('conta criada');
      },
    });
  };

  useEffect(() => {
    Animated.timing(Show, {
      duration: 2000,
      toValue: 1,
      delay: 200,
      useNativeDriver: false,
    }).start();
  }, [Show]);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={defaultStyles.Container}>
        <Animated.View style={{opacity: Show}}>
          <View style={styles.content}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>CRIAR NOVA CONTA</Text>
            </View>
            <View>
              <Controller
                control={control}
                rules={{required: true}}
                render={({field: {onChange, value}}) => (
                  <Input
                    icon="user"
                    placeholder="insira seu nome"
                    value={value}
                    setValue={onChange}
                  />
                )}
                name="userName"
                defaultValue=""
              />
              <Controller
                control={control}
                rules={{required: true}}
                render={({field: {onChange, value}}) => (
                  <Input
                    keyboardType={'email-address'}
                    icon="envelope"
                    placeholder="insira o email"
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
                    placeholder="insira a senha"
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
              <Controller
                control={control}
                rules={{required: true}}
                render={({field: {onChange, value}}) => (
                  <Input
                    keyboardType={'numeric'}
                    icon="lock"
                    placeholder="confirme a senha"
                    value={value}
                    setValue={onChange}
                    secureText={ShowConfirmPassword}
                    secondIcon={ShowConfirmPassword ? 'eye-slash' : 'eye'}
                    pressed={() => setShowConfirmPassword(!ShowConfirmPassword)}
                  />
                )}
                name="confirmPassword"
                defaultValue=""
              />
            </View>
          </View>
          <View style={styles.button}>
            <Button
              isDisabled={!isValid}
              title="CRIAR CONTA"
              pressed={handleSubmit(onSubmit)}
            />
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
