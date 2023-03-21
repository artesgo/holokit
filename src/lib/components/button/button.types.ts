import type { ControlSize, ControlType, Id } from "../common";

export type ButtonType = "button" | "submit";

export interface ButtonProps extends ControlSize, ControlType, Id {
  title?: string;
  width?: string | undefined;
  align?: boolean | undefined;
  wrap?: boolean;
  type?: ButtonType;
  disabled?: boolean;
}
