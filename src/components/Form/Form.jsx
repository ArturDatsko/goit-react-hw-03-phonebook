import React, { Component } from 'react';
import css from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  changeEvent = name => e => {
    const { target } = e;

    this.setState(() => ({
      [name]: target.value,
    }));
  };

  submitEvent = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState(() => ({
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.submitEvent}>
        <label>
          Name
          <input
            className={css.input}
            value={this.state.name}
            onChange={this.changeEvent('name')}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            className={css.input}
            value={this.state.number}
            onChange={this.changeEvent('number')}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
