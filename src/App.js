import React, { Component } from 'react';
import AddTodo from './Components/AddTodo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-3">Todo List</h1>
          </div>
          <AddTodo />
        </div>
      </div>
    );
  }
}

export default App;
