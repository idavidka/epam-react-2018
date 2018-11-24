import React, { Component } from 'react';

class TitleComponent extends Component {
  render() {
    return (
      <h1 class={this.props.className}>
          {this.props.children}
      </h1>
    );
  }
}

export default TitleComponent;
