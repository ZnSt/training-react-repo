import { Component } from "react";
import React from "react";
import shortid from "shortid";

import inintialContacts from "../data/constacts";
import { FormContacts } from "./FormContatcs";
import { ContactsList } from "./ContactsList";
import { FilterContacts } from "./FilterContacts";

class Book extends Component {
  state = {
    contacts: inintialContacts,
    filter: "",
  };
  addContact = ({ name, number }) => {
    console.log(name);
    console.log(number);
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));

    if (this.state.contacts.some((contact) => contact.name === name)) {
      alert(`A user with the same ${name} already exists`);
    }
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  filterChange = (event) => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normilizedFilter));
  };
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <h2>Phonebook</h2>
        <FormContacts onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <FilterContacts value={filter} filterChange={this.filterChange} />

        <ContactsList
          contacts={visibleContacts}
          onDelete={this.deleteContact}
          getVisibleContacts={this.getVisibleContacts}
        />
      </>
    );
  }
}

export default Book;
