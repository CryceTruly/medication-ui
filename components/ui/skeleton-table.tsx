"use client";

type SkeletonTableProps = {
  rows?: number;
  optionalColumns?: number;
};

export function SkeletonTable({ rows = 6, optionalColumns = 0 }: SkeletonTableProps) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={`skeleton-${rowIndex}`} className="border-t border-slate-100">
          <td className="px-6 py-4">
            <div className="h-4 w-4 rounded border border-slate-200 bg-slate-100" />
          </td>
          <td className="py-4">
            <div className="mb-2 h-4 w-32 rounded bg-slate-100" />
            <div className="flex gap-2">
              <div className="h-3 w-20 rounded bg-slate-100" />
              <div className="h-3 w-12 rounded bg-slate-100" />
            </div>
          </td>
          <td className="py-4">
            <div className="mb-2 h-4 w-36 rounded bg-slate-100" />
            <div className="h-3 w-24 rounded bg-slate-100" />
          </td>
          <td className="py-4">
            <div className="h-3 w-full rounded bg-slate-100" />
            <div className="mt-2 h-3 w-3/4 rounded bg-slate-100" />
          </td>
          <td className="px-4 py-4 text-right">
            <div className="ml-auto h-4 w-24 rounded bg-slate-100" />
            <div className="ml-auto mt-2 h-3 w-20 rounded bg-slate-100" />
          </td>
          {Array.from({ length: optionalColumns }).map((__, colIndex) => (
            <td key={`opt-${rowIndex}-${colIndex}`} className="px-4 py-4">
              <div className="h-3 w-full rounded bg-slate-100" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
