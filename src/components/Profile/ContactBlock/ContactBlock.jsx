import React from 'react';
import styles from '../profile.module.css';
import Block from './Block';

function ContactBlock(props) {
  return (
    <div className={styles.info}>
      {props.filteredContacts.map((contact) => {
        return <Block contact={contact} key={contact._id} />;
      })}
    </div>
  );
}

export default ContactBlock;
