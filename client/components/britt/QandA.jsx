import React from "react";
import axios from "axios";

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [], //an array of all the questions per product
      answers: []
    };

    //bind methods here:
    this.getCurrentProductQs = this.getCurrentProductQs.bind(this);
    this.getAllAnswers = this.getAllAnswers.bind(this);
  }

  getCurrentProductQs(productId) {
    axios.get(`http://18.223.1.30/qa/:${productId}`).then(response => {
      this.setState({ results: response.results });
    });
  }

  getAllAnswers(questionId) {
    axios.get(`http://18.223.1.30/qa/:${questionId}/answers`).then(response => {
      this.setState({ answers: response.results });
    });
  }

  //on mount, make request for the question and answer list for the given product
  componentDidMount() {
    this.getCurrentProductQs();
    this.getAllAnswers();
  }

  render() {
    return (
      <div>
        Questions & Answers
        {/* <SearchBar />
        <QuestionEntry />
        <AnswerEntry /> */}
      </div>
    );
  }
}

export default QandA;
