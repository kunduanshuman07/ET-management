import React from 'react'
import axios from "axios";
import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import GppBadIcon from '@mui/icons-material/GppBad';
import GppGoodIcon from '@mui/icons-material/GppGood';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import EditIcon from "@mui/icons-material/Edit";
import ImageIcon from '@mui/icons-material/Image';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import DetailTypographyComponent from './DetailTypographyComponent';
import { getPayMethod, getCategoryTitle, getProjectCode, getPurpose } from "../utils/getItemDetails";
import { useNavigate } from 'react-router-dom';
const ExpenseDetailCard = ({ expense }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleApprove = async () => {
    const approvalResponse = await axios.post('http://localhost:5000/etsheet/expense/approve-expense', { expenseId: expense.expenseId });
    if (approvalResponse.status === 200) {
      navigate('/expense');
    }
  }
  const handleReject = async () => {
    const rejectedResponse = await axios.post('http://localhost:5000/etsheet/expense/reject-expense', { expenseId: expense.expenseId });
    if (rejectedResponse.status === 200) {
      navigate('/expense');
    }
  }
  const handleUpdate = async () => {
    navigate(`/expense/edit-expense/${expense?.expenseId}`);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex" }}>
        {
          user?.role === 'manager' && expense?.status === 'Pending'
          &&
          <Box sx={{ marginTop: "30px", marginLeft: "auto", display: "flex" }}>
            <Button startIcon={<GppGoodIcon />} variant='outlined' sx={{ marginLeft: "auto", color: "#16a34a", border: "1px solid #16a34a", textTransform: "none", ":hover": { border: "1px solid #166534", color: "#166534" } }} size='small' onClick={handleApprove}>
              Approve
            </Button>
            <Button startIcon={<GppBadIcon />} variant='outlined' sx={{ marginLeft: "10px", color: "#dc2626", border: "1px solid #dc2626", textTransform: "none", ":hover": { border: "1px solid #991b1b", color: "#991b1b" } }} size='small' onClick={handleReject}>
              Reject
            </Button>
          </Box>
        }
        {
          (expense?.status === 'Rejected' || expense?.status === 'Pending') && expense?.employeeId === user?.employeeId
          &&
          <Box sx={{ marginTop: "30px", marginLeft: "10px", display: "flex" }}>
            <Button startIcon={<EditIcon />} variant='outlined' sx={{ marginLeft: "auto", color: "#1e40af", border: "1px solid #1e40af", textTransform: "none", ":hover": { border: "1px solid #166534", color: "#166534" } }} size='small' onClick={handleUpdate}>
              Edit Expense
            </Button>
          </Box>
        }
      </Box>
      <Grid sx={{ display: "flex", marginTop: "10px", border: "2px solid #172554", padding: "10px 20px", borderRadius: "10px", }} container>
        <Grid item xs={12} lg={6} sx={{ padding: "10px" }}>
          <Box sx={{ display: "flex" }}>
            <Typography variant='h5' sx={{ fontFamily: "Montserrat", fontWeight: "500" }}>
              Expense Detail
            </Typography>
            <Button sx={{ textDecoration: "underline", textTransform: "none", marginLeft: "auto", marginRight: "20px", fontFamily: "Montserrat", fontWeight: "500" }}>
              Audit History
            </Button>
          </Box>
          <DetailTypographyComponent title={'Expense Detail'} value={expense?.expenseId} />
          <DetailTypographyComponent title={'Purpose'} value={getPurpose(expense?.purpose)} />
          <DetailTypographyComponent title={'Category'} value={getCategoryTitle(expense?.category)} />
          <DetailTypographyComponent title={'ProjectCode'} value={getProjectCode(expense?.projectCode)} />
          <DetailTypographyComponent title={'EmployeeId'} value={expense?.employeeId} />
          <DetailTypographyComponent title={'Invoice Date'} value={expense?.invDate} />
          <DetailTypographyComponent title={'Created On'} value={expense?.createdAt} />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ borderLeft: "1px solid #e2e8f0", padding: "10px", display: "flex", flexDirection: "column" }}>
          <Typography variant='h5' sx={{ fontFamily: "Montserrat", fontWeight: "500" }}>
            Amount
          </Typography>
          <DetailTypographyComponent title={'Payment Method'} value={getPayMethod(expense?.paymethod)} />
          <DetailTypographyComponent title={'Bill Amount'} value={`INR ${expense?.bill?.toFixed(2)}`} />
          <DetailTypographyComponent title={'Claim Amount'} value={`INR ${expense?.claim?.toFixed(2)}`} />
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex", marginTop: "10px", border: "2px solid #172554", padding: "10px 20px", borderRadius: "10px", }} container>
        <Grid item xs={12} lg={12} sx={{ padding: "10px", display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex" }}>
            <Typography variant='h5' sx={{ fontFamily: "Montserrat", fontWeight: "500" }}>
              Attachments
            </Typography>
            <Typography sx={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "10px", margin: "auto 10px" }}>
              (2 Attachments)
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: "30px", backgroundColor: "#eff6ff", width: "40%" }}>
            <IconButton>
              <FileCopyIcon />
            </IconButton>
            <Typography sx={{ fontFamily: "Montserrat", fontWeight: "500", margin: "auto 10px" }}>
              invoice.pdf
            </Typography>
            <IconButton sx={{ marginLeft: "auto" }}>
              <DownloadOutlinedIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", marginTop: "10px", backgroundColor: "#eff6ff", width: "40%" }}>
            <IconButton>
              <ImageIcon />
            </IconButton>
            <Typography sx={{ fontFamily: "Montserrat", fontWeight: "500", margin: "auto 10px" }}>
              photo.jpg
            </Typography>
            <IconButton sx={{ marginLeft: "auto" }}>
              <DownloadOutlinedIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default ExpenseDetailCard