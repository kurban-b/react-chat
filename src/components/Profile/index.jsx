import React, { useEffect } from 'react';
import styles from './profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadApplicaton } from '../../redux/ducks/application';

function Profile(props) {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.application.darkTheme);
  const application = useSelector((state) => state.application.items);

  useEffect(() => {
    dispatch(loadApplicaton());
  }, []);

  return (
    <div className={darkTheme ? styles.container_dark : styles.container}>
      <div className={styles.info}>
        <div className={styles.icon} />
        <div className={styles.name}>{application.fullname}</div>
        <div className={styles.username}>@{application.username}</div>
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
      <div className={styles.social}>
        <div>Social</div>
        <div
          className={darkTheme ? styles.socialBlock_dark : styles.socialBlock}
        >
          <div className={styles.media}>
            <div className={styles.mediaImages}>
              <i className="fab fa-instagram"></i>
            </div>
            <div className={styles.mediaUsername}>{application.username}</div>
          </div>
          <div className={styles.media}>
            <div className={styles.mediaImages}>
              <i className="fab fa-twitter"></i>
            </div>
            <div className={styles.mediaUsername}>{application.username}</div>
          </div>
          <div className={styles.media}>
            <div className={styles.mediaImages}>
              <i className="fab fa-facebook-square"></i>
            </div>
            <div className={styles.mediaUsername}>{application.username}</div>
          </div>
        </div>
        <div>Media</div>
        <div className={darkTheme ? styles.mediaBlock_dark : styles.mediaBlock}>
          <div className={styles.desktop}></div>
          <div className={styles.desktopText}>desktop-chat.pdf</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
