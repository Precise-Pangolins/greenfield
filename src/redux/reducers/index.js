import counter from "./example.js";
// import multiply from "./example2.js";
import { combineReducers } from "redux";
import questions from "./QAReducers/qReducer";
import reviews from "../reducers/ReviewReducers/getReviews.js";
import answers from "../reducers/QAReducers/aReducer";

export default combineReducers({ counter, questions, reviews, answers });
