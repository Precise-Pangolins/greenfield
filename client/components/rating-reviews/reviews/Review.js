import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ImageList from "./ImageList.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  root2: {
    width: "100%",
    maxWidth: "auto",
    backgroundColor: theme.palette.background.paper
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`
  }
}));

const Review = ({ review }) => {
  console.log(review);
  const classes = useStyles();
  return (
    <List className={classes.root2}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              component="span"
              variant="subtitle2"
              className={classes.inline}
              color="textPrimary"
            >
              {review.reviewer_name}
            </Typography>
          }
        />
      </ListItem>
      <ListItem>
        <Rating name="half-rating" value={review.rating} precision={0.25} />
        <Typography
          component="span"
          variant="subtitle1"
          className={classes.inline}
          color="textPrimary"
        >
          {review.summary}
        </Typography>
      </ListItem>
      <ListItem>
        <Typography
          component="span"
          variant="caption"
          className={classes.inline}
          color="textPrimary"
        >
          {review.date}
        </Typography>
      </ListItem>
      {review.recommend ? (
        <ListItem>
          <Typography
            component="span"
            variant="subtitle2"
            className={classes.inline}
            color="textPrimary"
          >
            I reccomend this product
          </Typography>
        </ListItem>
      ) : null}
      <ListItem>
        <Typography
          component="span"
          variant="body1"
          className={classes.inline}
          color="textPrimary"
        >
          {review.body}
        </Typography>
      </ListItem>
      <ListItem>
        <ImageList tileData={review.photos} />
      </ListItem>
      <ListItem>
        <Typography
          component="span"
          variant="overline"
          className={classes.inline}
          color="textPrimary"
        >
          Was this helpful?
        </Typography>
      </ListItem>
      <Divider light />
    </List>
    // <div className={classes.root}>
    //   <Grid container spacing={3}>
    //     <Grid style={{ borderBottom: "black solid 1px" }} item xs={12}>
    //       <Grid item xs={12}>
    //         <h4>{review.reviewer_name}</h4>
    //         {review.recommend ? <p>I recommend this product!</p> : null}
    //       </Grid>
    //       <Grid item xs={12}>
    //         rating: {review.rating}
    //         date: {review.date}
    //       </Grid>
    //       <Grid item xs={6}></Grid>
    //       <Grid item xs={12}>
    //         <h3>{review.summary}</h3>
    //       </Grid>
    //       <Grid item xs={12}>
    //         <p>{review.body}</p>
    //       </Grid>
    //       <Grid item xs={12}>
    //         <ImageList tileData={review.photos} />
    //       </Grid>
    //       <Grid container spacing={2}>
    //         <Grid item xs={6}>
    //           <p>Was this helpful? Yes No</p>
    //           <p>Helpfullness({review.helpfulness})</p>
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </div>
  );
};

export default Review;
