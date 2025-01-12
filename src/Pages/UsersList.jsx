import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../assets/DummyData";
import { Link } from "react-router-dom";

const UsersList = () => {
  const [rows, setRows] = useState(userRows);

  const handleDelete = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const userColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
      headerClassName: "custom-header",
      renderCell: (params) => <div className="flex items-center h-full text-gray-500 font-semibold text-lg">{params.value}</div>,
    },
    {
      field: "user",
      headerName: "User  ",
      width: 200,
      headerClassName: "custom-header",
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-x-5 h-full">
            <img src={params.row.avatar || "face.jpg"} alt="user" className="w-10 h-10 rounded-full object-cover" />
            <div className="flex items-center h-full text-gray-500 font-semibold text-lg">{params.row.username}</div>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
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
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
      headerClassName: "custom-header",
      renderCell: (params) => <div className="flex items-center h-full text-gray-500 font-semibold text-lg">{params.value}</div>,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      headerClassName: "custom-header",
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-x-5 my-auto h-full">
            <Link to={"/userslist/" + params.row.id}>
              <button className="rounded-xl bg-[#3bb077] py-2 px-4 text-white cursor-pointer text-lg font-bold">Edit</button>
            </Link>
            <DeleteOutline sx={{ fontSize: "2rem", color: "red", cursor: "pointer" }} onClick={() => handleDelete(params.row.id)} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="pt-3 flex-[4] border mt-5 mr-5 w-full h-full shadow-[1px_1px_5px_rgba(0,0,0,0.2)] ml-4 overflow-hidden">
      <DataGrid
        rows={rows}
        columns={userColumns}
        disableRowSelectionOnClick
        initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
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

export default UsersList;
