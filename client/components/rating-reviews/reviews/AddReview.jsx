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
// import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { number } from "prop-types";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));
export default function AddReview({ metaData, handleSubmit }) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(3);

  const [review, setReview] = useState({});
  const [recommend, setRecommend] = useState(0);
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
  useEffect(() => {
    console.log(review);
  }, [review]);

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
            id="standard-name"
            label="Name"
            className={classes.textField}
            margin="normal"
            onChange={event => setName(event.target.value)}
          />
          <h3>Email</h3>
          <TextField
            type="email"
            id="standard-name"
            label="Name"
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
              // handleSubmit(metaData.product_id, review);
              console.log(Object.keys(metaData.characteristics));
              console.log(Object.keys(characteristics));

              if (
                Object.keys(metaData.characteristics).length ===
                Object.keys(characteristics).length
              ) {
                handleClose();
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
