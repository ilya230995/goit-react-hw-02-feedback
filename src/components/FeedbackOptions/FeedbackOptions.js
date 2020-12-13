import s from './FeedbackOptison.module.css'
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map((el, index) => (
        <button className={s.feedbackBtn} key={index} onClick={() => onLeaveFeedback(el)}>
          {el}
        </button>
      ))}
    </>
  );
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};
