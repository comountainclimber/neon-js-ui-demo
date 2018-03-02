import React, { Component } from "react";
import logo from "./NEO-logo.svg";
import SearchBar from "./components/SearchBar";
import "./App.css";

import { isWallet } from "./services/neo-service";

class App extends Component {
  state = {
    inputValue: ""
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">neon-js react scaffold</h1>
        </header>
        <div style={{ width: 500, margin: "auto", marginTop: 20 }}>
          <SearchBar
            handleUpdateInputValue={inputValue => this.setState({ inputValue })}
            handleSubmit={address => {
              isWallet(address);
            }}
            placeholder="Is this a wallet address?"
          />
        </div>
      </div>
    );
  }
}

export default App;
