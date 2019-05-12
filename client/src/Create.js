import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Create extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div>My New List</div>
        </header>
      </div>
    );
  }
}

export default Create;