import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chat.module.css';

function MessageInfo({ content }) {
  return <div className={styles['message-info']}>{content}</div>;
}

MessageInfo.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MessageInfo;
