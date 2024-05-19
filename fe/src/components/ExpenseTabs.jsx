import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Tab, Tabs } from '@mui/material';

const ExpenseTabs = ({ tabState, setTabState }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <Box sx={{ flexGrow: 1, marginTop: "10px" }}>
            <AppBar position="static" sx={{ height: "45px", backgroundColor: "white", padding: "0px" }}>
                <Toolbar style={{
                    padding: 0,
                    minHeight: "100%",
                    justifyContent: "space-between",
                }}
                >
                    <Tabs>
                        <Tab
                            onClick={()=>setTabState('My Expenses')}
                            label="My Expenses"
                            sx={{ textTransform: "none", color: "#172554", borderBottom: tabState === 'My Expenses' ? "3px solid #dc2626" : '' }}
                        />
                        {user.role === 'manager' &&
                            <Tab
                                onClick={()=>setTabState('Team Expenses')}
                                label="My Team Approvals"
                                sx={{ textTransform: "none", color: "#172554", borderBottom: tabState === 'Team Expenses' ? "3px solid #dc2626" : '' }}
                            />
                        }
                    </Tabs>
                </Toolbar>
            </AppBar>
        </Box>
    );
}


export default ExpenseTabs