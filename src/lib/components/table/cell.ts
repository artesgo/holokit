import type { Scope } from "./scope";
import type { ISpan } from "./span";

export interface ICell {
  scope?: Scope;
  span?: ISpan;
  value: string;
}
