import React from 'react';
import PropTypes from 'prop-types';
import styles from './avatar.module.css'

function Avatar({ contact, size, online }) {

  return (
    <div className={styles[size]}>
      <p className={online ? styles.online : null} />
      <p> {contact !== undefined ? contact.fullname.substr(0, 1) : null} </p>
    </div>
  );
}

Avatar.propTypes = {
  contact: PropTypes.object.isRequired,
  online: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Avatar.defaultProps = {
  online: false,
  size: 'medium',
}

export default Avatar;
