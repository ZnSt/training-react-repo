import { Component } from "react";

export class Form extends Component {
  state = {
    name: "",
    tag: "",
    experience: "junior",
    licence: false,
  };

  handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", tag: "" });
  };

  handleLicenceChange = (event) => {
    this.setState({ licence: event.currentTarget.checked });
  };
  render() {
    const { name, tag } = this.state;
    return (
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={this.handleSubmit}
      >
        <label>
          <input
            type="text"
            name="name"
            placeholder="Введите имя"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="tag"
            placeholder="Введите никнейм"
            value={tag}
            onChange={this.handleInputChange}
          />
        </label>
        <p>Ваш уровень разработчика:</p>
        <label>
          Junior
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleInputChange}
            checked={this.state.experience === "junior"}
          />
        </label>
        <label>
          Middle
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleInputChange}
            checked={this.state.experience === "middle"}
          />
        </label>
        <label>
          Senior
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleInputChange}
            checked={this.state.experience === "senior"}
          />
        </label>

        <br />
        <label>
          Согласен с условием
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
        </label>
        <button
          style={{ width: "100px", height: "25px", marginTop: "10px" }}
          type="submit"
          disabled={!this.state.licence}
        >
          Отправить
        </button>
      </form>
    );
  }
}
