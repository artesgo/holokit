import type { ControlSize, ControlType } from "../common";

export interface ButtonProps extends ControlSize, ControlType {
  title?: string;
}