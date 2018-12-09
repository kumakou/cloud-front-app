import React, { Component } from "react";
import CloudAppBar from "./CloudAppBar";
import LoginDialog from "./LoginDialog";

class App extends Component {
  render() {
    return (
      <div>
        <CloudAppBar />
        <LoginDialog />
      </div>
    )
  }
}

export default App;

