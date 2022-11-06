import { Component } from "react";

export class FormContacts extends Component {
  state = {
    name: "",
    number: "",
  };
  handleSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSubmit({ name: this.state.name, number: this.state.number });

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label>
          <input
            placeholder="Name"
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Number"
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit" onClick={this.addContact}>
          Add Contact
        </button>
      </form>
    );
  }
}
