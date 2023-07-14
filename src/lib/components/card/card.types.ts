import type { Stretch } from "../common";

export interface ICardProps {
	grow: boolean;
	flex: boolean;
	stretch: Stretch;
	between: boolean;
	fullWidth: boolean;
}
