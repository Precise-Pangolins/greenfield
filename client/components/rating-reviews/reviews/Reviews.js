import React, { useState, useEffect } from "react";
import Review from "./Review.js";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const Reviews = ({ reviews, handleGetReviewsRequest }) => {
  const classes = useStyles();
  const [page, setPage] = useState(2);

  useEffect(() => {
    handleGetReviewsRequest(1, 1);
  }, []);

  return (
    <div>
      {reviews.map(review => {
        return (
          <div>
            <Review review={review} key={review.review_id} />;
          </div>
        );
      })}
      <Button
        onClick={() => {
          setPage(page + 1);
          console.log(page);
          handleGetReviewsRequest(1, page);
        }}
        variant="outlined"
        className={classes.button}
      >
        More
      </Button>
    </div>
  );
};

export default Reviews;
