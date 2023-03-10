import type { ControlSize, ControlType, Id } from "../common";

export interface ButtonProps extends ControlSize, ControlType, Id {
  title?: string;
}