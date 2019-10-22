import React from 'react';
import Overview from './components/overview-components/Overview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Overview />
      </div>
    );
  }
}

export default App;
