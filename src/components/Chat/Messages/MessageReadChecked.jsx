import React from 'react';
import styles from '../chat.module.css';
import PropTypes from 'prop-types';

function MessageReadChecked({ message, isUserProfile }) {
  return (
    <>
      {!isUserProfile ? (
        ''
      ) : message.sending ? (
        <div className={styles.message__checked}>
          <span className="material-icons">schedule</span>
        </div>
      ) : (
        <div className={styles.message__checked}>
          {message.read ? (
            <span className="material-icons">check</span>
          ) : (
            <span className="material-icons">done_all</span>
          )}
        </div>
      )}
    </>
  );
}

MessageReadChecked.propTypes = {
  read: PropTypes.object,
  isUserProfile: PropTypes.bool,
};
export default MessageReadChecked;
