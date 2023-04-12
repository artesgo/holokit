import type { ControlSize, ControlTheme, Id } from "../common";

export interface ISliderProps extends ControlSize, ControlTheme, Id {
  label?: string;
  disabled?: boolean;
  input: boolean;
  value: number;
  min: number;
  max: number;
  borderless: boolean;
}
