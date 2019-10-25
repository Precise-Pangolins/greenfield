import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import Recommend from "./Recommend.jsx";
import Characteristics from "./Characteristics.jsx";
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));
export default function ResponsiveDialog() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(3);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Review
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Write your Review"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>About the Product jabjbujg</DialogContentText>
          <h3>Rating</h3>
          <Rating
            name="simple-controlled"
            precision={0.25}
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Recommend />
          <Characteristics />
          <h3>Summary</h3>
          <TextField
            id="standard-full-width"
            label=""
            style={{ margin: 8 }}
            placeholder="Ex: Best purchase ever!!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <h3>Body</h3>
          <TextField
            id="standard-full-width"
            label=""
            style={{ margin: 8 }}
            placeholder="Why did you like the product"
            fullWidth
            multiline
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <h4>Add Photos</h4>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
          >
            Upload
          </Button>
          <h3>Nick Name</h3>
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            margin="normal"
          />
          <h3>Email</h3>
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Exit
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
