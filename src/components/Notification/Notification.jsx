import styles from './Notification.module.css'

export default function Notification({ message }) {
  return <p className={styles.note}>{message}</p>
}
