import React from 'react';
import styles from '../profile.module.css';
import UserName from './UserName';

function Social (props) {
  return (
    <div>
      {props.filteredContacts.map((contact) => {
        return <UserName contact={contact} key={contact._id} />
      })}
    </div>
  );
}

export default Social;