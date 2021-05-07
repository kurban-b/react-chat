import React from 'react';
import styles from '../chat.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SearchMessage from './SearchMessage';
import Toggle from './Toggle';
import ToogleTheme from './ToogleTheme';

function ChatHeader() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const params = useParams().id;
  const loading = useSelector((state) => state.messages.loading);
  const contact = contacts.find((contact) => contact._id === params);

  if (loading) {
    return (
      <div className={styles.header__loading}>
        <div className={styles.header_loader__icon}>
          <span className="material-icons">cached</span>
        </div>
        <div>Загрузка чата</div>
      </div>
    );
  }

  return (
    <div className={styles.header}>
      <SearchMessage />
      <div className={styles.header_name__block}>
        {contacts.length === 0 ? (
          ''
        ) : contact.online && contact.online !== undefined ? (
          <>
            {contact.fullname}
            <div className={styles.header_name__online} />
          </>
        ) : (
          contact.fullname
        )}
      </div>
      <ToogleTheme />
      <Toggle />
    </div>
  );
}

export default ChatHeader;
