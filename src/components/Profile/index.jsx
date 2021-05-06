import React, { useEffect } from 'react';
import styles from './profile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadApplicaton } from '../../redux/ducks/application';
import icon1 from './icons/phone-alt-solid.svg';
import icon2 from './icons/video-solid.svg';
import icon3 from './icons/envelope-solid.svg';
import instagram from './icons/instagram-brands (1).svg';
import twitter from './icons/twitter-brands.svg';
import facebook from './icons/facebook-square-brands.svg';

function Profile(props) {
  const dispatch = useDispatch();
  const application = useSelector((state) => state.application.items);

  useEffect(() => {
    dispatch(loadApplicaton());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.icon} />
        <div className={styles.name}>{application.fullname}</div>
        <div className={styles.username}>@{application.username}</div>
        <div className={styles.icons}>
          <div className={styles.connection}>
            <img src={icon1} alt="img" />
          </div>
          <div className={styles.connection}>
            <img src={icon2} alt="img" />
          </div>
          <div className={styles.connection}>
            <img src={icon3} alt="img" />
          </div>
        </div>
      </div>
      <div className={styles.social}>
        <div>Social</div>
        <div className={styles.socialBlock}>
          <div className={styles.media}>
            <div className={styles.mediaImages}>
              <img src={instagram} alt="instagram" />
            </div>
            <div className={styles.mediaUsername}>{application.username}</div>
          </div>
          <div className={styles.media}>
            <div className={styles.mediaImages}>
              <img src={twitter} alt="instagram" />
            </div>
            <div className={styles.mediaUsername}>{application.username}</div>
          </div>
          <div className={styles.media}>
            <div className={styles.mediaImages}>
              <img src={facebook} alt="instagram" />
            </div>
            <div className={styles.mediaUsername}>{application.username}</div>
          </div>
        </div>
        <div>Media</div>
        <div className={styles.mediaBlock}>
          <div className={styles.desktop}></div>
          <div className={styles.desktopText}>desktop-chat.pdf</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
