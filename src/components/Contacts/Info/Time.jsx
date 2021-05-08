import React from 'react';
import MessageTime from '../../Chat/Messages/MessageTime';

function Time(props) {
  const time = props.contacts.lastMessage && props.contacts.lastMessage.time;
  return <MessageTime date={time} />;
}

export default Time;
