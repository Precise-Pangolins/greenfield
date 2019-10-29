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
  styles = { data: [] }, // {}
  handleGetProductRequest,
  handleGetStylesRequest,
  handlePostToCartRequest,
  info = {},
  cart = {}
}) {
  let [currentStyleId, setCurrentStyleId] = useState(1);

  useEffect(() => {
    handleGetProductRequest(productId);
    handleGetStylesRequest(productId);
  }, [currentStyleId]);

  const currentStyle = (styles &&
    styles.data &&
    styles.data.find(style => style.style_id === currentStyleId)) || {
      photos: []
    } || { photos: [] };

  const handleStyleChange = id => {
    setCurrentStyleId(id);
  };

  const salePriceHandler = currentStyle => {
    if (currentStyle) {
      if (currentStyle.sale_price > 0) {
        return `
        $${currentStyle.original_price} now on sale for:
        $${currentStyle.sale_price}!`;
      } else {
        return `$${currentStyle.original_price}`;
      }
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            Image Gallery
            {styles.loading ? <div>loading...</div> : null}
            <ImgGallery currentStyle={currentStyle} info={info.info} />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <h1>{info.info ? info.info.name : null}</h1>
            <h2>{currentStyle ? salePriceHandler(currentStyle) : null}</h2>
            <StyleSelector
              currentStyle={currentStyle}
              info={info}
              onHandleStyleChange={handleStyleChange}
              styles={styles}
              currentStyleId={currentStyleId}
            />
            <AddToCartModal
              currentStyle={currentStyle}
              handlePostToCartRequest={handlePostToCartRequest}
              productId={productId}
              info={info.info}
            />
          </Paper>
        </Grid>
        <Grid item xs={false}>
          <Paper className={classes.paper}>
            Product Description
            <Description info={info.info} />
          </Paper>
        </Grid>
        {/* <Grid item xs='auto'></Grid> */}
      </Grid>
    </div>
  );
}

export default Overview;
