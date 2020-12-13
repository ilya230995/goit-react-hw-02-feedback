import PropTypes from 'prop-types';

function NotificationMessage({ message }) {
  return (
    <>
      <p>{message}</p>
    </>
  );
}
export default NotificationMessage;

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
