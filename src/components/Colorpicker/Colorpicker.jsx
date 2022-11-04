import { Component } from "react";
import "./Colorpicker.css";
import colors from "../../data/color";

export class Colorpicker extends Component {
  state = {
    activeOptionIndex: 0,
  };

  makeOptionClassName = (index) => {
    const optionClasses = ["ColorPicker__option"];
    if (index === this.state.activeOptionIndex) {
      optionClasses.push("ColorPicker__option--active");
    }

    return optionClasses.join(" ");
  };

  setActiveIndex = (index) => {
    this.setState({ activeOptionIndex: index });
  };
  render() {
    const { activeOptionIndex } = this.state;
    const activeOption = colors[activeOptionIndex];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {activeOption.label}</p>
        <div>
          {colors.map(({ label, color }, index) => (
            <button
              onClick={() => this.setActiveIndex(index)}
              className={this.makeOptionClassName(index)}
              key={label}
              style={{ backgroundColor: color }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
