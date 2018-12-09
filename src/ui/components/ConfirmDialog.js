import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class ConfirmDialog extends Component {
  onClose(val){
    this.props.onClose(val ? true : false);
  }

  render() {
    return (
      <Dialog
        open={this.props.is_open}
        onClose={() => this.onClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{ this.props.title }</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            { this.props.content }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => this.onClose(false)} color="default" autoFocus>
            No
          </Button>
          <Button onClick={() => this.onClose(true)} color="default">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ConfirmDialog;

