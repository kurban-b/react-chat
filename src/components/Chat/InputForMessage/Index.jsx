import React, { useState } from 'react';
import styles from '../chat.module.css';
import ButtonAddMessage from './Button/Index';
import { useParams } from 'react-router-dom';
import AddFile from './AddFile';

function InputForMessage() {
  const [textMessage, setTextMessage] = useState('');
  const idContact = useParams().id;

  const handleMessageInput = (e) => {
    setTextMessage(e.target.value);
  };

  return (
    <div className={styles.input__block}>
      <input
        type="text"
        className={styles.input__message}
        placeholder="Введите сообщение"
        value={textMessage}
        onChange={handleMessageInput}
      />
      <AddFile />
      <ButtonAddMessage content={textMessage} idContact={idContact} />
    </div>
  );
}

export default InputForMessage;
