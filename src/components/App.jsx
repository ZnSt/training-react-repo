import { Component } from "react";
import shortid from "shortid";
import todos from "../data/todos";

import { Counter } from "./Counter";
import { Dropdown } from "./Dropdown/";
import { Colorpicker } from "./Colorpicker";
import { TodoList } from "./TodoList/";
import { TodoEditor } from "./TodoEditor";
import { Form } from "./Form";
export class App extends Component {
  state = {
    todos: todos,
  };

  addTodo = (text) => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  toggleCompleted = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todos,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };
  render() {
    return (
      <>
        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <Colorpicker /> */}
        <TodoEditor onSubmit={this.addTodo} />
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        {/* <Form onSubmit={this.formSubmitHandler} /> */}
      </>
    );
  }
}
