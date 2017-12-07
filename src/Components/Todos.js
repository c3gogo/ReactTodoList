import React, { Component } from "react";
import TodoItem from './TodoItem';

class Todos extends Component {

  render() {
    let todoItems;
    if(this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return <TodoItem key={todo.title} todo={todo}/>
      })
    }
    return <ul className="list-group">{todoItems}</ul>;
  }
}

export default Todos;
