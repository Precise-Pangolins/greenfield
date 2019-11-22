import React from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
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
      .put(
        `http://3.134.102.30/qa/answer/${this.state.currentAnswer.id}/report`
      )
      .then(() => {})
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
        <Typography style={{ display: "inline-block" }}>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            onClick={() => {
              this.reportAnswer(this.state.currentAnswer.id);
              this.setState({ buttonText: "Reported" });
            }}
            disabled={this.state.isButtonDisabled}
          >
            {this.state.buttonText}
          </Button>
        </Typography>
      </div>
    );
  }
}

export default Reported;
