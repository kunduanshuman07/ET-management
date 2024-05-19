import React, { useState } from 'react'
import CommonHeader from "../components/CommonHeader";
import { Box, Button, Card, Checkbox, FormControlLabel, Grid, IconButton, MenuItem, TextField, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { purposes, categories, currency, paymentMethod } from "../common/expenseUtils";
const AddNewExpensePage = () => {
    const [purposeData, setPurposeData] = useState();
    const [categoryData, setCategoryData] = useState();
    const [currencyType, setCurrencyType] = useState();
    const [paymentType, setPaymentType] = useState();
    const [expenseName, setExpenseName] = useState('');
    const [claimAmount, setClaimAmount] = useState(0);
    const [billAmount, setBillAmount] = useState(0);
    const [invoiceDate, setInvoiceDate] = useState();
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <CommonHeader title={'Add New Expense'} navigator={'/expense'} />
            <Grid container spacing={4}>
                <Grid item xs={12} lg={6} sx={{ marginTop: "10px" }}>
                    <TextField
                        label='Purpose'
                        required
                        select
                        variant='outlined'
                        fullWidth
                        type='text'
                        value={purposeData}
                        onChange={(e) => setPurposeData(e.target.value)}
                    >
                        {purposes?.map((purpose, index) => (
                            <MenuItem key={index} value={purpose.id}>
                                {purpose.title}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} lg={6} sx={{ marginTop: "10px" }}>
                    <TextField
                        label='Category'
                        required
                        select
                        variant='outlined'
                        fullWidth
                        type='text'
                        value={categoryData}
                        onChange={(e) => setCategoryData(e.target.value)}
                    >
                        {categories?.map((category, index) => (
                            purposeData === category.purposeId && 
                            <MenuItem key={index} value={category.categoryId}>
                                {category.title}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} lg={6} sx={{ marginTop: "10px" }}>
                    <TextField
                        label='Expense Name'
                        required
                        variant='outlined'
                        fullWidth
                        type='text'
                        value={expenseName}
                        onChange={(e)=>setExpenseName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} lg={6} sx={{ marginTop: "10px" }}>
                    <TextField
                        placeholder='Invoice Date'
                        required
                        variant='outlined'
                        fullWidth
                        type='date'
                        value={invoiceDate}
                        onChange={(e)=>setInvoiceDate(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} lg={3} sx={{ marginTop: "10px" }}>
                    <TextField
                        label='Currency'
                        required
                        select
                        variant='outlined'
                        fullWidth
                        type='text'
                        value={currencyType}
                        onChange={(e)=>setCurrencyType(e.target.value)}
                    >
                        {currency?.map((option, index)=>(
                            <MenuItem key={index} value={option.title}>
                                {option.title}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} lg={3} sx={{ marginTop: "10px" }}>
                    <TextField
                        label='Bill Amount'
                        required
                        variant='outlined'
                        fullWidth
                        value={billAmount}
                        onChange={(e)=>setBillAmount(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} lg={3} sx={{ marginTop: "10px" }}>
                    <TextField
                        label='Claim Amount'
                        required
                        variant='outlined'
                        fullWidth
                        value={claimAmount}
                        onChange={(e)=>setClaimAmount(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} lg={3} sx={{ marginTop: "10px" }}>
                    <TextField
                        label='Payment Method'
                        required
                        select
                        variant='outlined'
                        fullWidth
                        type='text'
                        value={paymentType}
                        onChange={(e)=>setPaymentType(e.target.value)}
                    >
                        {paymentMethod?.map((option, index)=>(
                            <MenuItem key={index} value={option.id}>
                                {option.title}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ marginTop: "10px" }}>
                    <TextField
                        label='Project Code/Name'
                        required
                        variant='outlined'
                        fullWidth
                        type='text'
                    />
                </Grid>
                <Grid item xs={12} lg={4} sx={{ marginTop: "10px" }}>
                    <Card sx={{ padding: "13px", backgroundColor: "#172554", color: "white" }}>
                        <Typography>Total : {currencyType} {claimAmount} </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={12} sx={{ marginTop: "10px", cursor: "pointer" }}>
                    <Card sx={{ padding: "20px", display: "flex", flexDirection: "column", border: "1px solid #172554", justifyContent: "center", alignItems: "center" }}>
                        <IconButton>
                            <CloudUploadIcon sx={{ fontSize: "50px" }} />
                        </IconButton>
                        <Typography>
                            Upload Reciepts/Invoice
                        </Typography>
                        <Button sx={{ textTransform: "none", backgroundColor: "#172554", color: "white", margin: "auto", marginTop: "10px" }} variant='contained'>Upload</Button>
                        <Typography sx={{ color: "#0ea5e9", marginTop: "10px" }}>
                            Only JPEG, JPG, XLS, XLSX, PNG and PDF are allowed with maximum size of 10 MB.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={8} sx={{ marginTop: "10px", display: "flex" }}>
                    <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />} label="I hereby declare that all information given above is true as per my knowledge." />
                </Grid>
            </Grid>
            <Box sx={{ display: "flex", marginLeft: "auto", marginBottom: "20px" }}>
                <Button sx={{ textTransform: "none", color: "#172554", marginRight: "20px" }} variant='outlined'>Save</Button>
                <Button sx={{ textTransform: "none", backgroundColor: "#172554", color: "white" }} variant='contained'>Submit</Button>
            </Box>
        </div>
    )
}

export default AddNewExpensePage