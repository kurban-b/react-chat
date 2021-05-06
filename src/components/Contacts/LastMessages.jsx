import React from 'react';
import styles from './contacts.module.css';

function LastMessages(props) {
  const last = props.contacts.lastMessage && props.contacts.lastMessage.content;
  const messages = last && last.substr(0, 40) + '...';
  return <p className={styles.messages}>{messages}</p>;
}

export default LastMessages;
