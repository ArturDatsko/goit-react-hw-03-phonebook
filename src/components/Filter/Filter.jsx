import React from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <div className={css.filter}>
    <label className={css.title}>
      Search by name
      <input
        type="name"
        value={value}
        onChange={onChange}
        className={css.input}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
