// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

  handleClick = (event) => {
    //const target = event.target;
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delayed</button>
    );
  }
}

export default DelayedButton;
