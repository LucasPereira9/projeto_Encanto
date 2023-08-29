import auth from '@react-native-firebase/auth';
import {ISignIn, ISignUp} from './Services.Structure';

export async function signUp({email, password, NextStep}: ISignUp) {
  try {
    await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => NextStep());
  } catch (error: any) {
    console.log('error: ', error.code);
    if (error.code === 'auth/invalid-email') {
      return 'INVALID_EMAIL';
    }
    if (error.code === 'auth/email-already-in-use') {
      return 'EMAIL_IN_USE';
    }
    if (error.code === 'auth/weak-password') {
      return 'WEAK_PASSWORD';
    }
  }
}

export async function signIn({email, password, NextStep}: ISignIn) {
  try {
    await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => NextStep());
  } catch (error: any) {
    console.log('error: ', error.code);
    if (error.code === 'auth/invalid-email') {
      return 'INVALID_EMAIL';
    }
    if (error.code === 'auth/user-not-found') {
      return 'USER_NOT_FOUND';
    }
    if (error.code === 'auth/wrong-password') {
      return 'WRONG_PASSWORD';
    }
  }
}
