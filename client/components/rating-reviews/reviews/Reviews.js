import React, { useState, useEffect } from "react";
import Review from "./Review.js";

const Reviews = ({ reviews, handleGetReviewsRequest }) => {
  const [review, setReviews] = useState();
  useEffect(() => {
    handleGetReviewsRequest(1);
  }, []);
  console.log(reviews, handleGetReviewsRequest);
  return <div>{reviews.map(review => {})}</div>;
};

export default Reviews;
