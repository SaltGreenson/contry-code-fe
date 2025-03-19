"use client";
import { ITableHead } from "@/shared/lib";
import {
  Checkbox,
  Table as MUTable,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type Props<T> = {
  isSelected: (value: T) => boolean;
  toggleChecked: (value: T) => () => void;
  head: ITableHead<T>[];
  source: T[];
};

export function Table<T>({
  head,
  source,
  toggleChecked,
  isSelected,
}: Props<T>) {
  return (
    <TableContainer component={Paper} style={{ height: "100%", width: "100%" }}>
      <MUTable stickyHeader>
        <TableHead>
          <TableRow>
            {head.map(({ label }) => (
              <TableCell key={label}>{label}</TableCell>
            ))}
            <TableCell>Активные</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {source.map((row, index) => (
            <TableRow key={index}>
              {head.map(({ key, render }, idx) => (
                <TableCell key={`${index}_${idx}`}>
                  {render?.call(null, row) ?? <>{row[key]}</>}
                </TableCell>
              ))}
              <TableCell>
                <Checkbox
                  defaultChecked={isSelected(row)}
                  onChange={toggleChecked(row)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MUTable>
    </TableContainer>
  );
}
