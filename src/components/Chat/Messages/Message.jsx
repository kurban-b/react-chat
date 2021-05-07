import styles from '../chat.module.css';
import PropTypes from 'prop-types';
import MessageInfo from './MessageInfo';
import MessageReadChecked from './MessageReadChecked';
import MessageTime from './MessageTime';
import MessageDropdown from './MessageDropdown';

function Message({ message, profileId }) {
  const isUserProfile = message.toUserId !== profileId;

  // Вывод сообщения с типом инфо
  if (message.type === 'info') {
    return <MessageInfo content={message.content} />;
  }

  return (
    <div className={isUserProfile ? styles.outgoing : styles.incoming}>
      <div className={styles.message}>{message.content}</div>
      <div className={styles.message__time_checked}>
        <MessageReadChecked read={message.read} isUserProfile={isUserProfile} />
        <MessageTime date={message.time} />
      </div>
      <MessageDropdown id={message._id} />
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.object,
  profileId: PropTypes.string,
};

export default Message;
