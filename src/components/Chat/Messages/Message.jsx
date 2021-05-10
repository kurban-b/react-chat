import styles from '../chat.module.css';
import PropTypes from 'prop-types';
import MessageInfo from './MessageInfo';
import MessageReadChecked from './MessageReadChecked';
import MessageTime from './MessageTime';
import MessageDropdown from './MessageDropdown';
import Avatar from '../../App/Avatar';

function Message({ message, profileId }) {
  const isUserProfile = message.toUserId !== profileId;

  // Вывод сообщения с типом инфо
  if (message.type === 'info') {
    return <MessageInfo content={message.content} />;
  }

  return (
    <div className={isUserProfile ? styles.outgoing : styles.incoming}>
      {isUserProfile ? null : <Avatar size={'small'} online={false}/>}
      <div className={isUserProfile ? styles.messageOutgoing : styles.messageIncoming}>
        <div className={styles.message}>{message.content}</div>
        <div className={styles.message__time_checked}>
          <MessageReadChecked message={message} isUserProfile={isUserProfile} />
          <MessageTime date={message.time} />
        </div>
        <MessageDropdown id={message._id} />
      </div>
    </div>

  );
}

Message.propTypes = {
  message: PropTypes.object,
  profileId: PropTypes.string,
};

export default Message;
