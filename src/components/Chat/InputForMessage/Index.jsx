import React, { useState } from 'react';
import styles from '../chat.module.css';
import ButtonAddMessage from './Button';
import { useParams } from 'react-router-dom';
import AddFile from './AddFile';
import InputMassage from './InputMassage';

function InputForMessage() {
  const [textMessage, setTextMessage] = useState('');

  const idContact = useParams().id;

  const handleMessageInput = (e) => {
    setTextMessage(e.target.value);
  };

  return (
    <div className={styles['input-block']}>
      <InputMassage text={textMessage} handleChange={handleMessageInput} />
      <AddFile />
      <ButtonAddMessage
        content={textMessage}
        idContact={idContact}
        setTextMessage={setTextMessage}
      />
    </div>
  );
}

export default InputForMessage;
