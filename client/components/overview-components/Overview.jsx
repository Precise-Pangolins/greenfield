import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ImagesContainer from '../../../src/redux/containers/OverviewContainers/getStyles.js';
import DescriptionContainer from '../../../src/redux/containers/OverviewContainers/getList.js';
import InfoContainer from '../../../src/redux/containers/OverviewContainers/getInfo.js';
import ThumbnailsContainer from '../../../src/redux/containers/OverviewContainers/getThumbnails.js';
import AddToCartModal from '../overview-components/AddToCart';

import StyleSelector from './StyleSelector';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

function Overview() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Image Gallery
            <ImagesContainer />
            Styles
            <ThumbnailsContainer />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Product Description
            <DescriptionContainer />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Style Selector <StyleSelector />
            Features
            <InfoContainer />
            <AddToCartModal />
          </Paper>
        </Grid>
        {/* <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <AddToCartModal />
          </Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default Overview;
