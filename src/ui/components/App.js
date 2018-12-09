import React, { Component } from "react";
import { connect } from "react-redux";
import * as types from "infrastructure/types";
import bindActionCreator from "ui/bindActionCreator";

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={() => bindActionCreator(types.COUNT_UP)}>
          {this.props.count}
        </button>
      </div>
    )
  }
}

export default connect(state => state)(App);

