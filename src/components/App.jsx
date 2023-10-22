import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import css from './FeedbackOptions/FeedbackOptions.module.css';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(good + 1);
        break;

      default:
        return;
    }
    // if (option === 'good') {
    //   setGood(good +1);
    // }
    // if (option === 'neutral') {
    //   setNeutral(good + 1);
    // }
    // if (option === 'bad') {
    //   setBad(good + 1);
    // }
    // this.setState(prevSttate => ({ [option]: prevSttate[option] + 1 }));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentageFeedback = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const massageFeedback = countTotalFeedback();
  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClickFeedback}
        />

        {massageFeedback === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={positivePercentageFeedback()}
          ></Statistics>
        )}
      </Section>
    </div>
  );
};
