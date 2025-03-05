"use client";

import {
  ColumnDef,
  flexRender,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from "@/components/ui/table";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { DataTablePagination } from "./DataTablePagination";

interface DataTableProps<TData, TValue> {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
}

export function DataTable<TData, TValue>({
  data,
  columns,
}: DataTableProps<TData, TValue>) {
  const tableRef = React.useRef<HTMLDivElement>(null);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 50 } },
  });

  const { pageIndex } = table.getState().pagination;

  React.useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [pageIndex]);

  return (
    <div ref={tableRef} style={{ paddingTop: "65px", marginTop: "-65px" }}>
      <div className="flex items-center justify-end py-2">
        <Input
          placeholder="Search pin..."
          value={(table.getColumn("pin")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("pin")?.setFilterValue(event.target.value)
          }
          className="h-9 max-w-sm border border-input rounded-md shadow-none"
        />
      </div>
      <div className="w-full overflow-hidden rounded-md border">
        <Table className="overflow-hidden text-xs md:text-sm">
          <TableHeader className="overflow-hidden">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="rounded-t-md bg-muted">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-nowrap">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-muted-foreground"
                >
                  No results
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
