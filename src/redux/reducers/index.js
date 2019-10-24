import counter from "./example.js";
// import multiply from "./example2.js";
import { combineReducers } from "redux";
import questions from "./QAReducers/qReducer";

console.log("questions", questions);

export default combineReducers({ counter, questions });
