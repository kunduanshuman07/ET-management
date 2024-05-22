import { Box, Typography } from '@mui/material'
import React from 'react'

const DetailTypographyComponent = ({title, value}) => {
    return (
        <Box sx={{ display: "flex", marginTop: "30px" }}>
            <Typography sx={{ width: "30%", color: "#6b7280", fontFamily: "Montserrat", fontWeight: "500" }}>
                {title}:
            </Typography>
            <Typography sx={{ width: "60%" }}>
                {value}
            </Typography>
        </Box>
    )
}

export default DetailTypographyComponent