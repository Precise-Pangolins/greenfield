import React, { useState, useEffect } from "react";
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
export default function AddReview({ metaData, handleSubmit, info }) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const [review, setReview] = useState({});
  const [recommend, setRecommend] = useState(-1);
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [characteristics, setChars] = useState({});
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setReview({
      ...review,
      rating: Number(rating),
      characteristics,
      recommend: Number(recommend),
      summary,
      body,
      name,
      email,
      photos
    });
  }, [characteristics, recommend, summary, body, name, email]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formValidation = () => {
    let message = "Please complete the following \n";

    if (
      Object.keys(metaData.characteristics).length !==
      Object.keys(characteristics).length
    ) {
      message += "-Characteristics \n";
    }
    if (rating === 0) {
      message += "-Rating \n";
    }
    if (recommend === -1) {
      message += "-Recommend \n";
    }
    if (summary.length === 0) {
      message += "-Summary \n";
    }
    if (body.length < 50) {
      message += "-Body \n";
    }
    if (name.length === 0) {
      message += "-Name \n";
    }
    if (email.length === 0) {
      message += "-Email \n";
    }
    return message;
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
          {info.info ? `Write your Review for ${info.info.name}` : null}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>About the Product {}</DialogContentText>
          <h3>Rating</h3>
          <Rating
            required
            name="simple-controlled"
            precision={1}
            value={rating}
            label="rating"
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Recommend setRecommend={setRecommend} recommend={recommend} />
          <Characteristics
            characteristics={characteristics}
            setChars={setChars}
            metaData={metaData.characteristics}
          />
          <h3>Summary</h3>
          <TextField
            required
            id="standard-full-width"
            label="Summary"
            style={{ margin: 8 }}
            placeholder="Ex: Best purchase ever!!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            maxLength={60}
            error={summary === "" ? true : false}
            helperText={
              summary.length > 60 ? "the maximum character count is 60" : null
            }
            onChange={event =>
              summary.length >= 60 ? null : setSummary(event.target.value)
            }
          />
          <h3>Body</h3>
          <TextField
            required
            maxLength={1000}
            error={body.length < 50 ? true : false}
            helperText={
              body.length < 50 ? "the minimum charater count is 50" : null
            }
            id="standard-full-width"
            label="Body"
            style={{ margin: 8 }}
            placeholder="Why did you like the product"
            fullWidth
            multiline
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
            onChange={event => setBody(event.target.value)}
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
            required
            placeholder="Example: jackson11"
            maxLength={60}
            error={name.length === 0 ? true : false}
            helperText={
              body.length === 0
                ? "Please enter a name"
                : "For privacy reasons, do not use your full name or email address"
            }
            id="standard-name"
            label="Name"
            className={classes.textField}
            margin="normal"
            onChange={event => setName(event.target.value)}
          />
          <h3>Email</h3>
          <TextField
            type="email"
            placeholder="Example: jackson11@email.com"
            id="standard-name"
            label="Email"
            error={
              !email.includes("@") || !email.includes(".com") ? true : false
            }
            helperText={
              email.length === 0
                ? "Please enter a valid email"
                : "For authentication reasons, you will not be emailed"
            }
            className={classes.textField}
            margin="normal"
            onChange={event => setEmail(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Exit
          </Button>
          <Button
            onClick={() => {
              let message = formValidation();
              if (message.length === 31) {
                handleSubmit(metaData.product_id, review);
              } else {
                alert(message);
              }
            }}
            color="primary"
            autoFocus
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
