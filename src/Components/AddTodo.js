import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label>Add Todo</label>
          <input type="text" className="form-control" placeholder="Todo" />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

export default AddTodo;
