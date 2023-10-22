import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import css from './FeedbackOptions/FeedbackOptions.module.css';
import { Notification } from './Notification/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { setBad, setGood, setNeutral } from './redux/FeedbackSlice';

export const App = () => {
  const good = useSelector(state => state.feedBack.good);
  const neutral = useSelector(state => state.feedBack.neutral);
  const bad = useSelector(state => state.feedBack.bad);
  const dispatsh = useDispatch();

  const handleClickFeedback = option => {
    switch (option) {
      case 'good':
        dispatsh(setGood(good + 1));

        break;

      case 'neutral':
        dispatsh(setNeutral(neutral + 1));

        break;

      case 'bad':
        dispatsh(setBad(good + 1));
        break;

      default:
        return;
    }
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
