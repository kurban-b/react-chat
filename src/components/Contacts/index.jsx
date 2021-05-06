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
      <MainContacts />
    </div>
  );
}

export default Contacts;
