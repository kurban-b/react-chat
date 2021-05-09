import React from 'react';
import { useSelector } from 'react-redux';
import Contact from './Contact';
import Search from './Header/Search';
import styles from './contacts.module.css';
import Preloader from './Preloader';
function MainContacts(props) {
  const filter = useSelector((state) => state.contacts.filter);
  const contacts = useSelector((state) => state.contacts.contacts);
  const loading = useSelector((state) => state.contacts.loading);
  //Фильтрация контактов по имени
  const filtered = contacts.filter(
    (contact) => contact.fullname.indexOf(filter) > -1,
  );
  return loading ? (
    <Preloader />
  ) : (
    <div className={styles.main_contact}>
      <Search />
      <ul>
        {filtered.map((contact) => {
          return <Contact contact={contact} key={contact._id} />;
        })}
      </ul>
    </div>
  );
}

export default MainContacts;
