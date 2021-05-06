import React, { useEffect } from 'react';
import styles from './contacts.module.css';
import { useDispatch } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';
import MainContacts from './MainContacts';
import { Route } from 'react-router-dom';

function Contacts(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Route exact path="/contact/:id?">
        <MainContacts />
      </Route>
    </div>
  );
}

export default Contacts;
