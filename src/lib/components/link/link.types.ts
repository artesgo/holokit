import type { ControlSize, ControlType } from "../common";

export interface LinkProps extends ControlSize, ControlType {
  title?: string;
  href?: string;
}