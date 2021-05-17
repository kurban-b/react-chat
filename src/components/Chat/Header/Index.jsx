import React from 'react';
import styles from '../chat.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SearchMessage from './SearchMessage';
import Toggle from './Toggle';
import ToogleTheme from './ToogleTheme';

function ChatHeader() {
  const params = useParams().id;

  const loading = useSelector((state) => state.messages.loading);

  const contact = useSelector((state) => {
    return state.contacts.contacts.find((contact) => contact._id === params);
  });

  if (loading) {
    return (
      <div className={styles['header-loading']}>
        <div className={styles['header-loader-icon']}>
          <span className="material-icons">cached</span>
        </div>
        <div>Загрузка чата</div>
      </div>
    );
  }

  return (
    <div className={styles.header}>
      <SearchMessage />
      <div className={styles['header-name-block']}>
        {contact === undefined ? (
          ''
        ) : contact.online && contact.online !== undefined ? (
          <>
            {contact.fullname}
            <div className={styles['header-name-online']} />
          </>
        ) : (
          contact.fullname
        )}
      </div>
      <div className={styles.toogls}>
        <ToogleTheme />
        <Toggle />
      </div>
    </div>
  );
}

export default ChatHeader;
