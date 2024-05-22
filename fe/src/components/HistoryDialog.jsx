import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { formatDate } from "../utils/getItemDetails";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ width: "20%", display: "flex", backgroundColor: "#f4f4f5", padding: "10px 5px" }}>
        <Typography sx={{ fontFamily: "Montserrat", fontWeight: "500", marginLeft: "10px" }}>Date</Typography>
      </Box>
      <Box sx={{ width: "30%", display: "flex", backgroundColor: "#f4f4f5", padding: "10px 5px" }}>
        <Typography sx={{ fontFamily: "Montserrat", fontWeight: "500", marginLeft: "10px" }}>Logged By</Typography>
      </Box>
      <Box sx={{ width: "50%", display: "flex", backgroundColor: "#f4f4f5", padding: "10px 5px" }}>
        <Typography sx={{ fontFamily: "Montserrat", fontWeight: "500", marginLeft: "10px" }}>Activity</Typography>
      </Box>
    </Box>
  )
}

const HistoryDialog = ({ open, setOpen, expHistory }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ display: "flex" }}>
          <Typography variant="h5" sx={{ fontFamily: "Montserrat", fontWeight: "500", margin: "auto auto auto 0px" }}>
            Audit History
          </Typography>
          <IconButton onClick={handleClose} sx={{ margin: "auto 0px auto auto" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ padding: "10px 0px 30px 0px" }}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <Header />
            {expHistory?.map((hist, index) => (
              <Box sx={{ display: "flex", borderBottom: "2px solid #e2e8f0" }}>
                <Box sx={{ width: "20%", display: "flex", padding: "20px 5px" }}>
                  <Typography sx={{ fontFamily: "Montserrat", fontWeight: "500", marginLeft: "10px" }}>{formatDate(hist.createdAt)}</Typography>
                </Box>
                <Box sx={{ width: "30%", display: "flex", padding: "20px 5px", marginLeft: "10px" }}>
                  <Typography sx={{ fontFamily: "Montserrat", fontWeight: "500" }}>{hist.loggedBy}</Typography>
                </Box>
                <Box sx={{ width: "50%", display: "flex", padding: "20px 5px", marginLeft: "10px" }}>
                  <Typography sx={{ fontFamily: "Montserrat", fontWeight: "500" }}>{hist.activity}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default HistoryDialog;