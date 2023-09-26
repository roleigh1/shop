import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };
  

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button variant="text" onClick={handleClickOpen}>Info</Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>Lettuces</BootstrapDialogTitle>
          
            <DialogContent dividers>
                <Typography gutterBottom>
                Lettuce, a crisp and refreshing leafy green vegetable, is a popular choice in Austria, especially during its prime
                 growing season in the spring and early summer months. As the weather warms up, from April to June,
                </Typography>
                <Typography gutterBottom>
                Austrian farmers cultivate fields of lush lettuce varieties, ranging from butterhead to romaine, creating a delightful
                 bounty of salads and culinary delights for locals and visitors alike to savor.
                </Typography>
                <Typography gutterButtom>
                Lettuce, a crisp and refreshing leafy green, is abundant
                 in Austria during its prime growing season from April to June. Packed with essential nutrients like vitamins A, K, and C, as well as minerals and fiber,
                 lettuce offers a healthy and hydrating addition to salads and various dishes.
                 </Typography>
             </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    Order Now
                </Button>
            </DialogActions>
         </BootstrapDialog>
        </div>
    )
}