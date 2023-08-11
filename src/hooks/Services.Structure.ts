export interface ISignUp {
  email: string;
  password: string;
  NextStep: () => void;
}
export interface ISignIn {
  email: string;
  password: string;
  NextStep: () => void;
}
