import s from './SectionTitle.module.css';
import PropTypes from 'prop-types';

function SectionTitle({ title, children }) {
  return (
    <>
      <h2 className={s.titleForSections}>{title}</h2>
      {children}
    </>
  );
}
export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
