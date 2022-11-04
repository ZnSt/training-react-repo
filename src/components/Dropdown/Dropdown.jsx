import { Component } from "react";

export class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };
  render() {
    const { visible } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggle}>
          {visible ? "Скрыть" : " Показать"}
        </button>

        {visible && <div>Выпадающее окно</div>}
      </div>
    );
  }
}
