import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ImageList from './ImageList.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Axios from 'axios';
import formatDate from '../../../../src/utils/formatDate.js';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  root2: {
    width: '100%',
    maxWidth: 'auto',
    backgroundColor: theme.palette.background.paper
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(1)}px`
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`
  }
}));
const StyledRating = withStyles({
  iconFilled: {
    color: '#000000'
  },
  iconHover: {
    color: '#000000'
  }
})(Rating);

const Review = ({ review }) => {
  const [helpClick, sethelpClick] = useState(false);
  const [showBody, setShowBody] = useState(false);
  const [helpful, setHelpful] = useState(0);

  useEffect(() => {
    if (review.helpfulness) {
      setHelpful(review.helpfulness);
    }
  }, []);

  const classes = useStyles();
  let body1 = '';
  let body2 = '';
  const rec = ' I recommend this product';
  if (review.body.length > 250) {
    body1 = review.body.substring(0, 250);
    body2 = review.body.substring(250);
  }
  return (
    <div className='main-review-container'>
      <div className='reviews-stars-col'>
        <div className='review-star-username-date'>
          <div className='star-rating'>
            <StyledRating
              name='half-rating'
              value={review.rating}
              precision={0.25}
              readOnly
            />
          </div>
          <div></div>
          <div className='username-date'>
            <p>{review.reviewer_name + ' ' + formatDate(review.date)}</p>
          </div>
        </div>
        <div className='review-summary-body'>
          <div>
            <h3>{review.summary}</h3>
          </div>
        </div>

        {body1.length === 0 ? (
          <div className='review-summary-body'>
            <p>{review.body}</p>
          </div>
        ) : showBody ? (
          <div className='review-body'>
            <p>{body1 + body2}</p>
            <div className='show-more-container'>
              <button
                className='showmoreButton'
                onClick={() => {
                  setShowBody(!showBody);
                }}>
                show less
              </button>
            </div>
          </div>
        ) : (
          <div className='review-body'>
            <p>{body1}</p>

            <div className='show-more-container'>
              <button
                className='showmoreButton'
                onClick={() => {
                  setShowBody(!showBody);
                }}>
                show more
              </button>
            </div>
          </div>
        )}

        <div className='review-summary-body'>
          {review.photos.length > 0 ? (
            <ImageList tileData={review.photos} />
          ) : null}
        </div>
        {review.response ? (
          <div className='review-body body-response'>
            <h3>Response from Seller</h3>
            <p>{review.response}</p>
          </div>
        ) : null}
        <div className='review-recommend review-summary-body'>
          {review.recommend ? (
            <p>
              {' '}
              <CheckIcon /> I recommend this product
            </p>
          ) : null}
        </div>
        <div className='review-summary-body'>
          <p>
            Was this review helpful?
            {helpClick ? (
              `\sYes(${helpful})`
            ) : (
              <a
                style={{ textDecoration: 'none' }}
                href=''
                onClick={event => {
                  event.preventDefault();
                  setHelpful(helpful + 1);
                  Axios.put(
                    `http://18.223.1.30/reviews/helpful/${review.review_id}`
                  ).then(() => {
                    sethelpClick(true);
                  });
                }}>
                Yes({review.helpfulness})
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
