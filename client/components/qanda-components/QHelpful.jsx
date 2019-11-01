import React from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

//QHelpful receives the current question in the question entry,
//from QE component as props.

class QHelpful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulnessNumber: "",
      currentQuestion: "",
      isButtonDisabled: false
    };

    this.updateHelpfulness = this.updateHelpfulness.bind(this);
  }

  //need to get specific Q id for each questions
  updateHelpfulness(question_id) {
    axios
      .put(
        `http://18.223.1.30/qa/question/${this.state.currentQuestion.question_id}/helpful`
      )
      .then(() => {
        this.setState({ helpfulnessNumber: this.state.helpfulnessNumber + 1 });
      })
      .then(() => {
        this.setState({ isButtonDisabled: true });
      })
      .catch(err => {
        console.log("Err in updating question helpfulness");
      });
  }

  componentDidMount() {
    this.setState({
      currentQuestion: this.props.question,
      helpfulnessNumber: this.props.question.question_helpfulness
    });
  }

  render() {
    return (
      <div>
        <Typography
          className="helpful-spacing"
          style={{ display: "inline-block" }}
          variant="body2"
        >
          Helpful?{" "}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          className="submitQbutton"
          type="submit"
          onClick={() => {
            this.updateHelpfulness(this.state.helpfulnessNumber);
          }}
          disabled={this.state.isButtonDisabled}
        >
          <Typography style={{ display: "inline-block" }} variant="body2">
            Yes
          </Typography>
        </Button>{" "}
        <Typography style={{ display: "inline-block" }} variant="body2">
          ({this.state.helpfulnessNumber})
        </Typography>
      </div>
    );
  }
}

export default QHelpful;
