import React from 'react';
import styles from './contacts.module.css';
import PropTypes from 'prop-types';

function NameContacts(props) {
  return <p className={styles.name}>{props.contacts.fullname}</p>;
}

NameContacts.propTypes = {
  fullname: PropTypes.string,
};
export default NameContacts;
