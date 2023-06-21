import auth from '@react-native-firebase/auth';
import {ISignIn, ISignUp} from './Services.Structure';

export async function signUp({email, password, name}: ISignUp) {
  try {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        auth().currentUser?.updateProfile({
          displayName: name,
        });
      });
  } catch (error) {
    console.log('error: ', error);
  }
}

export async function signIn({email, password, NextStep}: ISignIn) {
  try {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => NextStep());
  } catch (error) {
    console.log(error);
  }
}
