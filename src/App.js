import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I am an App</h1>
        <p>This is really working</p>
        <Person name="Javed" age="31"/>
        <Person name="Akram" age="30"> More Info </Person>
        <Person name="Afroz" age="20"/>
      </div>
    );
  }
}

export default App;
