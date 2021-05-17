import React from 'react';
import styles from '../contacts.module.css';
import { PropTypes } from 'prop-types';

function LastMessages({ message }) {
  const last = message && message.content;

  //Возвращаем нужное количество символов, для последнего сообщения в разделе контактов
  const messages = last && last.substr(0, 15);

  return (
    <p className={styles.messages}>
      {messages && messages.length >= 15 ? `${messages}...` : messages}
    </p>
  );
}

LastMessages.propTypes = {
  message: PropTypes.object,
};

LastMessages.defaultProps = {
  message: {},
};

export default LastMessages;
