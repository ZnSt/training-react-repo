import { Component } from "react";
import shortid from "shortid";
import todos from "../data/todos";

import { Counter } from "./Counter";
import { Dropdown } from "./Dropdown/";
import { Colorpicker } from "./Colorpicker";
import { TodoList } from "./TodoList/";
import { TodoEditor } from "./TodoEditor";
import { Filter } from "./Filter";
import { Form } from "./Form";
export class App extends Component {
  state = {
    todos: [],
    filter: "",
  };

  onFilterChange = (event) => {
    this.setState({ filter: event.currentTarget.value });
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

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normilizedFilter = filter.toLowerCase();
    return todos.filter((todo) => todo.text.toLowerCase().includes(normilizedFilter));
  };

  componentDidMount() {
    const todos = localStorage.getItem("todos");
    const parsed = JSON.parse(todos);
    if (parsed) {
      this.setState({ todos: parsed });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }
  render() {
    const { filter } = this.state;
    const visibleTodos = this.getVisibleTodos();
    return (
      <>
        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <Colorpicker /> */}
        <TodoEditor onSubmit={this.addTodo} />
        <Filter filter={filter} onFilterChange={this.onFilterChange} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        {/* <Form onSubmit={this.formSubmitHandler} /> */}
      </>
    );
  }
}
