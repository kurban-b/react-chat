import React from 'react';
import styles from './contacts.module.css';
import { NavLink, useParams } from 'react-router-dom';
import LastMessages from './LastMessages';
import NameContacts from './NameContacts';
import Avatar from './Avatar';
import { useSelector } from 'react-redux';

function Contact(props) {
  const darkTheme = useSelector(state => state.application.darkTheme)
  const params = useParams().id;

  return (
    <div
      className={
        params === props.contact._id
          ? `${styles.selected} ${styles.contacts}`
          : styles.contacts
      }
    >
      <NavLink className={darkTheme ? styles.link_dark : ''} to={`/contact/${props.contact._id}`}>
        <li>
          <Avatar conacts={props.contact} />
          <div className={styles['info_block']}>
            <NameContacts contacts={props.contact} />
            <LastMessages contacts={props.contact} />
          </div>
        </li>
      </NavLink>
    </div>
  );
}

export default Contact;
