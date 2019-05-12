import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Create from './Create.js';
import Lists from './Lists.js';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  handleClick = () => {
    console.log("Get it, gurrrrl.")
  };

  render() {
    return (
      <Router> 
      <div className="App">
        <header className="App-header">
          <Link onClick={this.handleClick} to='/create'>
            <div>New List</div>
          </Link>
          <Link onClick={this.handleClick} to='/lists'>
            <div>My Lists</div>
          </Link>
          <Link activeOnlyWhenExact={true} to='/'>
            <div>Home</div>
          </Link>
        </header>
          {/*Render the newly fetched data inside of this.state.data*/}
        <p className="App-intro">{this.state.data}</p>
      </div>
      <Route path="/create" component={Create}/>
      <Route path="/lists" component={Lists}/>
      </Router>
    );
  }
}

export default App;