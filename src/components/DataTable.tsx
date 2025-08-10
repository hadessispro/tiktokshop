import {
  ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel,
  getFilteredRowModel, useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

export default function DataTable<T>({ columns, data, searchable=true }:{ columns: ColumnDef<T, any>[]; data: T[]; searchable?: boolean; }) {
  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data, columns, state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm">
      <div className="flex items-center gap-3 p-4 border-b">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="toggle" disabled />
          <span className="font-medium text-gray-600">Day</span>
        </label>
        {searchable && (
          <input value={globalFilter ?? ""} onChange={e=>setGlobalFilter(e.target.value)} placeholder="Search"
                 className="ml-3 flex-1 rounded-xl border px-3 py-2"/>
        )}
      </div>

      <table className="w-full">
        <thead className="text-xs uppercase text-gray-500">
        {table.getHeaderGroups().map(hg => (
          <tr key={hg.id} className="border-b bg-gray-50">
            {hg.headers.map(h => (
              <th key={h.id} className="text-left px-4 py-3">
                {h.isPlaceholder ? null : flexRender(h.column.columnDef.header, h.getContext())}
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody>
        {table.getRowModel().rows.length ? table.getRowModel().rows.map(r => (
          <tr key={r.id} className="border-b last:border-0">
            {r.getVisibleCells().map(c => (
              <td key={c.id} className="px-4 py-3">{flexRender(c.column.columnDef.cell, c.getContext())}</td>
            ))}
          </tr>
        )) : (
          <tr><td className="px-4 py-12 text-center text-gray-400" colSpan={columns.length}>No data available</td></tr>
        )}
        </tbody>
      </table>

      <div className="flex items-center justify-between p-4">
        <div className="text-sm text-gray-500">
          Rows per page:
          <select className="ml-2 border rounded-md px-2 py-1"
                  value={table.getState().pagination.pageSize}
                  onChange={e=>table.setPageSize(Number(e.target.value))}>
            {[10,20,50].map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded-md" onClick={()=>table.previousPage()} disabled={!table.getCanPreviousPage()}>{'<'}</button>
          <button className="px-3 py-1 border rounded-md" onClick={()=>table.nextPage()} disabled={!table.getCanNextPage()}>{'>'}</button>
        </div>
      </div>
    </div>
  );
}
