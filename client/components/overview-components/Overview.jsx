import React, { Component, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import queryString from 'querystring';

import Description from './ProductDescription';
import Features from './Features';

import AddToCartModal from '../overview-components/AddToCart';

import StyleSelector from './StyleSelector';
import ImgGallery from './ImgGallery/index.jsx';

let productId = queryString.parse(location.search)['?productId'] || 1;

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

function Overview({
  styles = { styles: [] },
  handleGetProductRequest,
  handleGetStylesRequest,
  info = {}
}) {
  const [currentStyle, setCurrentStyle] = useState({ style_id: 1 });
  useEffect(() => {
    handleGetProductRequest(productId);
    handleGetStylesRequest(productId);
  }, []);

  const onStyleChange = newStyle => {
    setCurrentStyle(newStyle);
  };
  // here we need selectedProd, selectedStyle, selectedImage
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            Image Gallery
            <ImgGallery
              styleId={currentStyle.style_id}
              onStyleChange={onStyleChange}
              styles={styles.styles}
            />
            Styles
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Product Description
            <Description info={info.info} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            Style Selector <StyleSelector />
            Features
            {/* <Features /> */}
            <AddToCartModal currentStyle={currentStyle} />
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
