import React from 'react';
import MessageTime from '../../Chat/Messages/MessageTime';
import { PropTypes } from 'prop-types';

function Time(props) {
  const time = props.contacts.lastMessage && props.contacts.lastMessage.time;
  return <MessageTime date={time} />;
}

Time.propTypes = {
  lastMessage: PropTypes.string,
  time: PropTypes.string,
};
export default Time;
