import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Reviews from "./reviews/Reviews.js";
import Ratings from "./ratings/RatingDisplay";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const RatingsReviews = ({
  handleGetReviewsRequest,
  handleSortReviewsRequest,
  handleGetRatingsRequest,
  handleFilterReviewsRequest,
  handleClearFilterRequest,
  metaData,
  productInfo,
  reviews
}) => {
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("relevant");
  const [filters, setFilters] = useState({});

  const filterByStar = filters => {
    handleFilterReviewsRequest(7, filters, sort);
  };
  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      filterByStar(filters);
    } else {
      handleSortReviewsRequest(7, 1, 2, sort);
    }
  }, [filters, sort]);

  useEffect(() => {
    handleGetRatingsRequest(7);
  }, []);

  const getTotal = ratings => {
    let total = 0;
    for (let rating in ratings) {
      total += ratings[rating];
    }
    return total;
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Ratings and Reviews</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Ratings
              productInfo={productInfo}
              handleGetRatingsRequest={handleGetRatingsRequest}
              metaData={metaData}
              filters={filters}
              setFilters={setFilters}
              handleFilterRatingsRequest={filterByStar}
              handleClearFilterRequest={handleClearFilterRequest}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>
            <Reviews
              reviews={reviews}
              handleGetReviewsRequest={handleGetReviewsRequest}
              handleSortReviewsRequest={handleSortReviewsRequest}
              handleSortAndFilter={filterByStar}
              metaData={metaData}
              page={page}
              setPage={setPage}
              sort={sort}
              setSort={setSort}
              filters={filters}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default RatingsReviews;
