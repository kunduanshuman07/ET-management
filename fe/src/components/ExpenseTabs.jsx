import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Tab, Tabs } from '@mui/material';

export default function ExpenseTabs() {
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
                            label="Pending Expenses"
                            sx={{textTransform: "none", color: "#172554", borderBottom: "3px solid #dc2626" }}
                        />
                        <Tab
                            label="Approved Expenses"
                            sx={{textTransform: "none", color: "#172554" }}
                        />
                        <Tab
                            label="Rejected Expenses"
                            sx={{textTransform: "none", color: "#172554" }}
                        />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
