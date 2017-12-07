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
          title: "Test my todo list 1"
        },

        {
          id: uuid.v4(),
          title: "Test my todo list 2"
        },

      ]
    });
  }

  componentWillMount() {
    this.getTodos();
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-3">Todo List</h1>
          </div>
          <AddTodo />
          <br />
          <Todos todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
