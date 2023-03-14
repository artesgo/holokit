import type { ControlType, Id } from "../common";

export interface AlertProps extends ControlType, Id {
  title?: string;
  body?: string;
  row: boolean;
}