import React from "react";
import Grid from "@material-ui/core/Grid";

const RatingDisplay = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          3.5
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
};

export default RatingDisplay;
