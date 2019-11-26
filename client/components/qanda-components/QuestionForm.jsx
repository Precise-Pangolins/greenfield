import React from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";

//Receives current product_id from QuestionList as props

class QuestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProdName: "",
      body: "",
      name: "",
      email: "",
      open: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleChange(event) {
    console.log("event value in handleChange", event.target.value);
    let placeholder = {};
    placeholder[event.target.name] = event.target.value;
    this.setState(placeholder);
  }

  //on submit click, will post to axios with obj with all entered data.
  //then reset the state to empty for next question submission.
  handleSubmitClick(event) {
    event.preventDefault();
    let newObj = {};
    newObj.body = this.state.body;
    newObj.name = this.state.name;
    newObj.email = this.state.email;

    axios
      .post(`http://18.223.1.30/qa/${this.props.productId}`, newObj)
      .then(() => {
        let temp = {
          body: "",
          name: "",
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
      <div className="form">
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Add A Question
        </Button>
        <Dialog
          open={this.state.open}
          handleClickOpen={this.handleClickOpen}
          handleClose={this.handleClose}
        >
          <Container maxWidth="md">
            <h1 className="formHeader">Ask Your Question</h1>

            <h2 className="formSubheader">
              About the {this.state.currentProdName}
            </h2>
            <div>
              <div>
                <TextField
                  name="body"
                  label="Your Question"
                  margin="normal"
                  fullWidth
                  value={this.state.body}
                  onChange={this.handleChange}
                ></TextField>
              </div>
              <div>
                <TextField
                  name="name"
                  label="Name"
                  margin="normal"
                  fullWidth
                  value={this.state.name}
                  onChange={this.handleChange}
                ></TextField>
              </div>
              <div>
                <TextField
                  name="email"
                  label="Email"
                  margin="normal"
                  fullWidth
                  value={this.state.email}
                  onChange={this.handleChange}
                ></TextField>
              </div>
              <p id="formDisclaimer">
                For authentication reasons, you will not be emailed
              </p>
            </div>
            <div className="submit-close-btn-flex-container">
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleSubmitClick}
              >
                Submit Question
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.handleClose}
              >
                Close
              </Button>
            </div>
          </Container>
        </Dialog>
      </div>
    );
  }
}

export default QuestionForm;
