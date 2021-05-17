import React from 'react';
import styles from '../chat.module.css';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/ru';

function MessageTime({ date }) {
  if (date === undefined) {
    return null;
  }

  return (
    <div className={styles['message-time']}>
      {moment(date).locale('ru').format('LT')}
    </div>
  );
}

MessageTime.propTypes = {
  date: PropTypes.string,
};

export default MessageTime;
