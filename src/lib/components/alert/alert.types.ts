import type { ControlTheme, Id } from "../common";

export interface IAlertProps extends ControlTheme, Id {
  title?: string;
  body?: string;
  row?: boolean;
}