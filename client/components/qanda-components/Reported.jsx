import React from "react";
import axios from "axios";
import queryString from "querystring";

let productId = queryString.parse(location.search)["?productId"] || 1;

//receives current Answer from AE component and
//current Question from QE

class Reported extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAnswer: "",
      reported: "",
      isButtonDisabled: false,
      buttonText: "Report"
    };
    //bind method here:
    this.reportAnswer = this.reportAnswer.bind(this);
  }

  reportAnswer(answer_id) {
    axios
      .put(`http://18.223.1.30/qa/answer/${this.state.currentAnswer.id}/report`)
      .then(() => {
        console.log("succesfully reported answer");
      })
      .catch(err => {
        console.log("err in put request", err);
      });
  }

  componentDidMount() {
    this.setState({
      currentAnswer: this.props.answer
    });
  }

  render() {
    return (
      <div>
        <button
          type="submit"
          onClick={() => {
            this.reportAnswer(this.state.currentAnswer.id);
            this.setState({ buttonText: "Reported" });
          }}
          disabled={this.state.isButtonDisabled}
        >
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}

export default Reported;
