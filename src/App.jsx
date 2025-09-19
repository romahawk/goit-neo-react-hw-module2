import { useEffect, useMemo, useState } from 'react'
import Section from './components/Section/Section.jsx'
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Notification from './components/Notification/Notification.jsx'

const STORAGE_KEY = 'sip-happens-feedback'

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 }
    } catch {
      return { good: 0, neutral: 0, bad: 0 }
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback))
  }, [feedback])

  const updateFeedback = (type) => {
    setFeedback(prev => ({ ...prev, [type]: prev[type] + 1 }))
  }

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 })
  }

  const total = useMemo(() => feedback.good + feedback.neutral + feedback.bad, [feedback])

  const positivePercentage = useMemo(() => {
    if (!total) return 0
    return Math.round((feedback.good / total) * 100)
  }, [feedback.good, total])

  return (
    <div className="container">
      <Section title="Sip Happens Café">
        <p>Please leave your feedback about our service by selecting one of the options below.</p>
      </Section>

      <Section title="Options">
        <Options
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={updateFeedback}
          onReset={resetFeedback}
          totalFeedback={total}
        />
      </Section>

      <Section title="Feedback">
        {total === 0 ? (
          <Notification message="No feedback yet" />
        ) : (
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  )
}
