import React from 'react';
import styles from './chat.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ChatHeader() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const params = useParams().id;

  return (
    <div className={styles.header}>
      {contacts.length === 0
        ? ''
        : contacts.find((contact) => contact._id === params).fullname}
    </div>
  );
}

export default ChatHeader;
