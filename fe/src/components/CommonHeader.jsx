import React from 'react'
import { useNavigate } from 'react-router-dom'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { IconButton, Typography } from '@mui/material';
const CommonHeader = ({ title, navigator }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(navigator);
    }
    return (
        <div style={{ display: "flex", marginBottom: "20px" }}>
            <IconButton onClick={handleNavigate}>
                <KeyboardArrowLeftIcon sx={{fontSize: "30px"}}/>
            </IconButton>
            <Typography variant='h5' sx={{margin: "auto 10px"}}>
                {title}
            </Typography>
        </div>
    )
}

export default CommonHeader