"use client"

import { Input } from "@/components/ui/input"
import React from "react"
import {
  columnFilteringFeature,
  globalFilteringFeature,
  columnVisibilityFeature,
  createColumnHelper,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  filterFn_includesString,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
} from "@tanstack/react-table"
export const features = tableFeatures({
    columnFilteringFeature,
    globalFilteringFeature,
    columnVisibilityFeature,
    rowPaginationFeature,
    rowSelectionFeature,
    rowSortingFeature,
    filteredRowModel: createFilteredRowModel(),
    paginatedRowModel: createPaginatedRowModel(),
    sortedRowModel: createSortedRowModel(),
    filterFns: { includesString: filterFn_includesString },
    sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
})
import { Invoice } from "@/lib/dummyData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table" 
import { useTable, type ColumnDef, type RowData } from "@tanstack/react-table"

export type DataTableFeatures = typeof features;

const columnHelper = createColumnHelper<DataTableFeatures, Invoice>()

export const columns = columnHelper.columns([
    columnHelper.accessor("invoiceCode", {header: "Invoice#", cell:(info)=> (
      <span className="text-red-900">#{info.getValue()}</span>
    )}),
    columnHelper.accessor("clientName", {header:"Client", cell:(info)=> (
      <span className="font-bold">{info.getValue()}</span>
    )}),
    columnHelper.accessor("services", {header:"Services", cell:(info)=> (
      <span className="font-bold text-red-900">{info.getValue()}</span>
    )}),
    columnHelper.accessor("amount", {header: "Amount", cell:(info) => (
      <span className="font-bold">${info.getValue().toFixed(2)}</span>
    )}),
    columnHelper.accessor("status", {header: "Status", 
      cell:(info) =>{
        const status = info.getValue();
        const styles: Record<string, string>={
          paid: "bg-green-100 text-green-800",
          pending: "bg-yellow-100 text-yellow-800",
          overdue: "bg-red-100 text-red-800",
          draft: "bg-gray-200 text-gray-800"
        };
        return(
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              styles[status.toLowerCase()] ?? "bg-gray-100 text-gray-700"
            }`}
          >
            {status}
          </span>
        )
      }
    }),
    columnHelper.accessor("dueDate", {header: "Due Date"})
])

interface DataTableProps<TData extends RowData> {
  columns: ColumnDef<DataTableFeatures, TData>[]
  data: TData[]
}
 
export function DataTable<TData extends RowData>({
  columns,
  data,
}: DataTableProps<TData>) {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const table = useTable({
    features,
    data,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  })
 
  return (
    <div className="overflow-hidden rounded-md border">
      <Input
        placeholder="Filter invoices..."
        value={globalFilter ?? ""}
        onChange={(event) => setGlobalFilter(event.target.value)}
        className="max-w-sm m-4"
      />
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  scope={header.index === 0 ? "col" : undefined}
                >
                  {header.isPlaceholder ? null : (
                    <table.FlexRender header={header} />
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length}>No results.</TableCell>
            </TableRow>
          ) : (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} id={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    <table.FlexRender cell={cell} />
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}



