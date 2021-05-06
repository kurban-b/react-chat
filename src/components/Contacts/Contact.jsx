import React from 'react';
import styles from './contacts.module.css';
import { NavLink, useParams } from 'react-router-dom';
import LastMessages from './LastMessages';
import NameContacts from './NameContacts';
function Contact(props) {
  const params = useParams()._id;
  console.log(params);
  return (
    <div className={styles.contacts}>
      <NavLink
        to={`/contact/${props.contact._id}`}>
        <li>
          <NameContacts contacts={props.contact}/>
          <LastMessages contacts={props.contact} />
        </li>
      </NavLink>
    </div>
  );
}

export default Contact;