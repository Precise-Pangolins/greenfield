import React, { useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import queryString from "querystring";
let productId = queryString.parse(location.search)["?productId"] || 1;
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { withStyles } from "@material-ui/core/styles";

const StyledRating = withStyles({
  iconFilled: {
    color: "#000000"
  },
  iconHover: {
    color: "#000000"
  }
})(Rating);
const StarRatings = ({ metaData }) => {
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
    <StyledRating
      value={metaData ? getAverage(metaData.ratings) : null}
      precision={0.25}
      readOnly
      emptyIcon={<StarBorderIcon fontSize="inherit" />}
    />
  );
};

export default StarRatings;
