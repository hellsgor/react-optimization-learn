import PropTypes from 'prop-types';
import classes from './Counter.module.css';

export const Counter = ({ text, value }) => {
  const count = value || 0;

  return (
    <div className={classes.counter}>
      <hr />

      <p>
        {text && <span className={classes.text}>{text}</span>}
        <strong>{count}</strong>
      </p>
    </div>
  );
};

Counter.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number.isRequired,
};
