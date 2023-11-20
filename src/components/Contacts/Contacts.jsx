import css from './Contacts.module.css';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.item}>
        <p className={css.contact}>
          {name}: {number}
        </p>
        <button
          className={css.btn}
          type="submit"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
