import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function QuantitySelector({ size, skus }) {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState('');
  const handleChange = event => {
    setQuantity(event.target.value);
  };

  const limit = skus ? (skus[size] > 15 ? 15 : skus[size]) : 0; // skus.XL give us 4
  const ar = Array.from({ length: limit }, (val, index) => index + 1);

  return (
    <div className={classes.root} autoComplete='off'>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor='age-customized-select'>Quantity</InputLabel>
        <Select
          value={quantity}
          onChange={handleChange}
          input={<BootstrapInput name='age' id='age-customized-select' />}>
          <MenuItem value=''>
            <em>Out Of Stock</em>
          </MenuItem>
          {ar.map(q => {
            return <MenuItem value={q}>{q}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
