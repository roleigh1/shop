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
  

export default function CustomizedDialogs3() {
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
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>The Tomato: A Versatile Culinary Gem</BootstrapDialogTitle>
          
            <DialogContent dividers>
                <Typography gutterBottom>
                The tomato, scientifically known as Solanum lycopersicum, is a beloved fruit with a rich history.
                 Originally from South America, it traveled to Europe in the 16th century and won hearts worldwide. 
                </Typography>
                <Typography gutterBottom>
                Tomatoes come in various shapes, sizes, and colors, offering versatility in the kitchen. 
                Whether raw in salads, as a rich sauce, or a key ingredient in diverse cuisines, tomatoes never fail to impress.
                </Typography>
                <Typography gutterButtom>
                Besides their delicious taste, they are packed with essential nutrients, 
                including vitamins A, C, and K, and antioxidants like lycopene. Easy to cultivate,
                 tomatoes are widely produced globally, making them a culinary gem enjoyed by millions.
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