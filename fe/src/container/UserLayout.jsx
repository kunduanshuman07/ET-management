import React from 'react'
import AppBarComponent from '../components/AppBarComponent'
import { Box } from '@mui/material'
import { Routes, Route } from "react-router-dom";
import ExpensePage from "../pages/ExpensePage";
import TimeSheetPage from "../pages/TimeSheetPage"
import DrawerComponent from '../components/DrawerComponent';
const UserLayout = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <AppBarComponent />
            <DrawerComponent/>
            <Box component="main" sx={{marginTop: "90px", marginLeft: "150px", width: "87.5%"}}>
                <Routes>
                    <Route path='/expense' element={<ExpensePage/>}/>
                    <Route path='/timesheet' element={<TimeSheetPage/>}/>
                </Routes>
            </Box>
        </Box>
    )
}

export default UserLayout