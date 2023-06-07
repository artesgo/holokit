import type { ControlSize, ControlTheme, Id } from "../common";

export interface ILinkProps extends ControlSize, ControlTheme, Id {
  title?: string;
  href?: string;
  target?: '_blank' | undefined;
  rel?: 'noopener' | 'noreferrer' | undefined;
  underline?: boolean;
  width?: string | undefined;
  padded: boolean;
  block: boolean;
}