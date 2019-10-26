import React from "react";
import Grid from "@material-ui/core/Grid";

const RatingBars = ({
  total,
  ratings,
  handleClick,
  filter,
  setFilter,
  handleClearFilter
}) => {
  const getPercentage = (numerator, denominator) => {
    let rating = Math.floor(100 * (numerator / denominator));

    return rating;
  };
  return (
    <div className="ratingBars">
      <Grid container>
        {filter ? (
          <Grid item xs={12}>
            filterApplied
            <a
              href=""
              style={{ textDecoration: "none" }}
              onClick={event => {
                event.preventDefault();

                handleClearFilter();
              }}
            >
              (clear filter)
            </a>
          </Grid>
        ) : null}
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
                      setFilter(true);
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
