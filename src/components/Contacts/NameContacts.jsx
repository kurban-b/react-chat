import React from 'react';
import styles from './contacts.module.css';

function NameContacts (props) {
  return (
    <p className={styles.name}>{props.contacts.fullname}</p>
  );
}

export default NameContacts;