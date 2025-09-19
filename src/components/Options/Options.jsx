import styles from './Options.module.css'

export default function Options({ options = [], onLeaveFeedback, onReset, totalFeedback = 0 }) {
  return (
    <div className={styles.row}>
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          className={styles.btn}
          onClick={() => onLeaveFeedback(opt)}
        >
          {opt}
        </button>
      ))}

      {totalFeedback > 0 && (
        <button
          type="button"
          className={`${styles.btn} ${styles.reset}`}
          onClick={onReset}
          aria-label="Reset feedback"
        >
          Reset
        </button>
      )}
    </div>
  )
}
