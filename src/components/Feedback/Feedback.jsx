import styles from './Feedback.module.css'

export default function Feedback({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={styles.list}>
      <li>Good: <strong>{good}</strong></li>
      <li>Neutral: <strong>{neutral}</strong></li>
      <li>Bad: <strong>{bad}</strong></li>
      <li className={styles.total}>Total: <strong>{total}</strong></li>
      <li>Positive: <strong>{positivePercentage}%</strong></li>
    </ul>
  )
}
