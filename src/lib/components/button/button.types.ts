import type { ControlSize, ControlTheme, Id } from "../common";

export type ButtonType = "button" | "submit";

export interface IButtonProps extends ControlSize, ControlTheme, Id {
  title?: string;
  width?: string | undefined;
  align?: boolean | undefined;
  wrap?: boolean;
  type?: ButtonType;
  disabled?: boolean;
}
