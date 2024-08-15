
export interface IButton {
  onClick: (() => void) | undefined;
  children: string;
  disabled: boolean;
}