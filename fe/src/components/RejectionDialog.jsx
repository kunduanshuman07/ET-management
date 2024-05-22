import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import GppBadIcon from '@mui/icons-material/GppBad';
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const RejectionDialog = ({ open, setOpen, expenseId }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [comments, setComments] = React.useState('');
    const navigate = useNavigate();
    const handleClose = () => {
        setOpen(false);
    };
    const handleReject = async () => {
        const rejectedResponse = await axios.post('http://localhost:5000/etsheet/expense/reject-expense', { expenseId: expenseId, employeeName: user?.name, comments: comments });
        if (rejectedResponse.status === 200) {
            navigate('/expense');
            handleClose();
        }
    }
    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle sx={{ display: "flex" }}>
                    <Typography variant="h6" sx={{ fontFamily: "Montserrat", fontWeight: "500", margin: "auto auto auto 0px" }}>
                        Comments for Rejection
                    </Typography>
                    <IconButton onClick={handleClose} sx={{ margin: "auto 0px auto auto" }}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ padding: "20px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                        <TextField fullWidth value={comments} onChange={(e) => setComments(e.target.value)}/>
                        <Button startIcon={<GppBadIcon />} variant='contained' sx={{ margin: "20px auto 5px auto", backgroundColor: "#dc2626", textTransform: "none", ":hover": { backgroundColor: "#991b1b" } }} onClick={handleReject}>
                            Reject
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}

export default RejectionDialog;