import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../assets/DummyData";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const [rows, setRows] = useState(productRows);

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const userColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      headerClassName: "custom-header",
      renderCell: (params) => <div className="flex items-center h-full text-gray-500 font-semibold text-lg">{params.value}</div>,
    },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      headerClassName: "custom-header",
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-x-5 h-full">
            <img
              src={params.row.img} // Corrected image source
              alt="product"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex items-center h-full text-gray-500 font-semibold text-lg">{params.row.name}</div>
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 100,
      headerClassName: "custom-header",
      renderCell: (params) => <div className="flex items-center h-full text-gray-500 font-semibold text-lg">{params.value}</div>,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      headerClassName: "custom-header",
      renderCell: (params) => <div className="flex items-center h-full text-gray-500 font-semibold text-lg">{params.value}</div>,
    },
    {
      field: "price",
      headerName: "Price",
      width: 140,
      headerClassName: "custom-header",
      renderCell: (params) => <div className="flex items-center h-full text-gray-500 font-semibold text-lg">{params.value}</div>,
    },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      headerClassName: "custom-header",
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-x-5 my-auto h-full">
            <Link to={"/productslist/" + params.row.id}>
              <button className="rounded-xl bg-[#3bb077] py-2 px-4 text-white cursor-pointer text-lg font-bold">Edit</button>
            </Link>
            <DeleteOutline sx={{ fontSize: "2rem", color: "red", cursor: "pointer" }} onClick={() => handleDelete(params.row.id)} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="pt-3 flex-[4] m-5 w-full h-full shadow-[1px_1px_5px_rgba(0,0,0,0.2)] ml-4 overflow-hidden">
      <DataGrid
        rows={rows}
        columns={userColumns}
        disableRowSelectionOnClick
        initialState={{ pagination: { paginationModel: { pageSize: 9 } } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          width: "100%", // Ensure the table takes up 100% width
          border: 0, // Remove the outer border
          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
            outline: "none", // Remove the border on cell focus
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "gray-900", // Optional: Remove hover background color
          },
        }}
      />
    </div>
  );
};

export default ProductsList;
