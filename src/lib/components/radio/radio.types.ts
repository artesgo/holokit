import type { ControlPair, ControlSize, ControlType, Id } from "../common";

export interface RadioProps extends ControlType, ControlSize, Id, ControlPair {
  value: string;
}

export interface RadioGroupProps extends Id {
  label: string;
  value: string;
  name: string;
}