export interface IButton {
  pressed: () => void;
  loading?: boolean;
  title: string;
  isDisabled: boolean;
}
