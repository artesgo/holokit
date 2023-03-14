import type { ControlSize, ControlType, Id } from "../common";

export interface LinkProps extends ControlSize, ControlType, Id {
  title?: string;
  href?: string;
  target: '_blank' | undefined;
  rel: 'noopener' | 'noreferrer';
  underline: boolean;
}