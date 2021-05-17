import React from 'react';
import styles from './profile.module.css';
import PropTypes from 'prop-types';

function Social({ contact, darkTheme }) {
  return (
    <div>
      <div>Social</div>
      <div className={darkTheme ? styles.socialBlock_dark : styles.socialBlock}>
        <div className={styles.media}>
          <div className={styles.socialIcon}>
            <i className="fab fa-instagram" />
          </div>
          <div className={styles.socialUsername}>
            {contact.socials !== undefined ? contact.socials.instagram : null}
          </div>
        </div>
        <div className={styles.media}>
          <div className={styles.socialIcon}>
            <i className="fab fa-twitter" />
          </div>
          <div className={styles.socialUsername}>
            {contact.socials !== undefined ? contact.socials.facebook : null}
          </div>
        </div>
        <div className={styles.media}>
          <div className={styles.socialIcon}>
            <i className="fab fa-facebook-square" />
          </div>
          <div className={styles.socialUsername}>
            {contact.socials !== undefined ? contact.socials.twitter : null}
          </div>
        </div>
      </div>
    </div>
  );
}

Social.propTypes = {
  contact: PropTypes.object,
};

Social.defaultProps = {
  contact: {},
};

export default Social;
