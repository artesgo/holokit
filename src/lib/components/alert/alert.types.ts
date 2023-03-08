import type { ControlType } from "../common";

export interface AlertProps extends ControlType {
  title?: string;
  body?: string;
}