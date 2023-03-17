import type { ControlPair, ControlSize, ControlType, Id } from '../common';

export interface InputProps extends ControlSize, ControlType, ControlPair, Id {
	title?: string;
	ariaLabel?: string;
	label?: string;
	placeholder?: string;
	value?: string;
	inline?: boolean;
	integrated?: boolean;
}
