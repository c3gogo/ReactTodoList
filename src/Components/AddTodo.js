import React, { Component } from "react";
import uuid from 'uuid';

class AddTodo extends Component {

  constructor() {
    super();
    this.state = {
      newTodo: {}
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.refs.title.value === ''){
      alert('Description is required');
    } else {
      this.setState(
        {
          newTodo: {
            id: uuid.v4(),
            title: this.refs.title.value
          }
        }, function() {
          this.props.addTodo(this.state.newTodo);
        }
      );
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Add Todo</label>
          <input type="text" className="form-control" placeholder="Todo" ref="title"/>
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

export default AddTodo;
