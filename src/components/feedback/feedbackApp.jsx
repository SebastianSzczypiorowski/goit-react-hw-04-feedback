import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

// 1

const FeedbackApp = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = feedbackType => {
    setFeedback(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);
  const feedbackOptions = Object.keys(feedback);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    </div>
  );
};

export default FeedbackApp;
