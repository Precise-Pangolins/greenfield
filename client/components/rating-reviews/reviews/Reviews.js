import React, { useState, useEffect } from "react";
import Review from "./Review.js";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddReview from "./AddReview.jsx";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const Reviews = ({ reviews, handleGetReviewsRequest, metaData }) => {
  console.log("Review metadata", metaData);
  const classes = useStyles();
  const [page, setPage] = useState(2);

  useEffect(() => {
    handleGetReviewsRequest(1, 1);
  }, []);
  const getTotal = ratings => {
    let total = 0;
    for (let rating in ratings) {
      total += ratings[rating];
    }
    return total;
  };
  return (
    <div>
      <div>
        <h3>
          {getTotal(metaData.ratings) + " reviews, sorted by "}
          <select>
            <option value="relevant">Relevance</option>
            <option value="helpful">Helpfulness</option>
            <option value="newest">Newest</option>
          </select>
        </h3>
      </div>
      {reviews.map(review => {
        return (
          <div>
            <Review review={review} key={review.review_id} />
          </div>
        );
      })}
      <Grid container spacing={0}>
        <Grid item md={6}>
          <Button
            onClick={() => {
              setPage(page + 1);
              handleGetReviewsRequest(1, page);
            }}
            variant="outlined"
            className={classes.button}
          >
            More
          </Button>
        </Grid>
        <Grid item md={6}>
          <AddReview />
        </Grid>
      </Grid>
    </div>
  );
};

export default Reviews;
