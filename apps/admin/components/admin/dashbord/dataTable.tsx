import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

const columns = [
  { field: "uuid", headerName: "uuid", width: 70 },
  { field: "price", headerName: "price", width: 130 },
  { field: "name", headerName: "name", width: 130 },
];

export const DataTable: any = () => {
  const [products, setProducts] = useState<any[]>([]);


  return (
    <>
      <h1>s</h1>
    </>
  );
};

export default DataTable;
