import React, { useState, useEffect } from "react";
import Review from "./Review.js";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddReview from "../../../../src/redux/containers/ReviewsContainers/addReviews.js";
import Grid from "@material-ui/core/Grid";
import AddReview from "../../../../src/redux/containers/ReviewsContainers/addReviews.js";

import uuid from "uuidv4";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const Reviews = ({
  reviews,
  handleGetReviewsRequest,
  metaData,
  page,
  sort,
  setPage,
  setSort
}) => {
  const classes = useStyles();

  const getTotal = ratings => {
    let total = 0;
    for (let rating in ratings) {
      total += ratings[rating];
    }
    return total;
  };

  return (
    <div>
<<<<<<< HEAD
      {reviews.length === 0 ? (
        <AddReview />
      ) : (
        <div>
          <div>
            <h3>
              {getTotal(metaData.ratings) + " reviews, sorted by "}
              <select
                onChange={event => {
                  setSort(event.target.value);
                  setPage(1);
                }}
              >
                <option value="relevant">Relevance</option>
                <option value="helpful">Helpfulness</option>
                <option value="newest">Newest</option>
              </select>
            </h3>
          </div>
          <div id="reviews-list" style={{ height: "100vh", overflow: "auto" }}>
            {reviews.map(review => {
              return (
                <div key={review.review_id}>
                  <Review review={review} />
                </div>
              );
            })}
=======
      <div>
        <h3>
          {getTotal(metaData.ratings) + " reviews, sorted by "}
          <select
            onChange={event => {
              setSort(event.target.value);
              setPage(1);
            }}
          >
            <option value="relevant">Relevance</option>
            <option value="helpful">Helpfulness</option>
            <option value="newest">Newest</option>
          </select>
        </h3>
      </div>
      {reviews.map(review => {
        console.log(review);
        return (
          <div key={review.review_id}>
            <Review review={review} />
>>>>>>> master
          </div>
          <Grid container spacing={0}>
            <Grid item md={6}>
              <Button
                onClick={() => {
                  setPage(page + 1);
                  handleGetReviewsRequest(7, page + 1, 2, sort);
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
      )}
    </div>
  );
};

export default Reviews;
