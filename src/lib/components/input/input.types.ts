import type { ControlSize, ControlType } from "../common";

export interface InputProps extends ControlSize, ControlType {
  title?: string;
  ariaLabel?: string;
  label?: string;
}