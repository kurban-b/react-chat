import React from 'react';
import styles from '../chat.module.css';
import PropTypes from 'prop-types';

function MessageTime({ hours, minuts }) {
  return <div className={styles.message__time}>{`${hours}:${minuts}`}</div>;
}

MessageTime.propTypes = {
  hours: PropTypes.number,
  minuts: PropTypes.number,
};

export default MessageTime;
