import React, {useEffect, useRef} from 'react';
import {Animated, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
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
    watch,
  } = useForm({mode: 'onChange'});

  const onSubmit: SubmitHandler<IRegisterData> = (data: IRegisterData) => {
    console.log(data);
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
                  icon="mail"
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
                  secureText={true}
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
                  secureText={true}
                />
              )}
              name="confirmPassword"
              defaultValue=""
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button title="CRIAR CONTA" pressed={handleSubmit(onSubmit)} />
        </View>
      </Animated.View>

      <LinearGradient
        colors={['transparent', theme.colors.primary]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1.8}}
        style={defaultStyles.gradient}
      />
    </View>
  );
}
