import React, { Component } from 'react';
// import AddPerson from './components/AddPerson/AddPerson';
import Counter from './containers/Counter/Counter';
import './App.css';
//import Person from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
       <Counter />
      </div>
    );
  }
}

export default App;
