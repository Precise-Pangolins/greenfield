import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
<<<<<<< HEAD
import Rating from "@material-ui/lab/Rating";
import RatingBars from "./RatingBars.jsx";
import ProductBreakDown from "./ProductBreakdown.jsx";

const RatingDisplay = ({
  productInfo,
  handleGetRatingsRequest,
  metaData,
  handleFilterRatingsRequest,
  handleReviewsRequest
}) => {
  const [filter, setFilter] = React.useState(false);
  const clearFilter = () => {
    setFilter(false);
    handleReviewsRequest(1);
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

  useEffect(() => {
    productInfo ? handleGetRatingsRequest(1) : null;
  }, []);
=======
>>>>>>> master

  return (
    <div>
<<<<<<< HEAD
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
              filter={filter}
              handleClearFilter={clearFilter}
              setFilter={setFilter}
            />
          </Grid>
          <Grid item xs={12}>
            <ProductBreakDown characteristics={metaData.characteristics} />
          </Grid>
        </Grid>
      ) : (
        "loading..."
      )}
=======
      <Grid container spacing={2}>
        <Grid item xs={6}>
          3.5
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
>>>>>>> master
    </div>
  );
};

export default RatingDisplay;
