import styles from './chat.module.css';

function Message(props) {
const isUserProfile = props.message.toUserId !== props.profile._id;
const date = new Date(Date.parse(props.message.time));

  return (
    <div className={isUserProfile ? styles.outgoing : styles.incoming}>
      <div className={styles.message}>{props.message.content}</div>
      <div className={styles.message__time_checked}>
        {isUserProfile ? '' :
          <div className={styles.message__checked}>
            {props.message.read
              ? <span className="material-icons">check</span>
              : <span className="material-icons">done_all</span>
            }
          </div>
        }
        <div className={styles.message__time}>
          {`${date.getHours()}:${date.getMinutes()}`}
        </div>
      </div>
      <ul>
        <li>
          <span className="material-icons">expand_more</span>
        </li>
        <li className={styles.dropdownBtn}>
          <button className={styles.dropdownBtn__btn}>удалить</button>
        </li>
      </ul>
    </div>
  );
}

export default Message;
