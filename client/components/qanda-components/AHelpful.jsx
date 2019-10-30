import React from "react";
import axios from "axios";

//AHelpful receives the current answer in the answer entry,
//from AE component as props.

class AHelpful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulnessNumber: "",
      currentAnswer: "",
      isButtonDisabled: false
    };

    //bind methods here:
  }

  updateAnswerHelpfulness(answer_id) {
    axios
      .put(
        `http://18.223.1.30/qa/answer/${this.state.currentAnswer.id}/helpful`
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
        Helpful?
        <button
          type="submit"
          onClick={() => {
            this.updateAnswerHelpfulness(this.state.helpfulnessNumber);
          }}
          disabled={this.state.isButtonDisabled}
        >
          Yes
        </button>
        <p>({this.state.helpfulnessNumber})</p>
      </div>
    );
  }
}

export default AHelpful;
