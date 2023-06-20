import auth from '@react-native-firebase/auth';
import {ISignIn, ISignUp} from './Services.Structure';

export async function signUp({email, password, name}: ISignUp) {
  try {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(credencials => {
        auth().currentUser?.updateProfile({
          displayName: name,
        });
        console.log(credencials);
      });
  } catch (error) {
    console.log('error: ', error);
  }
}

export async function signIn({email, password, setTeste}: ISignIn) {
  try {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(credencials => setTeste(credencials));
  } catch (error) {
    console.log(error);
  }
}
