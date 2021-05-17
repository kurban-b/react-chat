import React from 'react';
import styles from '../chat.module.css';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';

function MessageTime({ date }) {
  return (
    <div className={styles.message__time}>
      {moment(date).locale('ru').format('LT')}
    </div>
  );
}

MessageTime.propTypes = {
  date: PropTypes.string.isRequired,
};

export default MessageTime;
