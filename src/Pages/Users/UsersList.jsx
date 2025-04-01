import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../Services/DummyData";
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
      renderCell: (params) => (
        <div className="flex items-center h-full text-gray-500 font-semibold text-lg">
          {params.value}
        </div>
      ),
    },
    {
      field: "user",
      headerName: "User  ",
      width: 200,
      headerClassName: "custom-header",
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-x-5 h-full">
            <img
              src={params.row.avatar || "face.jpg"}
              alt="user"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex items-center h-full text-gray-500 font-semibold text-lg">
              {params.row.username}
            </div>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      headerClassName: "custom-header",
      renderCell: (params) => (
        <div className="flex items-center h-full text-gray-500 font-semibold text-lg">
          {params.value}
        </div>
      ),
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      headerClassName: "custom-header",
      renderCell: (params) => (
        <div className="flex items-center h-full text-gray-500 font-semibold text-lg">
          {params.value}
        </div>
      ),
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
      headerClassName: "custom-header",
      renderCell: (params) => (
        <div className="flex items-center h-full text-gray-500 font-semibold text-lg">
          {params.value}
        </div>
      ),
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
              <button className="rounded-xl bg-[#3bb077] py-2 px-4 text-white cursor-pointer text-lg font-bold">
                Edit
              </button>
            </Link>
            <DeleteOutline
              sx={{ fontSize: "2rem", color: "red", cursor: "pointer" }}
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="sm:flex-[4] mr-5 mb-5 border w-fit h-fit shadow-[1px_1px_5px_rgba(0,0,0,0.2)] ml-4 overflow-x-scroll">
      <DataGrid
        rows={rows}
        columns={userColumns}
        disableRowSelectionOnClick
        initialState={{ pagination: { paginationModel: { pageSize: 9 } } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{
          width: "100%",
          border: 0,
          "& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "gray-900",
          },
        }}
      />
    </div>
  );
};

export default UsersList;
