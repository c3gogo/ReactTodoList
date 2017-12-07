import React, { Component } from "react";
import uuid from 'uuid';

import AddTodo from "./Components/AddTodo";
import Todos from "./Components/Todos";
import "./App.css";

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  getTodos() {
    this.setState({
      todos:  [
        {
          id: uuid.v4(),
          title: "Test my todo list"
        },

        {
          id: uuid.v4(),
          title: "Test my todo list"
        },
        
        {
          id: uuid.v4(),
          title: "Test my todo list"
        },

      ]
    });
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-3">Todo List</h1>
          </div>
          <AddTodo />
          <Todos />
        </div>
      </div>
    );
  }
}

export default App;
