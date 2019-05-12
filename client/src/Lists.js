import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Lists extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div>Existing Lists</div>
        </header>
      </div>
    );
  }
}

export default Lists;