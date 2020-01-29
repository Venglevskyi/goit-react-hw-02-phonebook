import React, { Component } from "react";

import uuid from "uuid";
import styles from "./base.module.css";

import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  addContact = (name, number) => {
    const contacts = {
      id: uuid(),
      name,
      number
    };
    this.setState(prevState => ({
      contacts: prevState.contacts.map(
        contact => (contact.name === name) ? alert(`${name} is already consist`) : [...prevState.contacts, contacts]
      )
    }));
  };
  // this.setState(prevState => {
  //   return { contacts: [...prevState.contacts, contacts] };
  // });

  // updateContacts = contactId => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.map(contact => {
  //         return contact.id === contactId ? { ...contact, contact } : contact;
  //       })
  //     };
  //   });
  // };

  formFilter = filter => {
    this.setState({ filter });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContact();
    return (
      <>
        <h1 className={styles.title}>Phone book</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2 className={styles.title}>Contacts</h2>
        <Filter
          value={filter}
          onChange={this.formFilter}
          visibleSearchContacts={visibleContacts}
          contacts={contacts}
        />
        <ContactList contacts={contacts} />
      </>
    );
  }
}
