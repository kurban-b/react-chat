import React from 'react';
import styles from './contacts.module.css';
import { NavLink, useParams } from 'react-router-dom';
import LastMessages from './Info/LastMessages';
import NameContacts from './NameContacts';
import Avatar from './Avatar';
import { useSelector } from 'react-redux';
import Time from './Info/Time';

function Contact(props) {
  const darkTheme = useSelector((state) => state.application.darkTheme);
  const id = useSelector((state) => state.messages.activeContactId);
  //Активный чат (выделенный бэкграунд)
  return (
    <div
      className={
        id === props.contact._id
          ? `${styles.selected} ${styles.contacts}`
          : styles.contacts
      }
    >
      <NavLink
        className={darkTheme ? styles.link_dark : ''}
        to={`/contact/${props.contact._id}`}
      >
        <li>
          <Avatar conacts={props.contact} />
          <div className={styles['info_block']}>
            <NameContacts contacts={props.contact} />
            <LastMessages contacts={props.contact} />
          </div>
          <div className={styles.time}>
            <Time contacts={props.contact} />
          </div>
        </li>
      </NavLink>
    </div>
  );
}

export default Contact;
