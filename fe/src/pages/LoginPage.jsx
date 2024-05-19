import React, { useState } from 'react'
import { Button, Card, CircularProgress, IconButton, InputAdornment, Snackbar, TextField, Typography } from "@mui/material";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import CloseIcon from "@mui/icons-material/Close"
const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowpassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState();
  const [snackOpen, setSnackOpen] = useState(false);
  const togglePasswordVisibility = () => {
    setShowpassword(!showPassword);
  }
  const handleLogin = async () => {
    setLoading(true);
    try {
      const loginResp = await axios.post(`http://localhost:5000/etsheet/auth/login`, { email, password });
      if (loginResp.status === 200) {
        localStorage.setItem("authToken", loginResp.data.token);
        localStorage.setItem("user", loginResp.data.user);
        setAuth(true);
        navigate('/expense');
      }
    } catch (error) {
      setSnackOpen(true);
      setLoginErrorMessage(error?.response?.data?.message || error?.message);
      setLoading(false);
    }
  }
  const handleClose = () => {
    setSnackOpen(false);
  }
  const action = (
    <IconButton sx={{color: "white"}} size="small" onClick={handleClose}>
      <CloseIcon />
    </IconButton>
  );
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#dbeafe", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Snackbar
        open={snackOpen}
        onClose={handleClose}
        message={loginErrorMessage}
        autoHideDuration={6000}
        action={action}
      />
      <Card sx={{ border: "1px solid #172554", width: "30%", height: "50%", borderRadius: "20px", display: "flex", flexDirection: "column", padding: "20px" }}>
        <img src='/images/LogoStart.svg' alt='Logo' height={40} />
        <Typography sx={{ color: "#172554", fontWeight: "bold", margin: "10px auto" }}>ETsheet</Typography>
        <TextField
          label='Email'
          type='text'
          placeholder='someone@gmail.com'
          sx={{
            marginTop: "20px",
          }}
          size='small'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label='Password'
          type={showPassword ? 'text' : 'password'}
          placeholder='Enter Password'
          sx={{ marginTop: "30px" }}
          size='small'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} size='small'>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <Button sx={{
          background: "#172554", color: "white", margin: "40px auto", padding: "10px 50px", ":hover": {
            background: "#1e40af"
          }
        }} onClick={handleLogin}>
          {loading ?
            <CircularProgress sx={{ color: "white" }} size={20} />
            :
            <Typography sx={{ textTransform: "none" }}>Login</Typography>
          }
        </Button>
      </Card>
    </div>
  )
}

export default LoginPage