import React from 'react';
import styles from '../chat.module.css';
import PropTypes from 'prop-types';

function InputMassage({ text, handleChange }) {
  return (
    <>
      <input
        type="text"
        className={styles['input-message']}
        placeholder="Введите сообщение"
        value={text}
        onChange={handleChange}
      />
    </>
  );
}

InputMassage.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputMassage;
