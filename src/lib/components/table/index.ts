export interface IHeader {
  scope: 'row' | 'rowgroup' | 'col' | 'colgroup';
}

export interface ISpan {
  colspan: number;
  rowspan: number;
}

export interface ICell {
  header?: IHeader;
  span?: ISpan;
  hasTemplate?: boolean;
  value: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  template?: any;
  action?: () => unknown;
}

export { default as Table } from './Table.svelte';
export { default as Cell } from './Cell.svelte';
export { default as Row } from './Row.svelte';