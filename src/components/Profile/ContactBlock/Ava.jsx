import React from 'react';
import styles from '../profile.module.css';

function Ava (props) {
  const name = props.contacts.fullname.substr(0, 1);
  const online = props.contacts.online;
  return (
    <div className={styles.avatar}>
      <p className={online ? styles.online : ''}></p>
      <p>{name}</p>
    </div>
  );
}

export default Ava;