import { Box, Button, Card, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RecommendIcon from '@mui/icons-material/Recommend';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import PendingIcon from '@mui/icons-material/Pending';
import ExpenseTabs from './ExpenseTabs';
import { useNavigate } from 'react-router-dom';
const ExpenseHeader = ({approved, rejected, pending, tabState, setTabState}) => {
    const navigate = useNavigate();
    const handleNewExpense = () => {
        navigate('/expense/new-expense');
    }
    return (
        <Box sx={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>
            <Button startIcon={<AddIcon />} sx={{ textTransform: "none", backgroundColor: "#172554", color: "white", marginLeft: "auto" }} variant='contained' onClick={handleNewExpense}>New Expense</Button>
            <Grid container sx={{ marginBottom: "20px", marginTop: "10px" }} spacing={2}>
                <Grid item xs={12} lg={4}>
                    <Card>
                        <Box sx={{ display: "flex", flexDirection: "row", padding: "10px 30px" }}>
                            <IconButton>
                                <RecommendIcon sx={{ fontSize: "50px", color: "#059669" }} />
                            </IconButton>
                            <Box sx={{ display: "flex", flexDirection: "column", margin: "auto 0px", marginLeft: "auto" }}>
                                <Typography sx={{ fontSize: "20px", color: "black", }}>
                                    Approved Expenses
                                </Typography>
                                <Typography sx={{ fontSize: "40px", color: "black", marginLeft: "auto" }}>
                                    {approved}
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Card>
                        <Box sx={{ display: "flex", flexDirection: "row", padding: "10px 30px" }}>
                            <IconButton>
                                <PendingIcon sx={{ fontSize: "50px", color: "#facc15" }} />
                            </IconButton>
                            <Box sx={{ display: "flex", flexDirection: "column", margin: "auto 0px", marginLeft: "auto" }}>
                                <Typography sx={{ fontSize: "20px", color: "black", }}>
                                    Pending Expenses
                                </Typography>
                                <Typography sx={{ fontSize: "40px", color: "black", marginLeft: "auto" }}>
                                    {pending}
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Card>
                        <Box sx={{ display: "flex", flexDirection: "row", padding: "10px 30px" }}>
                            <IconButton>
                                <ThumbDownAltIcon sx={{ fontSize: "50px", color: "red" }} />
                            </IconButton>
                            <Box sx={{ display: "flex", flexDirection: "column", margin: "auto 0px", marginLeft: "auto" }}>
                                <Typography sx={{ fontSize: "20px", color: "black", }}>
                                    Rejected Expenses
                                </Typography>
                                <Typography sx={{ fontSize: "40px", color: "black", marginLeft: "auto" }}>
                                    {rejected}
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
            <ExpenseTabs tabState={tabState} setTabState={setTabState}/>
        </Box>
    )
}

export default ExpenseHeader