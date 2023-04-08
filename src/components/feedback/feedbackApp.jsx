import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';




  class FeedbackApp extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  
    handleFeedback = feedback => {
      this.setState(prevState => ({
        [feedback]: prevState[feedback] + 1,
      }));
    };
  
    render() {
      const { good, neutral, bad } = this.state;
      const total = good + neutral + bad;
      const positivePercentage = Math.round((good / total) * 100);
      const feedbackOptions = Object.keys(this.state);
  
      return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={feedbackOptions}
              onLeaveFeedback={this.handleFeedback}
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
    }
  }
  
  export default FeedbackApp;