import React from 'react';
import styles from '../profile.module.css';
import Avatar from '../../App/Avatar';
import { PropTypes } from 'prop-types';

function Block(props) {
  return (
    <div>
      <div className={styles.profile_avatar}>
        <Avatar
          fullname={props.contact.fullname}
          size={'medium'}
          online={props.contact.online}
        />
      </div>
      <div className={styles.name}>{props.contact.fullname}</div>
      <div className={styles.username}>@{props.contact.username}</div>
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
  );
}

Block.propTypes = {
  contact: PropTypes.object.isRequired,
  _id: PropTypes.number,
};

export default Block;
