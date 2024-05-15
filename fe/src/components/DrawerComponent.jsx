import { Box, Drawer, List, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import React from 'react'
import sidebar from "../common/items";
const DrawerComponent = () => {
    return (
        <Drawer variant='permanent' sx={{
            width: 120,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 120, zIndex: 2, boxSizing: 'border-box', backgroundColor: "#172554", color: "white", transition: 'width 250ms' },
        }}>

            <Box sx={{ marginTop: "50px", display: "flex" }}>
                <List>
                    {sidebar.map((item, index) => (
                        <ListItemButton
                            to={item.to}
                            key={index}
                            sx={{ display: "flex", flexDirection: "column", marginTop: index === 2 ? "250px" : "30px" }}
                        >
                            <ListItemIcon sx={{ margin: "0px 10px" }}>
                                <img
                                    width={25}
                                    height="100%"
                                    src={`/images/${item.title}.svg`}
                                    alt={item.title}
                                />
                            </ListItemIcon>
                            <Typography sx={{ marginTop: "10px" }}>
                                {item.title}
                            </Typography>
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default DrawerComponent