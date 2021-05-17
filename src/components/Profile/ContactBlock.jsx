import React from 'react';
import styles from './profile.module.css';
import Avatar from '../App/Avatar/Avatar';
import PropTypes from 'prop-types';

function ContactBlock({ contact }) {
  return (
    <div className={styles.info}>
      <div>
        <div className={styles.avatarBlock}>
          <Avatar size="large" fullname={contact.fullname} />
        </div>
        <div className={styles.name}>{contact.fullname}</div>
        <div className={styles.username}>@{contact.username}</div>
        <div className={styles.icons}>
          <div className={styles.connection}>
            <span className="material-icons">call</span>
          </div>
          <div className={styles.connection}>
            <span className="material-icons">videocam</span>
          </div>
          <div className={styles.connection}>
            <span className="material-icons">email</span>
          </div>
        </div>
      </div>
    </div>
  );
}

ContactBlock.propTypes = {
  contact: PropTypes.object,
};

ContactBlock.defaultProps = {
  contact: {},
};

export default ContactBlock;
