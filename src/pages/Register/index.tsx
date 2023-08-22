import React from 'react';
import {
  Alert,
  Animated,
  Keyboard,
  Text,
  TouchableOpacity,
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
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {Modal} from '../../components/modal';

export default function Register() {
  const navigation = useNavigation();
  const Show = React.useRef(new Animated.Value(0)).current;
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({mode: 'onChange'});
  const [showPassword, setShowPassword] = React.useState(true as boolean);
  const [modal, setModal] = React.useState(false as boolean);

  const onSubmit: SubmitHandler<IRegisterData> = async (
    data: IRegisterData,
  ) => {
    setModal(false);
    const response = await signUp({
      email: data.email,
      password: data.password,
      NextStep: () => {
        navigation.goBack();
        auth().currentUser?.updateProfile({
          displayName: data.userName,
        });
        Alert.alert('conta criada');
      },
    });
    switch (response) {
      case 'INVALID_EMAIL':
        setModal(true);
        break;
      case 'EMAIL_IN_USE':
        console.log('use email');
        break;
      case 'WEAK_PASSWORD':
        console.log('weak pass');
        break;
    }
  };

  React.useEffect(() => {
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
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.iconContent}>
              <Icon name={'arrow-left'} size={30} color="#F99779" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>CRIAR NOVA CONTA</Text>
            </View>
            <View style={styles.inputsContainer}>
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
                    error={modal ? true : false}
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

        <Modal
          title="Email inválido"
          subtitle="Ajuste o email e tente novamente"
          opened={modal}
          buttonTitle="entendido"
          buttonFunction={() => {}}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
