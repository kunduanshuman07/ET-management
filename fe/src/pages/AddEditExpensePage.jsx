import React, { useState } from 'react'
import axios from "axios";
import CommonHeader from "../components/CommonHeader";
import { Box, Button, Card, Checkbox, CircularProgress, FormControlLabel, Grid, IconButton, MenuItem, Snackbar, TextField, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { purposes, categories, currency, paymentMethod, projects } from "../common/expenseUtils";
import CloseIcon from "@mui/icons-material/Close"
import { useNavigate } from 'react-router-dom';
const AddNewExpensePage = ({ details }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const errorInit = {
        purpose: false,
        category: false,
        paymentType: false,
        expenseName: false,
        claim: false,
        bill: false,
        project: false,
        invoice: false,
    }
    const [purposeData, setPurposeData] = useState(details?.purpose || '');
    const [categoryData, setCategoryData] = useState(details?.category || '');
    const [currencyType, setCurrencyType] = useState(details?.currency || user?.entity);
    const [paymentType, setPaymentType] = useState(details?.paymethod || '');
    const [expenseName, setExpenseName] = useState(details?.name || '');
    const [claimAmount, setClaimAmount] = useState(details?.claim || 0);
    const [billAmount, setBillAmount] = useState(details?.bill || 0);
    const [invoiceDate, setInvoiceDate] = useState(details?.invDate || '');
    const [projectData, setProjectData] = useState(details?.projectCode || '');
    const [declaration, setDeclaration] = useState(false);
    const [loginErrorMessage, setLoginErrorMessage] = useState();
    const [snackOpen, setSnackOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorObj, setErrorObj] = useState(errorInit);
    const [errorMessage, setErrorMessage] = useState();
    const handleClose = () => {
        setSnackOpen(false);
    }
    const handleExpenseValidation = () => {
        let isValid = true;
        const errors = { ...errorInit }
        if (!purposeData) {
            isValid = false;
            errors.purpose = true;
        }
        if (!categoryData) {
            isValid = false;
            errors.category = true;
        }
        if (!expenseName) {
            isValid = false;
            errors.expenseName = true;
        }
        if (!invoiceDate) {
            isValid = false;
            errors.invoice = true;
        }
        if (!billAmount) {
            isValid = false;
            errors.bill = true;
        }
        if (!claimAmount) {
            isValid = false;
            errors.claim = true;
        }
        if (!paymentType) {
            isValid = false;
            errors.paymentType = true;
        }
        if (!projectData) {
            isValid = false;
            errors.project = true;
        }
        setErrorObj(errors);
        if (isValid) {
            if (claimAmount > billAmount) {
                setErrorMessage("Claim amount cannot be larger than bill amount.")
            }
            else if(details) {
                setErrorMessage();
                handleEditExpense();
            }
            else{
                setErrorMessage();
                handleAddExpense();
            }
        }
    }
    const handleEditExpense = async () => {
        try {
            setLoading(true);
            const expenseResponse = await axios.post('http://localhost:5000/etsheet/expense/update-expense', { expenseId: details?.expenseId, name: expenseName, purpose: purposeData, category: categoryData, invDate: invoiceDate, currency: currencyType, bill: billAmount, claim: claimAmount, paymethod: paymentType, projectCode: user?.projectCode, status: "Pending", employeeName: user?.name });
            if (expenseResponse.status === 200) {
                navigate('/expense');
            }
        } catch (error) {
            setLoading(false);
            setSnackOpen(true);
            setLoginErrorMessage(error?.response?.data?.message || error?.message);
        }
    }
    const handleAddExpense = async() => {
        try {
            setLoading(true);
            const expenseResponse = await axios.post('http://localhost:5000/etsheet/expense/add-expense', { name: expenseName, purpose: purposeData, category: categoryData, invDate: invoiceDate, currency: currencyType, bill: billAmount, claim: claimAmount, paymethod: paymentType, projectCode: user?.projectCode, employeeId: user?.employeeId, approvalManagerId: user?.managerId, employeeName: user?.name });
            if (expenseResponse.status === 200) {
                navigate('/expense');
            }
        } catch (error) {
            setLoading(false);
            setSnackOpen(true);
            setLoginErrorMessage(error?.response?.data?.message || error?.message);
        }
    }
    const action = (
        <IconButton sx={{ color: "white" }} size="small" onClick={handleClose}>
            <CloseIcon />
        </IconButton>
    );
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <CommonHeader title={details ? 'Edit Expense' : 'Add New Expense'} navigator={'/expense'} />
            <Snackbar
                open={snackOpen}
                onClose={handleClose}
                message={loginErrorMessage}
                autoHideDuration={6000}
                action={action}
            />
            <Grid container spacing={4}>
                <Grid item xs={12} lg={6} sx={{ marginTop: "10px" }}>
                    <TextField
                        label='Purpose'
                        required
                        error={errorObj?.purpose}
                        helperText={errorObj?.purpose ? 'Required Field' : ""}
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
                        error={errorObj?.category}
                        helperText={errorObj?.category ? 'Required Field' : ""}
                        variant='outlined'
                        fullWidth
                        type='text'
                        value={categoryData}
                        onChange={(e) => setCategoryData(e.target.value)}
                    >
                        {categories?.map((category, index) => (
                            (purposeData === category.purposeId || details) &&
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
                        error={errorObj?.expenseName}
                        helperText={errorObj?.expenseName ? 'Required Field' : ""}
                        fullWidth
                        type='text'
                        value={expenseName}
                        onChange={(e) => setExpenseName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} lg={6} sx={{ marginTop: "10px" }}>
                    <TextField
                        placeholder='Invoice Date'
                        required
                        variant='outlined'
                        fullWidth
                        type='date'
                        error={errorObj?.invoice}
                        helperText={errorObj?.invoice ? 'Required Field' : ""}
                        value={invoiceDate}
                        onChange={(e) => setInvoiceDate(e.target.value)}
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
                        onChange={(e) => setCurrencyType(e.target.value)}
                    >
                        {currency?.map((option, index) => (
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
                        error={errorObj?.bill}
                        helperText={errorObj?.bill ? 'Required Field' : ""}
                        fullWidth
                        value={billAmount}
                        onChange={(e) => setBillAmount(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} lg={3} sx={{ marginTop: "10px" }}>
                    <TextField
                        label='Claim Amount'
                        required
                        variant='outlined'
                        error={errorObj?.claim || errorMessage}
                        helperText={errorObj?.claim ? 'Required Field' : errorMessage ? errorMessage : ""}
                        fullWidth
                        value={claimAmount}
                        onChange={(e) => setClaimAmount(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} lg={3} sx={{ marginTop: "10px" }}>
                    <TextField
                        label='Payment Method'
                        required
                        select
                        variant='outlined'
                        error={errorObj?.paymentType}
                        helperText={errorObj?.paymentType ? 'Required Field' : ""}
                        fullWidth
                        type='text'
                        value={paymentType}
                        onChange={(e) => setPaymentType(e.target.value)}
                    >
                        {paymentMethod?.map((option, index) => (
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
                        error={errorObj?.project}
                        helperText={errorObj?.project ? 'Required Field' : ""}
                        type='text'
                        select
                        value={projectData}
                        onChange={(e) => setProjectData(e.target.value)}
                    >
                        {projects?.map((option, index) => (
                            user?.projectCode === option.projectCode
                            &&
                            <MenuItem key={index} value={option.projectCode}>
                                {option.projectCode}/{option.projectName}
                            </MenuItem>

                        ))}
                    </TextField>
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
                    <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} checked={declaration} onChange={() => setDeclaration(!declaration)} />} label="I hereby declare that all information given above is true as per my knowledge." />
                </Grid>
            </Grid>
            <Box sx={{ display: "flex", marginLeft: "auto", marginBottom: "20px" }}>
                <Button sx={{ textTransform: "none", color: "#172554", marginRight: "20px" }} disabled={!declaration} variant='outlined'>Save</Button>
                <Button sx={{ textTransform: "none", backgroundColor: "#172554", color: "white" }} disabled={!declaration} variant='contained' onClick={handleExpenseValidation}>
                    {loading ?
                        <CircularProgress sx={{ color: "white" }} size={20} />
                        :
                        <Typography sx={{ textTransform: "none" }}>Submit</Typography>
                    }
                </Button>
            </Box>
        </div>
    )
}

export default AddNewExpensePage