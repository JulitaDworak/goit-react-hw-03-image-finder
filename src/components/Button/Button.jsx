import React, { Component } from "react";


class ButtonShow extends Component {
  render() {
    return (
      <div class="forBtn">

        <button onClick={this.props.onClick}>Load More</button>

      </div>
    );
  }
}

export default ButtonShow;
