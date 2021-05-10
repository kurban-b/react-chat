import React from 'react';
import styles from '../Contacts/contacts.module.css';


function Avatar1({size, online, contact}) {
  return (
    <div className={styles.avatar}>
      <p className={online ? styles.online : ''}/>
      <p> {contact.fullname.substr(0, 1)} </p>
    </div>
  );
}

export default Avatar1;
