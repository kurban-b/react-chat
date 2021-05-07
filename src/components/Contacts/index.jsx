import React, { useEffect } from 'react';
import styles from './contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadContacts } from '../../redux/ducks/contacts';
import MainContacts from './MainContacts';

function Contacts(props) {
  const dispatch = useDispatch();
  const darkTheme = useSelector(state => state.application.darkTheme)
  useEffect(() => {
    dispatch(loadContacts());
  }, [dispatch]);

  return (
    <div className={darkTheme ? styles.container_dark : styles.container}>
      <MainContacts />
    </div>
  );
}

export default Contacts;
