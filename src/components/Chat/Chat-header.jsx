import React from 'react';
import styles from './chat.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function ChatHeader() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const params = useParams().id;
  const filerContact = contacts.find((contact) => contact._id === params);

  console.log(filerContact);

  return <div className={styles.header}>{filerContact.fullname}</div>;
}

export default ChatHeader;
