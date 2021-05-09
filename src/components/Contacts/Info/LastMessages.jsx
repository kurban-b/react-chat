import React from 'react';
import styles from '../contacts.module.css';

function LastMessages(props) {
  const last = props.contacts.lastMessage && props.contacts.lastMessage.content;
  //Возвращаем нужную количество символов, для последнего сообщения в разделе контактов
  const messages = last && last.substr(0, 20);
  return (
    <p className={styles.messages}>
      {messages && messages.length >= 20 ? `${messages}...` : messages}
    </p>
  );
}

export default LastMessages;
