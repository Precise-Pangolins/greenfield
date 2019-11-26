import React from "react";
import Review from "./Review.jsx";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddReview from "../../../../src/redux/containers/ReviewsContainers/addReviews.js";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import queryString from "querystring";
let productId = queryString.parse(location.search)["?productId"] || 1;

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
    <div className="reviews">
      {/** Renders only the review button in the event the product has no reviews**/}
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
            /**Applies scroll css class to the reviews container if user loads more than 2 reviews **/
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
                  /**Keeps track of previous length of reviews. Once the user has loaded all of the reviews from the server the number wille be the same and the review button disappear**/
                  window.previousLength = reviews.length;
                  setPage(page + 1);
                  handleGetReviewsRequest(productId, page + 1, 2, sort);
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
