import React from 'react';
import styles from './profile.module.css';
import { useSelector } from 'react-redux';
import ContactBlock from './ContactBlock';
import Social from './Social';
import Media from './Media';
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

function Profile() {
  const darkTheme = useSelector((state) => state.application.darkTheme);

  const open = useSelector((state) => state.application.open);

  const id = useParams().id;

  const contact = useSelector((state) => {
    return state.contacts.contacts.find((contact) => id === contact._id);
  });

  return (
    <CSSTransition
      in={open}
      timeout={1000}
      classNames={{
        enter: 'profile-enter',
        enterActive: 'profile-enter-active',
        exit: 'profile-exit',
        exitActive: 'profile-exit-active',
      }}
      unmountOnExit
    >
      <div className={darkTheme ? styles.container_dark : styles.container}>
        <div className={styles['profile-wrapper']}>
          <ContactBlock contact={contact} />
          <div className={styles.social}>
            <Social darkTheme={darkTheme} contact={contact} />
            <Media darkTheme={darkTheme} />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Profile;
