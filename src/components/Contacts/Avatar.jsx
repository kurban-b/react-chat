import React from 'react';
import styles from './contacts.module.css'
function Avatar (props) {
  const name = props.conacts.fullname.substr(0,1)
  return (
    <div className={styles.avatar}>
      <p>{name}</p>
    </div>
  );
}

export default Avatar;