import React from 'react';
import styles from '../chat.module.css';
import PropTypes from 'prop-types';

function MessageReadChecked({ read, isUserProfile }) {
  return (
    <>
      {isUserProfile ? (
        ''
      ) : (
        <div className={styles.message__checked}>
          {read ? (
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
  read: PropTypes.bool,
  isUserProfile: PropTypes.bool,
};
export default MessageReadChecked;
