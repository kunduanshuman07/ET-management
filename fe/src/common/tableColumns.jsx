import { Button, Typography } from "@mui/material";
import "./tableHeader.css";

export const myExpense = [
    {
        field: 'id', headerName: '#', flex: 0.5, headerClassName: 'grid-headers', headerAlign: "center", renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ fontFamily: "Montserrat", margin: "15px auto", fontSize: "14px" }}>{rowData?.row?.id}</Typography>
            </div>
        )
    },
    {
        field: 'expense_Id',
        headerName: 'Expense Id',
        flex: 1,
        editable: false,
        headerClassName: 'grid-headers',
        headerAlign: "center",
        renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ fontFamily: "Montserrat", margin: "15px auto", fontSize: "14px" }}>{rowData?.row?.expense_Id}</Typography>
            </div>
        )
    },
    {
        field: 'category',
        headerName: 'Category',
        flex: 1,
        editable: false,
        headerClassName: 'grid-headers',
        headerAlign: "center",
        renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ fontFamily: "Montserrat", margin: "15px auto", fontSize: "14px" }}>{rowData?.row?.category}</Typography>
            </div>
        )
    },
    {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        editable: false,
        headerClassName: 'grid-headers',
        headerAlign: "center",
        renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ fontFamily: "Montserrat", margin: "15px auto", fontSize: "14px" }}>{rowData?.row?.name}</Typography>
            </div>
        )
    },
    {
        field: 'invDate',
        headerName: 'Created At',
        flex: 1,
        editable: false,
        headerClassName: 'grid-headers',
        headerAlign: "center",
        renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ fontFamily: "Montserrat", margin: "15px auto", fontSize: "14px" }}>{rowData?.row?.invDate}</Typography>
            </div>
        )
    },
    {
        field: 'claim',
        headerName: 'Claim Amount',
        flex: 1,
        editable: false,
        headerClassName: 'grid-headers',
        headerAlign: "center",
        renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ fontFamily: "Montserrat", margin: "15px auto", fontSize: "14px" }}>{rowData?.row?.claim}</Typography>
            </div>
        )
    },
    {
        field: 'status',
        headerName: 'Status',
        flex: 1,
        editable: false,
        headerClassName: 'grid-headers',
        headerAlign: "center",
        renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button sx={{ fontFamily: "Montserrat", margin: "14px auto", padding: "0px 10px", backgroundColor: rowData?.row?.status === "Approved" ? "#059669" : rowData?.row?.status === "Pending" ? "#facc15" : rowData?.row?.status === "Rejected" ? "red" : "", color: "white", fontSize: "14px", textTransform: "none", borderRadius: "20px" }}>{rowData?.row?.status}</Button>
            </div>
        )
    },


];

export const teamApproval = [
    {
        field: 'id', headerName: '#', flex: 0.5, headerClassName: 'grid-headers', headerAlign: "center", renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ fontFamily: "Montserrat", margin: "15px auto", fontSize: "14px" }}>{rowData?.row?.id}</Typography>
            </div>
        )
    },
    {
        field: 'expense_Id',
        headerName: 'Expense Id',
        flex: 1,
        editable: false,
        headerAlign: "center",
        headerClassName: 'grid-headers',
        renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ fontFamily: "Montserrat", margin: "15px auto", fontSize: "14px" }}>{rowData?.row?.expense_Id}</Typography>
            </div>
        )
    },
    {
        field: 'category',
        headerName: 'Category',
        flex: 1,
        editable: false,
        headerAlign: "center",
        headerClassName: 'grid-headers',
        renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ fontFamily: "Montserrat", margin: "15px auto", fontSize: "14px" }}>{rowData?.row?.category}</Typography>
            </div>
        )
    },
    {
        field: 'invDate',
        headerName: 'Invoice Date',
        flex: 1,
        editable: false,
        headerAlign: "center",
        headerClassName: 'grid-headers',
        renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ fontFamily: "Montserrat", margin: "15px auto", fontSize: "14px" }}>{rowData?.row?.invDate}</Typography>
            </div>
        )
    },
    {
        field: 'created_at',
        headerName: 'Created On',
        flex: 1,
        editable: false,
        headerAlign: "center",
        headerClassName: 'grid-headers',
        renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ fontFamily: "Montserrat", margin: "15px auto", fontSize: "14px" }}>{rowData?.row?.created_at}</Typography>
            </div>
        )
    },
    {
        field: 'claim',
        headerName: 'Claim Amount',
        flex: 1,
        editable: false,
        headerAlign: "center",
        headerClassName: 'grid-headers',
        renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ fontFamily: "Montserrat", margin: "15px auto", fontSize: "14px" }}>{rowData?.row?.claim}</Typography>
            </div>
        )
    },
    {
        field: 'bill',
        headerName: 'Bill Amount',
        flex: 1,
        editable: false,
        headerAlign: "center",
        headerClassName: 'grid-headers',
        renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography sx={{ fontFamily: "Montserrat", margin: "15px auto", fontSize: "14px" }}>{rowData?.row?.bill}</Typography>
            </div>
        )
    },
    {
        field: 'status',
        headerName: 'Status',
        flex: 1,
        editable: false,
        headerAlign: "center",
        headerClassName: 'grid-headers',
        renderCell: (rowData) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button sx={{ fontFamily: "Montserrat", margin: "14px auto", padding: "0px 10px", backgroundColor: rowData?.row?.status === "Approved" ? "#059669" : rowData?.row?.status === "Pending" ? "#facc15" : rowData?.row?.status === "Rejected" ? "red" : "", color: "white", fontSize: "14px", textTransform: "none", borderRadius: "20px" }}>{rowData?.row?.status}</Button>
            </div>
        )
    },
];