import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Review = ({ review }) => {
  console.log(review);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid style={{ borderBottom: "black solid 1px" }} item xs={12}>
          <Grid item xs={12}>
            rating: {review.rating}
            date: {review.date}
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={12}>
            <h3>{review.summary}</h3>
          </Grid>
          <Grid item xs={12}>
            <p>{review.body}</p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Review;
