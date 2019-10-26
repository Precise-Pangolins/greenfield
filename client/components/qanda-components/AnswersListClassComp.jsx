import React from "react";
import { throwStatement } from "@babel/types";
import AnswerEntry from "./AnswerEntry.jsx";
import axios from "axios";

class AnswersListClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    };
    this.getAnswersForQ = this.getAnswersForQ.bind(this);
  }

  getAnswersForQ(question_id) {
    axios
      .get(`http://18.223.1.30/qa/${this.props.question.question_id}/answers`)
      .then(data => {
        this.setState({ answers: data.data.results });
        console.log("current asnwers in state", this.state.answers);
      });
  }

  componentDidMount() {
    this.getAnswersForQ();
  }

  render() {
    return (
      <div>

        {this.state.answers.map(answer => {
          return <AnswerEntry answer={answer} />;
        })}
      </div>
    );
  }
}

export default AnswersListClassComp;
