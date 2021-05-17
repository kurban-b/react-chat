import React from 'react';
import PropTypes from 'prop-types';
import styles from './avatar.module.css';

function Avatar({ fullname, size, online }) {
  return (
    <div className={styles[size]}>
      <p className={online ? styles.online : null} />
      <p> {fullname !== undefined ? fullname.substr(0, 1) : null} </p>
    </div>
  );
}

Avatar.propTypes = {
  fullname: PropTypes.string,
  online: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Avatar.defaultProps = {
  fullname: '',
  online: false,
  size: 'medium',
};

export default Avatar;
