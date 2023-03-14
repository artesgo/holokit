import type { IHeader } from "./header";
import type { ISpan } from "./span";

export interface ICell {
  header?: IHeader;
  span?: ISpan;
  hasTemplate?: boolean;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  template?: any;
  action?: () => unknown;
}
