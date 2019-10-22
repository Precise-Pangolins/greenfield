import React from "react";
import QandA from "./components/britt/QandA.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        Hello
        <QandA />
      </div>
    );
  }
}

export default App;
