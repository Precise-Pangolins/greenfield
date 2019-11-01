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
      {Object.keys(filters).length > 0 ? (
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
      ) : null}
      {Object.keys(ratings)
        .reverse()
        .map(rating => {
          return (
            <div className="progress-container">
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
                className="star-progressbar"
                id={`${rating} Stars`}
                max="100"
                value={getPercentage(ratings[rating], total)}
                key={uuid()}
              ></progress>{" "}
              <span>({ratings[rating]})</span>
            </div>
          );
        })}
    </div>
  );
};

export default RatingBars;
