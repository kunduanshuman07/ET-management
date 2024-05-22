import React from 'react'
import AppBarComponent from '../components/AppBarComponent'
import { Box } from '@mui/material'
import { Routes, Route } from "react-router-dom";
import ExpensePage from "../pages/ExpensePage";
import TimeSheetPage from "../pages/TimeSheetPage"
import DrawerComponent from '../components/DrawerComponent';
import AddEditExpensePage from '../pages/AddEditExpensePage';
import ViewExpensePage from '../pages/ViewExpensePage';
import EditExpensePage from '../pages/EditExpensePage';
const UserLayout = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <AppBarComponent />
            <DrawerComponent/>
            <Box component="main" sx={{marginTop: "90px", marginLeft: "150px", width: "87.5%", padding: "10px 0px 20px 0px"}}>
                <Routes>
                    <Route path='/expense' element={<ExpensePage/>}/>
                    <Route path='/expense/new-expense' element={<AddEditExpensePage/>}/>
                    <Route path='/expense/:id' element={<ViewExpensePage/>}/>
                    <Route path='/expense/edit-expense/:expenseId' element={<EditExpensePage/>}/>
                    <Route path='/timesheet' element={<TimeSheetPage/>}/>
                </Routes>
            </Box>
        </Box>
    )
}

export default UserLayout