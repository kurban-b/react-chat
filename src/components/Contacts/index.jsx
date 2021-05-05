import React, { useEffect } from 'react';
import styles from './contacts.module.css';
import { useDispatch } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';

function Contacts(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  return <div className={styles.container}>Здесь контакты</div>;
}

export default Contacts;
