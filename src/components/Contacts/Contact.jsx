import React from 'react';
import styles from './contacts.module.css'
import { Link, NavLink } from 'react-router-dom';
function Contact (props) {
  return (
    <div className={styles.contacts}>
    <NavLink to={props.contact._id} activeClassName={styles.selected}>
      <li>
        {props.contact.fullname}
      </li>
    </NavLink>

    </div>
  );
}

export default Contact;