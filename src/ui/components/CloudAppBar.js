import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ConfirmDialog from "./ConfirmDialog";

import * as types from "infrastructure/types";
import bindActionCreator from "ui/bindActionCreator";

const UserInfo = props =>
  <span
    className="user_info"
  >
    @ { props.loginInfo.profileObj.email.replace(/@.*/, "") }
  </span>;

const LogoutButton = props =>
  <Button
    className="logout_button"
    color="inherit"
    onClick={() => props.onClick()}
  >
    ログアウト
  </Button>;

const LogoutConfirmDialog = props =>
  <ConfirmDialog
    title="ログアウトしますか？"
    content=""
    is_open={props.is_open}
    onClose={val => props.onClose(val)}
  />

class CloudAppBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      confirm_is_open: false,
    };
  }

  openConfirm(){
    this.setState({
      confirm_is_open: true,
    });
  }

  onClose(val){
    if(val)bindActionCreator(types.LOGOUT);

    this.setState({
      confirm_is_open: false,
    });
  }

  render(){
    return (
      <div className="app_bar">
        <AppBar position="static">
          <Toolbar className="container">
            <Typography className="title" variant="h6" color="inherit">
              cloud fun
            </Typography>
            {
              this.props.login.info !== null
                ? <UserInfo
                    loginInfo={this.props.login.info}
                  />
                : null
            }
            {
              this.props.login.info !== null
                ? <LogoutButton onClick={() => this.openConfirm()}/>
                : null
            }
            <LogoutConfirmDialog
              is_open={this.state.confirm_is_open}
              onClose={val => this.onClose(val)}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};


export default connect(state => state)(CloudAppBar);

