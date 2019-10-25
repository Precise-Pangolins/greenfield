import React from "react";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";

const RatingDisplay = ({ productInfo }) => {
  return (
    <div>
      <Grid container spacing={2}>
        {console.log("props in ratingdisplay", productInfo)}
        <Grid item xs={6}>
          3.5
        </Grid>
        <Grid item xs={6}>
          <Rating value={3.25} precision={0.25} readOnly />
        </Grid>
      </Grid>
    </div>
  );
};

export default RatingDisplay;
