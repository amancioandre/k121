import React, { Component } from 'react';
import './App.css';

/* Components and Containers */
import Secret from "./Containers/Secret/Secret";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Secret />
      </div>
    );
  }
}

export default App;
