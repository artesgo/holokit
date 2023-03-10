export interface ControlSize {
	size?: 's' | 'm' | 'l';
}

export interface ControlType {
	type?: 'success' | 'warning' | 'info' | 'danger' | 'neutral';
}

export type Stretch = 'window' | 'element' | 'none';

export interface Id {
	id?: string;
}