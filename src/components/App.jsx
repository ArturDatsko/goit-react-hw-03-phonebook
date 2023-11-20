import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './App.module.css';
import Contacts from './Contacts/Contacts';
import Form from './Form/Form';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    let isAdded = this.state.contacts.findIndex(
      el => el.name.toLowerCase() === name.toLowerCase()
    );

    if (isAdded >= 0) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  showContacts = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const showContacts = this.showContacts();

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />

        <h2 className={css.titleContacts}>Contacts</h2>
        <div className={css.allContacts}>All contacts: {contacts.length}</div>
        <Filter value={filter} onChange={this.onFilterChange} />
        <Contacts
          contacts={showContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
