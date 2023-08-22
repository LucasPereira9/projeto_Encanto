export interface IInput {
  icon: string;
  placeholder: string;
  value: string;
  error: boolean;
  setValue: (value: string) => void;
  secureText?: boolean;
  keyboardType?: any;
  pressed?: () => void;
  secondIcon?: string;
}
