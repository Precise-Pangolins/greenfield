import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";

const RatingDisplay = ({ productInfo, handleGetRatingsRequest, metaData }) => {
  console.log("info", productInfo.id);
  console.log("data", metaData);
  const getAverage = ratings => {
    const size = Object.keys(ratings).length;
    let total = 0;
    for (let rating in ratings) {
      total += ratings[rating];
    }
    return total / size;
  };

  useEffect(() => {
    productInfo ? handleGetRatingsRequest(1) : null;
  }, []);

  return (
    <div>
      {metaData.ratings ? (
        <Grid container spacing={2}>
          {console.log("props in ratingdisplay", productInfo)}
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
        </Grid>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default RatingDisplay;
