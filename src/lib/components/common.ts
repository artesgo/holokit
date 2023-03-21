export interface ControlSize {
	size?: 's' | 'm' | 'l';
}

export interface ControlType {
	theme?: 'success' | 'warning' | 'info' | 'danger' | 'neutral';
}

export type Stretch = 'window' | 'element' | 'none';

export interface Id {
	id?: string;
}

export interface ControlPair {
	apart?: boolean;
	reverse?: boolean;
}