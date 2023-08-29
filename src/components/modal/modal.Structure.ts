export interface IModal {
  content?: React.ReactNode;
  opened: boolean;
  title: string;
  subtitle: string;
  buttonTitle: string;
  buttonFunction: () => void;
  secondButton?: boolean;
  secondButtonFunction?: () => void;
}
