import s from './Statistics.module.css' 
import PropTypes from 'prop-types';

function Statistics({ good, neutral, bad, total, positiveFeedbackPercentege }) {
  return (
    <div className={s.statisticsFeedback}>
      <p className={s.statisticsFeedbackItem}>Good: {good}</p>
      <p className={s.statisticsFeedbackItem}>Neutural: {neutral}</p>
      <p className={s.statisticsFeedbackItem}>Bad: {bad}</p>
      <p className={s.statisticsFeedbackItem}>Total: {total}</p>
      <p className={s.statisticsFeedbackItem}>
        Positive feedback:{' '}
        {total === 0
          ? (positiveFeedbackPercentege = 0)
          : positiveFeedbackPercentege}
      </p>
    </div>
  );
}
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentege: PropTypes.number.isRequired,
};
