import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    return (
      <li className="list-group-item">
        
        <label className="custom-control custom checkbox">
            <input type="checkbox" className="custom-control-input" />
            <span className="custom-control-indicator"></span>
            <span className="custom-control-description">{this.props.todo.title}</span>
        </label>
        
      </li>
    );
  }
}

export default TodoItem;
