import React from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

class AHelpful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulnessNumber: "",
      currentAnswer: "",
      isButtonDisabled: false
    };

    this.updateAnswerHelpfulness = this.updateAnswerHelpfulness.bind(this);
  }

  //after successful put request to update the answer's helpfulness,
  //setState to increment the helpfulness by 1 and disable further button clicks
  updateAnswerHelpfulness(answer_id) {
    axios
      .put(
        `http://3.134.102.30/qa/answer/${this.state.currentAnswer.id}/helpful`
      )
      .then(() => {
        this.setState({ helpfulnessNumber: this.state.helpfulnessNumber + 1 });
      })
      .then(() => {
        this.setState({ isButtonDisabled: true });
      })
      .catch(err => {
        console.log("Err in updating answer helpfulness");
      });
  }

  componentDidMount() {
    this.setState({
      currentAnswer: this.props.answer,
      helpfulnessNumber: this.props.answer.helpfulness
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
          Helpful?
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          className="helpful-button"
          type="submit"
          onClick={() => {
            this.updateAnswerHelpfulness(this.state.helpfulnessNumber);
          }}
          disabled={this.state.isButtonDisabled}
        >
          <Typography variant="body2">Yes</Typography>
        </Button>
        <div class="helpfulNum">({this.state.helpfulnessNumber})</div>
      </div>
    );
  }
}

export default AHelpful;
