import React from 'react';
import styles from '../profile.module.css';
import UserName from './UserName';
import { PropTypes } from 'prop-types';

function Social(props) {
  return (
    <div>
      {props.filteredContacts.map((contact) => {
        return <UserName contact={contact} key={contact._id} darkTheme={props.darkTheme} />;
      })}
    </div>
  );
}

Social.propTypes = {
  darkTheme: PropTypes.bool,
  filteredContacts: PropTypes.object.isRequired,
};

export default Social;
