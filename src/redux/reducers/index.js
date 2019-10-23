import counter from "./example.js";
import multiply from "./example2.js";
import { combineReducers } from "redux";
import getReviewsReducer from "../reducers/ReviewReducers/getReviews.js";

export default combineReducers({ counter, getReviewsReducer });
