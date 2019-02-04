import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h2>Hi, My Name is Andrew Peliza</h2>
        <a className="App-link" href="http://ng-personal-deployment.s3-website.eu-west-2.amazonaws.com/home">Personal Website </a><br/>
        <a className="App-link" href="https://github.com/ElAndy94">GitHub <i className="fab fa-github"></i></a>
      </div>
    );
  }
}

export default App;
