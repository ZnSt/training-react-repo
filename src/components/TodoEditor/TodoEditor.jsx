import { Component } from "react";
import "./TodoEditor.css";

export class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleChange = (event) => {
    this.setState({ message: event.currentTarget.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.message);
    this.reset();
  };

  reset = () => {
    this.setState({ message: "" });
  };

  render() {
    const { message } = this.state;
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <textarea
          value={message}
          onChange={this.handleChange}
          className="TodoEditor__textarea"
        ></textarea>
        <button type="submit" className="TodoEditor__button">
          Добавить
        </button>
      </form>
    );
  }
}
