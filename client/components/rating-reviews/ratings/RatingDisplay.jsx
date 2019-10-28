import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import RatingBars from "./RatingBars.jsx";
import ProductBreakDown from "./ProductBreakdown.jsx";

const RatingDisplay = ({
  productInfo,
  handleGetRatingsRequest,
  metaData,
  handleFilterRatingsRequest,
  handleGetReviewsRequest,
  handleClearFilterRequest,
  filters,
  setFilters
}) => {
  const clearFilter = () => {
    handleClearFilterRequest(1);
  };
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
    <div>
      {metaData.ratings ? (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {getAverage(metaData.ratings)}
          </Grid>
          <Grid item xs={6}>
            <Rating
              value={getAverage(metaData.ratings)}
              precision={0.25}
              readOnly
            />
          </Grid>
          <Grid item xs={12}>
            100% of reviews found this helpful
          </Grid>
          <Grid item xs={12}>
            <RatingBars
              total={getTotal(metaData.ratings)}
              ratings={metaData.ratings}
              handleClick={handleFilterRatingsRequest}
              id={productInfo.id}
              handleClearFilter={clearFilter}
              setFilters={setFilters}
              filters={filters}
            />
          </Grid>
          <Grid item xs={12}>
            <ProductBreakDown characteristics={metaData.characteristics} />
          </Grid>
        </Grid>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default RatingDisplay;
