import React, { useEffect } from 'react';
import styles from './profile.module.css';
import ContactBlock from './ContactBlock/ContactBlock';
import Social from './Social/Social';
import Media from './Media/Media';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { PropTypes } from 'prop-types';

function MainContent(props) {
  const dispatch = useDispatch();
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
        <ReactLoading type="spin" color="blue" width={20} height={20} />
      </div>
    );
  }

  return (
    <div>
      <ContactBlock filteredContacts={filteredContacts} />
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

MainContent.propTypes = {
  darkTheme: PropTypes.bool,
};

export default MainContent;
