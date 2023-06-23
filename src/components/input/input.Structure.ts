export interface IInput {
  icon: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  secureText?: boolean;
}
