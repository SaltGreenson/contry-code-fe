import { ReactNode } from "react";

export interface ITableHead<T> {
  key: keyof T;
  label: string;
  render?: (value: T) => ReactNode;
}
