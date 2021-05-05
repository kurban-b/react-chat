import React from 'react';
import styles from '../chat.module.css';
import ButtonAddMessage from './Button/Index';

function InputForMessage(props) {
  return (
    <div className={styles.input__block}>
      <input type="text" className={styles.input__message} />
      <ButtonAddMessage />
    </div>
  );
}

export default InputForMessage;
