import type { ControlPair, ControlSize, Id } from "../common";

export interface ICheckboxProps extends ControlSize, ControlPair, Id {
  checked?: boolean | undefined;
  disabled?: boolean;
}