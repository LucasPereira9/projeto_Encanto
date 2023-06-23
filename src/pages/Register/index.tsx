import React, {useEffect, useRef} from 'react';
import {Animated, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../global/theme';
import {defaultStyles} from '../../global/defaultStyles';
import Input from '../../components/input';
import {styles} from './styles';
import Button from '../../components/button';

export default function Register() {
  const Show = useRef(new Animated.Value(0)).current;

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
            <Input icon="user" placeholder="insira seu nome" />
            <Input icon="mail" placeholder="insira o email" />
            <Input icon="lock" placeholder="insira a senha" secureText={true} />
            <Input
              icon="lock"
              placeholder="confirme a senha"
              secureText={true}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button title="CRIAR CONTA" pressed={() => console.log('clicou')} />
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
