import React from 'react';
import styles from './contacts.module.css';
import { NavLink } from 'react-router-dom';
import LastMessages from './Info/LastMessages';
import NameContacts from './NameContacts';
import { useDispatch, useSelector } from 'react-redux';
import Time from './Info/Time';
import { PropTypes } from 'prop-types';
import Avatar from '../App/Avatar';
import { resetReducer } from '../../redux/ducks/messages';

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
          {/* В size рекомендуется передать параметр medium */}
          <Avatar
            contact={props.contact}
            size={'medium'}
            online={props.contact.online}
          />
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

Contact.propTypes = {
  _id: PropTypes.string,
  contact: PropTypes.object,
};
export default Contact;
