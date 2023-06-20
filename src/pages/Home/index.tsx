import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {signIn, signUp} from '../../services/Auth';

export default function App() {
  const [lucas, setLucas] = useState('');

  return (
    <View>
      <Text>allal</Text>
      <TouchableOpacity
        onPress={() =>
          signUp({
            email: 'lucasa@gmail.com',
            password: '12345678',
            name: 'lucas',
          })
        }>
        <Text>cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          signIn({
            email: 'lucasa212l@gmail.com',
            password: '12345678',
            setTeste: setLucas,
          })
        }>
        <Text>logar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log('creddd: ', lucas.user.displayName)}>
        <Text>teste</Text>
      </TouchableOpacity>
    </View>
  );
}
