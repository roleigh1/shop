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

export default function CustomizedDialogs5() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
        Info
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Potatoes
        </BootstrapDialogTitle>

        <DialogContent dividers>
          <Typography gutterBottom>
            Potatoes are one of the most widely consumed and versatile vegetables worldwide. They are a staple food in many cuisines
            and come in various types, such as Russet, Yukon Gold, and Red Potatoes, each with its unique characteristics.
          </Typography>
          <Typography gutterBottom>
            Rich in carbohydrates, potassium, and vitamin C, potatoes offer a good source of energy and essential nutrients. They can be
            prepared in numerous ways, including mashed, fried, roasted, or baked, making them a favorite in countless dishes.
          </Typography>
          <Typography gutterBottom>
            Whether it's crispy French fries, creamy mashed potatoes, or a hearty potato stew, this humble vegetable never fails to
            satisfy taste buds and provides comfort and nourishment in every bite.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Order Now
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
