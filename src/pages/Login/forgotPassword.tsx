import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import Input from '../../components/input';
import {styles} from './styles';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import Button from '../../components/button';
import auth from '@react-native-firebase/auth';
import FeedbackScreen from '../../components/feedbackScreen';
import {IForgotPasswordProps} from './loginData.structure';

export default function ForgotPassword(props: IForgotPasswordProps) {
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({mode: 'onChange'});
  const dimension = useWindowDimensions().height / 1.5;

  const [loading, setLoading] = React.useState(false as boolean);
  const [emailError, setEmailError] = React.useState(false as boolean);
  const [success, setSuccess] = React.useState(false as boolean);
  const [errorInfo, setErrorInfo] = React.useState('' as string);

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    setLoading(true);
    setErrorInfo('');
    auth()
      .sendPasswordResetEmail(data.email)
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email' || 'auth/user-not-found') {
          setEmailError(true);
          setErrorInfo('Email Inválido');
          setLoading(false);
        }
      });
  };
  return (
    <View
      style={{
        height: dimension,
        justifyContent: 'space-around',
      }}>
      {success ? (
        <FeedbackScreen
          onPressButton={props.onPress}
          title=" Email enviado com sucesso! Altere a senha e volte para curtir o
        app!"
        />
      ) : (
        <>
          <View style={styles.forgotContentModal}>
            <Text style={styles.forgotTitleModal}>
              Informe o email cadastrado para recuperar a senha!
            </Text>
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
            <Text style={styles.forgotEmailError}>{errorInfo}</Text>
          </View>
          <View style={styles.forgotButtonModal}>
            <Button
              loading={loading}
              pressed={handleSubmit(onSubmit)}
              isDisabled={!isValid}
              title="Enviar"
            />
          </View>
        </>
      )}
    </View>
  );
}
