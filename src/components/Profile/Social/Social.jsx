import React from 'react';
import UserName from './UserName';

function Social(props) {
  return (
    <div>
      {props.filteredContacts.map((contact) => {
        return (
          <UserName
            contact={contact}
            key={contact._id}
            darkTheme={props.darkTheme}
          />
        );
      })}
    </div>
  );
}

export default Social;
