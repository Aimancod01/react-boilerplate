import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  type ColumnDef,
  type SortingState,
} from "@tanstack/react-table";
import { ChevronDown, ChevronUpIcon } from "lucide-react";
import { useState } from "react";

type BasicTableProps<T extends object> = {
  data: T[];
  columns: ColumnDef<T>[];
  heading: string;
};

const BasicTable = <T extends object>({
  data,
  columns,
  heading,
}: BasicTableProps<T>) => {
  const [sort, setSort] = useState<SortingState>([]);
  const [filter, setFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sort,
      globalFilter: filter,
    },
    onSortingChange: setSort,
    onGlobalFilterChange: setFilter,
  });

  return (
    <div className="w-full overflow-x-auto border rounded-xl border-gray-300">
      <div className="flex items-center justify-between mx-4 h-16">
        <h2 className="text-2xl font-bold">{heading}</h2>
        <input
          className="m-3 px-2 py-1 w-64 bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Search"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        />
      </div>
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="bg-gray-100" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200"
                >
                  <div className="flex items-center gap-1">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() === "asc" && <ChevronUpIcon />}
                    {header.column.getIsSorted() === "desc" && <ChevronDown />}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <tr className="hover:bg-gray-50" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-6 text-center text-sm text-gray-500"
              >
                No data found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="m-4 flex space-x-3 justify-end">
        <button
          className="p-2 border rounded-lg border-gray-400"
          onClick={() => table.setPageIndex(0)}
        >
          First Page
        </button>
        <button
          disabled={!table.getCanNextPage()}
          className="p-2 border rounded-lg border-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500"
          onClick={() => table.nextPage()}
        >
          Next Page
        </button>
        <button
          disabled={!table.getCanPreviousPage()}
          className="p-2 border rounded-lg border-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500"
          onClick={() => table.previousPage()}
        >
          Previous Page
        </button>
        <button
          className="p-2 border rounded-lg border-gray-400"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          Last Page
        </button>
      </div>
    </div>
  );
};

export default BasicTable;
