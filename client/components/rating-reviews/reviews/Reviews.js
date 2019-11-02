import React, { useState, useEffect, useRef } from "react";
import Review from "./Review.js";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddReview from "../../../../src/redux/containers/ReviewsContainers/addReviews.js";
import Grid from "@material-ui/core/Grid";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
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
  const reviewScroll = { height: "50vh", overflow: "auto" };

  return (
    <div className="reviews">
      {reviews.length === 0 ? (
        <AddReview />
      ) : (
        <div className="reviews">
          <div>
            <h3 className="dark">
              {getTotal(metaData.ratings) + " reviews, sorted by "}
              <select
                className="review-sort-selector"
                onChange={event => {
                  setSort(event.target.value);
                  setPage(1);
                }}
              >
                <option value="relevant">Relevance</option>
                <option value="helpful">Helpfulness</option>
                <option value="newest">Newest</option>
              </select>
              <KeyboardArrowDownIcon />
            </h3>
          </div>
          <div
            className={reviews.length > 2 ? "reviews-list" : ""}
            id="reviews-list"
          >
            {reviews.map(review => {
              return (
                <div key={review.review_id}>
                  <Review review={review} />
                </div>
              );
            })}
          </div>
          <div className="reviews-list-buttons-container">
            {window.previousLength === reviews.length ? null : (
              <Button
                onClick={() => {
                  window.previousLength = reviews.length;
                  setPage(page + 1);
                  handleGetReviewsRequest(7, page + 1, 2, sort);
                }}
                variant="outlined"
                className={classes.button}
              >
                More
              </Button>
            )}
            <AddReview />
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
