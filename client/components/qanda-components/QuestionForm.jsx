import React from "react";
import axios from "axios";

// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { useTheme } from "@material-ui/core/styles";
// import Rating from "@material-ui/lab/Rating";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";

//Receives current product_id from QuestionList as props

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProdName: "",
      question: "",
      nickname: "",
      email: ""
    };

    //bind methods here:
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleChange(event) {
    let placeholder = {};
    placeholder[event.target.name] = event.target.value;
    this.setState({ placeholder });
  }

  //on submit click, will post to axios with obj with all entered data.
  //then reset the state to empty for next question submission.

  //currently not rerendering the page again after post but prob should?
  handleSubmitClick(event) {
    event.preventDefault();
    let newObj = {};
    (newObj.question = this.state.question),
      (newObj.nickname = this.state.nickname),
      (newObj.email = this.state.email);

    axios
      .post(`http://18.223.1.30/qa/${this.props.productId}`, newObj)
      .then(() => {
        let temp = {
          question: "",
          nickname: "",
          email: ""
        };
        this.setState(temp);
      })
      .catch(err => {
        console.log("Err in handleSubmitClick", err);
      });
  }

  componentDidMount(productId) {
    axios
      .get(`http://18.223.1.30/products/${this.props.productId}`)
      .then(data => {
        this.setState({
          currentProdName: data.data.name
        });
      })
      .catch(err => {
        console.log("Error in form componentDidMount", err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Ask Your Question</h1>
          <h2>About the {this.state.currentProdName} Here</h2>
          <form>
            <label>
              Your Question:
              <input
                type="text"
                name="question"
                placeholder="Enter Question Here"
                defaultValue={this.state.question}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Nickname:
              <input
                type="text"
                name="nickname"
                placeholder="Example: jackson11!"
                defaultValue={this.state.nickname}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="text"
                name="nickname"
                placeholder="Why did you like the product or not?"
                defaultValue={this.state.email}
                onChange={this.handleChange}
              />
            </label>
          </form>
          <p>For authentication reasons, you will not be emailed</p>
        </div>
        <button onClick={this.handleSubmitClick}>Submit Question</button>
      </div>
    );
  }
}

export default QuestionForm;
