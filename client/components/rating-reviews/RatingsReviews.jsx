
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Reviews from "./reviews/Reviews.js";
import Ratings from "./ratings/RatingDisplay";
import queryString from "querystring";

let productId = queryString.parse(location.search)["?productId"] || 1;


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "0, auto",
    paddingLeft: "20%",
    paddingRight: "20%"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
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
  const [sort, setSort] = useState('relevant');
  const [filters, setFilters] = useState({});

  const filterByStar = filters => {
    handleFilterReviewsRequest(productId, filters, sort);
  };
  useEffect(() => {
    if (Object.keys(filters).length > 0) {
      filterByStar(filters);
    } else {
      handleSortReviewsRequest(productId, 1, 2, sort);
    }
  }, [filters, sort]);

  useEffect(() => {
    handleGetRatingsRequest(productId);
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
    <div className={classes.root} id='ratings-reviews'>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <h2>Ratings and Reviews</h2>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Ratings
            productInfo={productInfo}
            handleGetRatingsRequest={handleGetRatingsRequest}
            metaData={metaData}
            filters={filters}
            setFilters={setFilters}
            handleFilterRatingsRequest={filterByStar}
            handleClearFilterRequest={handleClearFilterRequest}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default RatingsReviews;
