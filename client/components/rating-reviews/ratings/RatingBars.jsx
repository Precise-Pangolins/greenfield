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
  let filters = {};

  const getPercentage = (numerator, denominator) => {
    let rating = Math.floor(100 * (numerator / denominator));

    return rating;
  };
  return (
    <div className="ratingBars">
      <Grid container>
        {filter ? (
          <Grid item xs={12}>
            <a
              href=""
              style={{ textDecoration: "none" }}
              onClick={event => {
                event.preventDefault();

                handleClearFilter();
              }}
            >
              (clear filters)
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
                    onClick={event => {
                      event.preventDefault();
                      if (filters[rating]) {
                        delete filters[rating];
                        console.log("rating exists delting");
                        console.log(filters);
                      } else {
                        filters[rating] = true;
                        console.log("no rating exists", filters);
                        setFilter(true);
                      }
                      if (Object.keys(filters).length <= 0) {
                        handleClearFilter();
                      } else {
                        handleClick(1, filters);
                      }
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
