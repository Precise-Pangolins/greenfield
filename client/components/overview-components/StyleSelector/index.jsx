import React, { Component } from 'react';

export class StyleSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: ['fall', 'winter', 'summer', 'spring']
    };
  }

  render() {
    return (
      <ul>
        <div>
          {this.state.styles.map(style => {
            return <li>{style}</li>;
          })}
        </div>
      </ul>
    );
  }
}

export default StyleSelector;
