import React from 'react';
import { useSelector } from 'react-redux';
import Contact from './Contact';
import Search from './Search';

function MainContacts(props) {
  const contacts = useSelector((state) => state.contacts.contacts);

  return (
    <div>
      <Search />
      <ul>
        {contacts.map((contact) => {
          return <Contact contact={contact} key={contact._id} />;
        })}
      </ul>
    </div>
  );
}

export default MainContacts;
