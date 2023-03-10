import type { ControlSize, ControlType, Id } from '../common';

export interface InputProps extends ControlSize, ControlType, Id {
	title?: string;
	ariaLabel?: string;
	label?: string;
	placeholder?: string;
}
