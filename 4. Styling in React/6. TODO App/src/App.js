import "./styles.css";
import React, { Component, useState } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  // add constructor and state here
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 123456781, text: "Do the laundry" },
        { id: 123456782, text: "Iron the clothes" },
        { id: 123456783, text: "Go for a walk" },
      ],
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  // create handleAdd and handleRemove functions here
  handleAdd(e) {
    const newTodo = {
      id: Date.now(),
      text: e,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  }
  handleRemove(index) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== index),
    }));
  }

  render() {
    {
      return (
        <div className="App">
          <span>Todo</span>
          <Form add={this.handleAdd} />
          <List remove={this.handleRemove} todos={this.state.todos} />
        </div>
      );
    }
  }
}
