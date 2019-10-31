import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ImageList from "./ImageList.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import Axios from "axios";
import formatDate from "../../../../src/utils/formatDate.js";
import Reviews from "./Reviews.js";
import CheckIcon from "@material-ui/icons/Check";

const parseDate = stringDate => {
  let date = new Date(stringDate);
};
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  root2: {
    width: "100%",
    maxWidth: "auto",
    backgroundColor: theme.palette.background.paper
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(1)}px`
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`
  }
}));

const Review = ({ review }) => {
  const [helpClick, sethelpClick] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [helpful, setHelpful] = useState(0);

  useEffect(() => {
    if (review.helpfulness) {
      setHelpful(review.helpfulness);
    }
  }, []);

  const classes = useStyles();
  let body1 = "";
  let body2 = "";
  if (review.body.length > 250) {
    body1 = review.body.substring(0, 250);
    body2 = review.body.substring(250);
  }
  return (
    <List spacing={0} className={classes.root2}>
      <div className="main-review-container">
        <div className="review-star-username-date"></div>
        <div className="review-summary"></div>
        <div className="review-body"></div>
        <div className=""></div>
      </div>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={
            <Typography
              component="span"
              variant="subtitle2"
              className={classes.inline}
              color="textPrimary"
            >
              {review.reviewer_name}
            </Typography>
          }
        />
      </ListItem>
      <ListItem>
        <Rating
          name="half-rating"
          value={review.rating}
          precision={0.25}
          disabled
        />
        <Typography
          component="span"
          variant="subtitle1"
          className={classes.inline}
          color="textPrimary"
        >
          {review.summary}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography
          component="span"
          variant="caption"
          className={classes.inline}
          color="textPrimary"
        >
          {formatDate(review.date)}
        </Typography>
      </ListItem>
      {review.recommend ? (
        <ListItem>
          <Typography
            component="span"
            variant="subtitle2"
            className={classes.inline}
            color="textPrimary"
          >
            I recommend this product <CheckIcon />
          </Typography>
        </ListItem>
      ) : null}
      <ListItem>
        <Typography
          component="span"
          variant="body1"
          className={classes.inline}
          color="textPrimary"
        >
          {body1.length === 0 ? (
            review.body
          ) : showBody ? (
            <div>
              {body1 + body2}
              <br></br>
              <button
                onClick={() => {
                  setShowBody(!showBody);
                }}
              >
                show less
              </button>
            </div>
          ) : (
            <div>
              {body1}
              <br></br>
              <button
                onClick={() => {
                  setShowBody(!showBody);
                }}
              >
                show more
              </button>
            </div>
          )}
        </Typography>
      </ListItem>
      {review.photos.length > 0 ? (
        <ListItem>
          <ImageList tileData={review.photos} />
        </ListItem>
      ) : null}
      {review.response ? (
        <ListItem>
          <List>
            <ListItem>
              <Typography
                component="span"
                variant="subtitle1"
                className={classes.inline}
                color="textPrimary"
              >
                {"Response from Seller"}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                component="span"
                variant="subtitle1"
                className={classes.inline}
                color="textPrimary"
              >
                {review.response}
              </Typography>
            </ListItem>
          </List>
        </ListItem>
      ) : null}
      <ListItem>
        <Typography
          component="span"
          variant="overline"
          className={classes.inline}
          color="textPrimary"
        >
          {"Was this review helpful? "}
        </Typography>
        {helpClick ? (
          `Yes(${helpful}) ?`
        ) : (
          <a
            style={{ textDecoration: "none" }}
            href=""
            onClick={event => {
              event.preventDefault();
              setHelpful(helpful + 1);
              Axios.put(
                `http://18.223.1.30/reviews/helpful/${review.review_id}`
              ).then(() => {
                sethelpClick(true);
              });
            }}
          >
            Yes({review.helpfulness})?
          </a>
        )}
      </ListItem>

      <Divider light />
    </List>
  );
};

export default Review;
