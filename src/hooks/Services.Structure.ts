export interface ISignUp {
  email: string;
  password: string;
  name: string;
}
export interface ISignIn {
  email: string;
  password: string;
  NextStep: () => void;
}
