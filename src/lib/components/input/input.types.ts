import type { ControlPair, ControlSize, ControlTheme, Id } from '../common';

export interface IInputProps extends ControlSize, ControlTheme, ControlPair, Id {
	title?: string;
	name?: string;
	ariaLabel?: string;
	label?: string;
	placeholder?: string;
	value?: string;
	inline?: boolean;
	integrated?: boolean;
	readonly?: boolean;
}
