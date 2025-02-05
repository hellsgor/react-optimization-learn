import { setId } from '../../../helpers/setId';
import classes from './Input.module.css';
import PropTypes from 'prop-types';

export const Input = ({ label, value, error, type = 'text', ...restProps }) => {
  const id = setId();

  return (
    <div className={classes.input}>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} value={value} type={type} {...restProps} />
      {error && <p>{error}</p>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
};
