import React from "react";
import Grid from "@material-ui/core/Grid";

const RatingBars = ({ total, ratings, handleClick }) => {
  const getPercentage = (numerator, denominator) => {
    let rating = Math.floor(100 * (numerator / denominator));

    return rating;
  };
  return (
    <div className="ratingBars">
      <Grid container>
        {Object.keys(ratings)
          .reverse()
          .map(rating => {
            return (
              <Grid item xs={12}>
                <label htmlFor={`${rating} Stars`}>
                  <a
                    href=""
                    style={{ textDecoration: "underline" }}
                    onClick={event => {
                      event.preventDefault();
                      handleClick(1, rating);
                    }}
                  >{`${rating} stars `}</a>
                </label>

                <progress
                  id={`${rating} Stars`}
                  max="100"
                  value={getPercentage(ratings[rating], total)}
                  key={`${rating} Stars`}
                ></progress>
              </Grid>
            );
          })}
        <Grid item xs={12}></Grid>
      </Grid>
    </div>
  );
};

export default RatingBars;
