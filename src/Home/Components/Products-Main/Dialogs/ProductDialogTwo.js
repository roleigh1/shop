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
  

export default function CustomizedDialogs2() {
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
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>Mint</BootstrapDialogTitle>
          
            <DialogContent dividers>
                <Typography gutterBottom>
                Mint thrives abundantly in Austria during late spring and summer. Known for its invigorating aroma and versatility, 
                mint is a cherished herb in culinary creations and beverages. Packed with vitamins A and C, as well as minerals like iron and calcium, mint offers not only a delightful taste but also numerous health benefits
                </Typography>
                <Typography gutterBottom>
                Whether used in salads, drinks, or as a soothing tea, 
                mint's presence enhances the culinary experience
                 and adds a touch of nature's goodness to Austrian cuisine.
                </Typography>
                <Typography gutterButtom>
                Throughout the warmer months, Austrians cherish the abundance of fresh mint, harnessing its delightful flavor and therapeutic benefits
                 to create a memorable culinary experience. Whether it's a garnish for desserts, a key ingredient in sauces, or a centerpiece for refreshing summer drinks, mint's presence in Austrian cuisine truly adds a touch of nature's goodness to the dining table.
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