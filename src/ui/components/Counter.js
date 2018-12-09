import React, { Component } from "react";
import { connect } from "react-redux";
import * as types from "infrastructure/types";
import bindActionCreator from "ui/bindActionCreator";

import Button from '@material-ui/core/Button';

class Counter extends Component {
  render() {
    return (
      <div>
        <Button
          variant="contained"
          onClick={() => bindActionCreator(types.COUNT_UP)}
        >
          { this.props.count }
        </Button>
      </div>
    )
  }
}

export default connect(state => state)(Counter);

