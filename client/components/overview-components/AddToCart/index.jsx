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
    skus: {},
    name: ''
  },
  handlePostToCartRequest,
  productId,
  info
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

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const userSession = getRandomIntInclusive(1, 100000);

  const handleSaveToCart = () => {
    if (document.cookie.split('cart_id=')[1] !== undefined) {
      handlePostToCartRequest(document.cookie.split('cart_id=')[1], productId);
    } else {
      document.cookie = `cart_id=${userSession}`;
      handlePostToCartRequest(document.cookie.split('cart_id=')[1], productId);
    }
    alert(
      `your product, ${info.name} and chosen style, ${currentStyle.name}, has been saved to your shopping cart!`
    );
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
          <Button onClick={handleSaveToCart} color='primary'>
            Save to Cart
          </Button>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
