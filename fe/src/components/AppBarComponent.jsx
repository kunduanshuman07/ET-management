import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, IconButton } from '@mui/material';

const AppBarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{
        zIndex: 10,
        backgroundColor: "white"
      }} className='bg-black'>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <img src='/images/LogoStart.svg' alt='Logo' height={28}/>
            <Typography sx={{color: "#172554", fontSize: "10px", marginTop: "auto"}}>
              &
            </Typography>
            <img src='/images/LogoEnd.svg' alt='Logo' height={28}/>
            <Typography sx={{color: "#172554", fontSize: "10px", marginTop: "auto"}}>
              sheet
            </Typography>
          </Box>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="xyz" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppBarComponent;