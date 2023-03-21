import type { ControlPair, ControlSize, ControlTheme, Id } from "../common";

export interface IRadioProps extends ControlTheme, ControlSize, Id, ControlPair {
  value?: string;
}

export interface IRadioGroupProps extends Id {
  label?: string;
  value?: string;
  name?: string;
}