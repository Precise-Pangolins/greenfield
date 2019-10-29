import React, { useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import queryString from "querystring";
let productId = queryString.parse(location.search)["?productId"] || 1;

const StarRatings = ({ metaData, getRatingsRequest }) => {
  useEffect(() => {
    getRatingsRequest(productId);
  });
  const getTotal = ratings => {
    let total = 0;
    for (let rating in ratings) {
      total += ratings[rating];
    }
    return total;
  };
  const getAverage = ratings => {
    const size = Object.keys(ratings).length;
    let total = getTotal(ratings);
    return total / size;
  };
  return (
    <Rating value={getAverage(metaData.ratings)} precision={0.25} readOnly />
  );
};

export default StarRatings;
