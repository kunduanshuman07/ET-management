import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import {useAuth} from "../context/AuthContext"
import {useNavigate} from "react-router-dom";

const AppBarComponent = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const {setAuth} = useAuth();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    localStorage.clear();
    setAuth(false);
    navigate('/login');
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{
        zIndex: 10,
        backgroundColor: "white",
        cursor: "pointer"
      }} className='bg-black'>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <img src='/images/LogoStart.svg' alt='Logo' height={28} />
            <Typography sx={{ color: "#172554", fontSize: "10px", marginTop: "auto" }}>
              &
            </Typography>
            <img src='/images/LogoEnd.svg' alt='Logo' height={28} />
            <Typography sx={{ color: "#172554", fontSize: "10px", marginTop: "auto" }}>
              sheet
            </Typography>
          </Box>
            <Typography sx={{marginRight: "10px", color: "#172554"}}>Hi, {user.name}</Typography>
          <div>
            <IconButton sx={{ p: 0, cursor: "pointer" }} onClick={handleMenu}>
              <Avatar alt={user?.name} src="xyz" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              sx={{marginTop: "40px"}}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppBarComponent;