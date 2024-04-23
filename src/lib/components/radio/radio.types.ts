import type { ControlPair, ControlSize, ControlTheme, Id } from "../common";

export interface IRadioProps extends ControlTheme, ControlSize, Id, ControlPair {
  value?: string | number;
  group: string | number;
}
