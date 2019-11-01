import React from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { PassThrough } from "stream";

//get prod id from QL (passed all the way down)

class AnswersForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProdName: "",
      body: "",
      name: "",
      email: "",
      photos: "",
      open: false
    };
    //bind methods here:
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleChange(event) {
    console.log("event value in handleChangeAF", event.target.value);
    let placeholder = {};
    placeholder[event.target.name] = event.target.value;
    this.setState(placeholder);
  }

  handleSubmitClick(event) {
    event.preventDefault();
    let newObj = {};
    newObj.body = this.state.body;
    newObj.name = this.state.name;
    newObj.email = this.state.email;

    axios
      .post(
        `http://18.223.1.30/qa/${this.props.question.question_id}/answers`,
        newObj
      )
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
          Add Answer
        </Button>
        <Dialog
          open={this.state.open}
          handleClickOpen={this.handleClickOpen}
          handleClose={this.handleClose}
        >
          <Container maxWidth="md">
            <h1 className="formHeader">Submit Your Answer</h1>
            <h2 className="formSubheader">
              <h2>
                {this.state.currentProdName} :{" "}
                {this.props.question.question_body}
              </h2>
            </h2>
            <div>
              <div>
                <TextField
                  name="body"
                  label="Your Answer"
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
                  placeholder="Example: jack543!"
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
                  placeholder="Example: jack@email.com"
                  fullWidth
                  value={this.state.email}
                  onChange={this.handleChange}
                ></TextField>
              </div>

              <p id="formDisclaimer">
                For authentication reasons, you will not be emailed
              </p>
            </div>
            <div>
              <div class="af-btn-flex-container">
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </div>
              <div>
                <div class="submit-close-btn-flex-container">
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.handleSubmitClick}
                  >
                    Submit
                  </Button>

                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.handleClose}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </Dialog>
      </div>
    );
  }
}

export default AnswersForm;
