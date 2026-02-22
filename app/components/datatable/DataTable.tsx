import React from "react";
import Skeleton from "../skeleton/Skeleton";

type TableColum<T = any> = {
  field: string;
  headerName: string;
  valueFormatter?: (value: T) => React.ReactNode;
};
export type TableColums<T = any> = TableColum<T>[];
type DataTableProps = {
  columns: TableColums;
  rows: any[] | undefined;
  //   search: string[];
  onRefresh?: () => void;
  customColumns?: Record<string, (value: any) => React.ReactNode>;
};

const DataTable = (props: DataTableProps) => {
  return (
    <div className="table-container w-full overflow-x-auto">
      <table className="min-w-full">
        <thead className="font-bold">
          <tr>
            {props.columns.map((item) => (
              <th key={item.field} className="px-4 py-2 text-left">
                {item.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.rows?.map((row, i) => (
            <tr className="table-row" key={i}>
              {props.columns.map((column) => (
                <td className="px-4 py-2" key={column.field}>
                  {column.valueFormatter
                    ? column.valueFormatter(row)
                    : props.customColumns?.[column.field]
                      ? props.customColumns[column.field](row)
                      : row[column.field]}
                </td>
              ))}
            </tr>
          ))}
          {props.rows?.length === 0 && (
            <tr className="table-row">
              <td className="px-4 py-2" colSpan={props.columns.length}>
                No hay datos
              </td>
            </tr>
          )}
          {props.rows == undefined &&
            Array(5)
              .fill(true)
              .map((_, i) => (
                <tr className="table-row" key={i}>
                  {props.columns.map((_, ic) => (
                    <td className="px-4 py-2" key={ic}>
                      <Skeleton />
                    </td>
                  ))}
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
