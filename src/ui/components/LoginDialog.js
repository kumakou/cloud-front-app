import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import GoogleLogin from 'react-google-login';

import bindActionCreator from "ui/bindActionCreator";
import * as types from "infrastructure/types";

class LoginDialog extends Component {
  render() {
    const GoogleLoginButton = () =>
      <GoogleLogin
        clientId="43129496828-phu8d39r2getad88q3mftifiu90r634n.apps.googleusercontent.com"
        buttonText="Googleでログイン"
        onSuccess={info => bindActionCreator(types.BEGIN_LOGIN_FETCH, {info})}
        onFailure={() => console.error("ログインに失敗しました")}
      />;

    return (
      <Dialog
        open={this.props.login.info === null}
        onClose={() => {}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">ログイン</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            はじめにログインが必要です
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {
            this.props.login.fetching
              ? <p>ログイン中です...</p>
              : <GoogleLoginButton />
          }
        </DialogActions>
      </Dialog>
    );
  }
}

export default connect(state => state)(LoginDialog);

