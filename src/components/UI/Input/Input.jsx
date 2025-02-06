import { getClassNames } from '../../../helpers/getClassNames';
import { setId } from '../../../helpers/setId';
import PropTypes from 'prop-types';

import classes from './Input.module.css';
import controlClasses from '../Control/Control.module.css';

export const Input = ({ label, value, error, type = 'text', ...restProps }) => {
  return (
    <label className={getClassNames(classes.input, controlClasses.control)}>
      {label && <span>{label}</span>}
      <input value={value} type={type} {...restProps} />
      {error && <p>{error}</p>}
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
};
