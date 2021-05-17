import React from 'react';
import styles from '../chat.module.css';
import PropTypes from 'prop-types';

function MessageReadChecked({ message, isUserProfile }) {
  return (
    <>
      {!isUserProfile ? (
        ''
      ) : message.sending ? (
        <div className={styles['message-checked']}>
          <span className="material-icons">schedule</span>
        </div>
      ) : (
        <div className={styles['message-checked']}>
          {message.read ? (
            <span className="material-icons">done_all</span>
          ) : (
            <span className="material-icons">check</span>
          )}
        </div>
      )}
    </>
  );
}

MessageReadChecked.propTypes = {
  read: PropTypes.object,
  isUserProfile: PropTypes.bool.isRequired,
};

MessageReadChecked.defaultProps = {
  read: {},
};
export default MessageReadChecked;
