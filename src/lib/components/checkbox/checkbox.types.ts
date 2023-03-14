import type { ControlPair, ControlSize, Id } from "../common";

export interface CheckboxProps extends ControlSize, ControlPair, Id {
  checked: boolean | undefined;
}