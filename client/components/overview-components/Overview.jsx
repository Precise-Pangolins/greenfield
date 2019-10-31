import React, { Component, useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import queryString from 'querystring';

import Description from './ProductDescription';
import Features from './Features';
import AddToCartModal from '../overview-components/AddToCart';
import StyleSelector from './StyleSelector';
import ImgGallery from './ImgGallery/index.jsx';
import StarRatingsContainer from '../../../src/redux/containers/RatingContainers/StarRatingsContainer.js';

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
  styles = {
    data: []
  },
  handleGetProductRequest,
  handleGetStylesRequest,
  handlePostToCartRequest,
  info = {},
  cart = {},
  metaData = {}
}) {
  let [currentStyleId, setCurrentStyleId] = useState(null);

  const currentStyle = (styles &&
    styles.data &&
    styles.data.find(style => style.style_id === currentStyleId)) || {
      photos: []
    } || { photos: [], original_price: 'pending...' };

  useEffect(() => {
    handleGetProductRequest(productId);
    handleGetStylesRequest(productId);
  }, [currentStyleId]);

  const handleStyleChange = id => {
    setCurrentStyleId(id);
    console.log({ currentStyle });
  };

  const salePriceHandler = currentStyle => {
    if (currentStyle) {
      if (currentStyle.sale_price > 0) {
        return (
          <>
            <div className='sale'>${currentStyle.original_price}</div>
            <div>Now On Sale For: ${currentStyle.sale_price}!</div>
          </>
        );
      } else {
        return `$${currentStyle.original_price}`;
      }
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction='row'>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            {styles.loading ? <div>loading...</div> : null}
            <ImgGallery
              currentStyle={currentStyle}
              info={info.info}
              images={styles.data}
            />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <h1>{info.info ? info.info.name : null}</h1>
            <h2>
              {currentStyle.original_price
                ? salePriceHandler(currentStyle)
                : null}
            </h2>
            <h3>
              {currentStyle.name
                ? `style: ${currentStyle.name}`
                : 'please select a style below for details: '}
            </h3>
            <StyleSelector
              metaData={metaData}
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
          <Grid item xs={false}>
            <Paper className={classes.paper}>
              Product Description
              <Description info={info.info} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Overview;
