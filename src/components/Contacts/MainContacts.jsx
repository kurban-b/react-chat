import React from 'react';
import { useSelector } from 'react-redux';
import Contact from './Contact';
import Search from './Header/Search';
import styles from './contacts.module.css';
import { getFilteredContactsSelector } from '../../redux/ducks/contacts';
import PreloaderRow from './Preloader/PreloaderRow';

function MainContacts() {
  const contacts = useSelector(getFilteredContactsSelector);

  const loading = useSelector((state) => state.contacts.loading);

  return loading ? (
    <PreloaderRow />
  ) : (
    <div className={styles['main-contact']}>
      <Search />
      <ul>
        {contacts.map((contact) => {
          return <Contact contact={contact} key={contact._id} />;
        })}
      </ul>
    </div>
  );
}

export default MainContacts;
