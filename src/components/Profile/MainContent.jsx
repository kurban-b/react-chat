import React from 'react';
import styles from './profile.module.css';
import ContactBlock from './ContactBlock/ContactBlock';
import Social from './Social/Social';
import Media from './Media/Media';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';

function MainContent(props) {
  const application = useSelector((state) => state.application.items);
  const contacts = useSelector((state) => state.contacts.contacts);
  const params = useParams().id;
  const loading = useSelector((state) => state.application.loading);

  const filteredContacts = contacts.filter((contact) => {
    if (contact._id === params) {
      return true;
    }
    return false;
  });

  if (loading === true) {
    return (
      <div className={styles.spin}>
        <ReactLoading type="spin" color="#474747" width={40} height={40} />
      </div>
    );
  }

  return (
    <div>
      <ContactBlock
        application={application}
        filteredContacts={filteredContacts}
      />
      <div className={styles.social}>
        <Social
          darkTheme={props.darkTheme}
          filteredContacts={filteredContacts}
        />
        <Media darkTheme={props.darkTheme} />
      </div>
    </div>
  );
}

export default MainContent;
