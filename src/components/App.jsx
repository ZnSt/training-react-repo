import { Component } from "react";
import { Counter } from "./Counter";
import { Dropdown } from "./Dropdown/";
import { Colorpicker } from "./Colorpicker";
import { TodoList } from "./TodoList/";
import todos from "../data/todos";
export class App extends Component {
  state = {
    todos: todos,
  };

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };
  render() {
    const { todos } = this.state;
    return (
      <>
        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <Colorpicker /> */}
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
