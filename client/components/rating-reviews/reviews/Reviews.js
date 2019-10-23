import React, { useState, useEffect } from "react";
import Review from "./Review.js";

const Reviews = ({ reviews, handleGetReviewsRequest }) => {
  const [review, setReviews] = useState();
  useEffect(() => {
    handleGetReviewsRequest(1);
  }, []);
  return (
    <div>
      {reviews.map(review => {
        console.log(review);
        return <Review review={review} key={review.review_id} />;
      })}
    </div>
  );
};

export default Reviews;
