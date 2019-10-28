import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import SizeDropdown from './SizeDropdown.jsx';
import QuantityDropdown from './QuantityDropdown.jsx';

export default function AddToCartModal({
  currentStyle = {
    skus: {}
  }
}) {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sizes = currentStyle.skus
    ? Object.entries(currentStyle.skus).map(curr => {
        return curr[0];
      })
    : [];

  const onSizeChange = size => {
    setSize(size);
  };

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={handleClickOpen}>
        Add to Cart
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>
          Add Items to your Shopping Cart
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add items, please select a size and quantity:
          </DialogContentText>
          <SizeDropdown onSizeChange={onSizeChange} sizes={sizes} />
          <QuantityDropdown size={size} skus={currentStyle.skus} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Save in Cart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
