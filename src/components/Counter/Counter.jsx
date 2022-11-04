import { Component } from "react";
import { ControlsCounter } from "components/ControlsCounter";
import { Value } from "components/Value";

export class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <Value value={value} />
        <ControlsCounter increment={this.handleIncrement} decrement={this.handleDecrement} />
      </div>
    );
  }
}
