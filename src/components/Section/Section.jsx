import styles from './Section.module.css'

export default function Section({ title, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <div>{children}</div>
    </section>
  )
}
