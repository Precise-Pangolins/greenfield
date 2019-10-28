import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import uuid from "uuidv4";

const RatingBars = ({
  total,
  ratings,
  handleClick,
  filters,
  setFilters,
  handleClearFilter
}) => {
  const getPercentage = (numerator, denominator) => {
    let rating = Math.floor(100 * (numerator / denominator));

    return rating;
  };
  return (
    <div className="ratingBars">
      <Grid container>
        {Object.keys(filters).length > 0 ? (
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
                    value={rating}
                    key={uuid()}
                    onClick={event => {
                      event.preventDefault();
                      if (filters[rating] === undefined) {
                        setFilters({ ...filters, [rating]: true });
                      } else {
                        delete filters[rating];
                        setFilters({ ...filters });
                      }
                    }}
                  >{`${rating} stars `}</a>
                </label>

                <progress
                  id={`${rating} Stars`}
                  max="100"
                  value={getPercentage(ratings[rating], total)}
                  key={uuid()}
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
